import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import { useEffect, useState } from 'react';
import SignUpForm from './components/SignUpForm';
import AddProject from './components/AddProject';
import ProjectList from './components/ProjectList';

function App() {


 
  return (
    <>
    <Navbar title="Kumar Ravi-Portfolio"/>
      <Routes>
        <Route path = "/" element = {<HomePage  />}/>
        <Route path = "/projects" element = {<ProjectList/>}/>
        <Route path = "/signUp" element = {<SignUpForm/>}/>
        <Route path = "/addProject" element = {<AddProject/>}/>
      </Routes>
    </>
  );
}

export default App;
