import React from 'react'
import Navbar from './views/Home/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './views/Home/Home'
import 'animate.css';

const App = () => {
  return (
    <div className='w-full'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<div className='flex items-center justify-center h-screen'>not found 404</div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App