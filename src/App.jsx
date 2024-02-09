import React from 'react'
import Navbar from './views/Home/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import 'animate.css';

const App = () => {
  return (
    <div className='w-full'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<div>not found 404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App