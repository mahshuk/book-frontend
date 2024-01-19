import React from "react";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import './App.css';
import Signup from "./components/screens/Signup";


function App() {
  return (
    <>
      <Router>
         <Routes>
           <Route path="/" element={<Signup/>} />
         </Routes>
       </Router>
    
    </>

  );
}

export default App;

