const express = require('express');
const cors = require('cors');
const {MongoClient} = require("mongodb")
const bcrypt = require('bcrypt')
const app = express();
app.use(cors());
app.use(express.json());
const port = 4000;

// Get Route
app.get('/index' , (req,res)=>{
    res.json({message  : 'Hello from Server'});
});
app.get('/about' , (req,res)=>{
    res.json({message : 'THIS IS BILLI IN ABOUT ME SECTION 😹😹😹😹'});
});

//Database Connection
const url = "mongodb://127.0.0.1:27017/"
const dbName = "portfolio"
const pool = new MongoClient(url);

pool.connect()
.then(()=>{
console.log("Conneceted To Database");
})
.catch((error)=>{
 console.log("error occured while connectiong to database::");
})



//User Registration api
app.post("/signUp" , async (req,res)=>{
    console.log(req.body);
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const saltRounds = 10
    console.log("Generating Hash!!");
    try{
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log("Generated Hash !" , hashedPassword);
        console.log("Inserting!!!!");
        const user = {
            name,
            email,
            password : hashedPassword
        }
        console.log("User " , user);
        await pool.connect();
        const db = pool.db(dbName);
        const userCollection = db.collection("users");
        userCollection.createIndex({email : 1},{unique : true});
            const result = await userCollection.insertOne(user);
            console.log("result" , result);
            if(result.acknowledged === true){
                console.log("User Saved Success!");
                res.status(200).json({message : "You Have been registered."});
            }else{
                console.log("Failed To Insert User");
                res.status(500).json({message : "Internal Server Error"});
            }
        }
    catch(err){
        console.log(err);
        res.status(500).json('Internal Server Error');
    }
});

app.post("/addProject" , async (req,res)=>{
    const Title = req.body.projectTitle;
    const author = req.body.author;
    const Technology = req.body.tech;
    const project = {
        Title,
        author,
        Technology
    }
    try{
        await pool.connect();
        const db = pool.db(dbName);
        const projectCollection = db.collection('projects');
        const result = await projectCollection.insertOne(project);
        if(result.acknowledged === true){
            res.status(200).json({message : "Project Saved"});
        }else{
            res.status(500).json({message : "Project Save Failed!"});
        }
    }catch(err){
        res.status(500).json({message : "Internal Server Error"});
    }
})

//Retrieve Project
app.get("/fetchProjects", async (req, res) => {
    try {
        await pool.connect();
        const db = pool.db(dbName); 
        const projectCollection = db.collection("projects");
        const result = await projectCollection.find().toArray();

        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    } 
});
app.listen(port,()=>{
    console.log("Listening on Port", port);
})


