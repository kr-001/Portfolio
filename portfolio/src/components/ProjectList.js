import React, { useEffect, useState } from 'react';

export default function ProjectList() {
  const [projects , setProjects] = useState([]);

  useEffect(()=>{
    fetchProjects();
  },[])
  
  const fetchProjects = async () =>{
    let results = await fetch("http://192.168.0.132:4000/fetchProjects");
    results = await results.json();
    setProjects(results);
  }
  console.warn(projects);


  return (
    <>
      <div className="container">
  <div className="row">
    <div className="col">
      {projects &&
        projects.map((project, index) => (
          <div
            className="wrapper"
            style={{
              margin: "2%",
              borderStyle: "solid",
              borderColor: "white",
              borderWidth: "2px",
              borderRadius: "2px",
            }}
            key={index}
          >
            <div className="row md-4">
              <h1
                className="projectHeading"
                style={{ color: "white", marginLeft: "2%" }}
              >
                {project.Title}
              </h1>
            </div>
            <div className="row md-4">
              <h5 style={{ color: "white", marginLeft: "2%" }}>
                Author/ Developer Name: <i>{project.author}</i>
              </h5>
            </div>
            <div className="row md-4">
              <h5 style={{ color: "white", marginLeft: "2%" }}>
                Tech Used: {project.Technology}
              </h5>
            </div>
          </div>
        ))}
    </div>
  </div>
</div>

    </>
  );
}
