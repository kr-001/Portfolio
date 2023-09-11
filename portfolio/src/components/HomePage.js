import React  from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css'
export default function HomePage(props) {
  let navigate = useNavigate();
  function navigateAboutme(){
    navigate('/projects');
  }
  function navigateAddProject(){
    navigate('/addProject');
  }
    
  return (
    <>
    <div className='homepage'>
      <div className="wrapper" style={props.style}>
        <h1 className="head1">Hello world !</h1>
        <div className="box">
          <h1 className="head2">I am Kumar Ravi</h1>
        </div>
        <h2>I am a Web Developer</h2>
        
      </div>
      <h1 style={{textAlign : 'center'}}>B.Tech(Computer Science and Engineering) from PSIT College Of Engineering,Kanpur</h1>
      <div className="container">
        <button
          style={{ marginTop: "2%" }}
          type="button"
          onClick={navigateAboutme}
          class="btn btn-info"
        >
         My Projects!
        </button>
        
      </div>
      </div>
    </>
  );
}
