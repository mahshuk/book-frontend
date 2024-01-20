import React from "react";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import './App.css';
import Signup from "./components/screens/Signup";
import Login from "./components/screens/Login";


function App() {
  return (
    <>
      <Router>
         <Routes>
              <Route path="/Signup" element={<Signup/>} />
              <Route path="/" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
         </Routes>
       </Router>
    
    </>

  );
}

export default App;

