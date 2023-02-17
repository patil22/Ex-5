import React, { useState }  from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import Textform from './Components/Textform';
import Homepage from './Pages/Homepage'

import Sidebar from './Components/Sidebar'
import  Contactus from './Pages/Contactus'
import Gaurav from './Pages/Gaurav';
import Text from './Pages/Text';
import Accordian from './Pages/Accordian';
import Formvalidation from './Pages/Formvalidation'
import Api from './Pages/Api.js'
import Crud from './Pages/Crud'

const configRouting = (
 <Router>
 <Navbar title="Gaurav" home="home" />
    
    <div className="container my-3   ">
      <Textform heading="Enter text ..." />
    </div>
     <Sidebar />  

    <Routes>
      <Route path="/" element={< Homepage />} />
     <Route path="/Contactus" element={<Contactus />} /> 
     <Route path = "/Gaurav" element = {< Gaurav />} />
    <Route path = "/Text" element = {<Text/>}/>
    <Route path = "/Accordian" element = {<Accordian/>}/>
    <Route path = "/Formvalidation" element = {< Formvalidation/>}/>
    <Route path = "/Api" element = {<Api/>}/>
    <Route path = "/Crud" element = {<Crud/>}/>
    </Routes> 
  </Router>  
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  configRouting




);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
