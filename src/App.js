
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <div data-theme="light">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
