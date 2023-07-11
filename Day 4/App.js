import React from 'react';
import Login from './Login';
import './App.css';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import './Home.css';
const App=() => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/log" element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
