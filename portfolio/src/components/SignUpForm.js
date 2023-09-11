import React, { useState } from 'react';
import axios from 'axios';
export default function SignUpForm() {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [cnfpass , setCnfPass] = useState("");
  const [message , setMessage] = useState("");
   
  const handleInputChnage = (e)=>{
    const{id , value} = e.target;
    if(id==="name"){
      setName(value);
    }
    if(id==="email"){
      setEmail(value);
    }
    if(id === "pass1")
    {
      setPassword(value);
    }
    if(id==="pass2"){
      setCnfPass(value);
    }

  }
  const handleSumbit = (e)=>{
    e.preventDefault();
    axios.post('http://192.168.0.132:4000/signUp',{
      name : name,
      email : email,
      password : password
    })
    .then((response)=>{
      setMessage(response.data.message);
      alert("Registered SuccessFully!");
    })
    .catch((error)=>{
      console.error(error);
      setMessage("An Error Occured While registering.");
      alert("Registration Failed");
    });
    
  }
  


  return (
    <>
<section className="vh-100" style={{backgroundColor: 'black'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius : "25px"  , backgroundColor:'black' , borderStyle : 'solid' , borderColor : 'white' , borderWidth : '2px'}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{color:'white'}}>Sign up</p>

                <form className="mx-1 mx-md-4" >

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="name" className="form-control" value={name} onChange={(e)=>handleInputChnage(e)} />
                      <label className="form-label" for="form3Example1c"  style={{color:'white'}}>Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="email" className="form-control" value={email} onChange={(e)=>handleInputChnage(e)} />
                      <label className="form-label" for="form3Example3c" style={{color:'white'}}>Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="pass1" className="form-control" value={password} onChange={(e)=>handleInputChnage(e)}/>
                      <label className="form-label" for="form3Example4c" style={{color:'white'}}>Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="pass2" className="form-control" value={cnfpass} onChange={(e)=>handleInputChnage(e)}/>
                      <label className="form-label" for="form3Example4cd" style={{color:'white'}}>Repeat your password</label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button"  className="btn btn-primary btn-lg" onClick={handleSumbit} >Register</button>
                  </div>

                  {message && (
                    <div className='alert alert-info' role='alert'>
                      {message}
                    </div>
                  )}

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  );
}
