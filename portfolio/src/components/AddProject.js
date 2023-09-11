import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function AddProject() {
  const navigate = useNavigate();
    const [title , setTitle] = useState("");
    const [author , setAuthor] = useState("");
    const [tech , setTech] = useState("");
    const[message , setMessage] = useState("");
  
    const handleOnSumbit = (e)=>{
        e.preventDefault();
        axios.post('http://192.168.0.132:4000/addProject',{
            projectTitle : title,
            author : author,
            tech : tech
        })
        .then((response)=>{
            setMessage("Project Saved!!");
            navigate("/projects");
        })
        .catch((error)=>{
          setMessage("Error Occured!! Try Again");
        })   
        
    }
  return (
    <>
    <div className='wrapper' style={{textAlign : 'center' , margin : '10px '}}>
      <h1>Welcome , Add your Project Here</h1>
            <form >
                <input type="text" placeholder="Project Title" 
                value={title} id='projectTitle' onChange={(e) => setTitle(e.target.value)} style={{margin : "5px"}} />
                <br/>
                <input type="text" placeholder="Author" 
                value={author} id='author' onChange={(e) => setAuthor(e.target.value)} style={{margin : "5px"}} />
                <br/>
                <input type="text" placeholder="Technology Used" id='tech' value={tech} onChange={(e) => setTech(e.target.value)} style={{margin : "5px"}}/>
                <br/>
                <button style={{margin : "5px"}} type="submit" onClick={handleOnSumbit}>Submit</button>
                {message && (
                  <div className='alert alert-info' role='alert'>
                  {message}
                </div>
                )}
            </form>
    </div>
    </>
  );
}
