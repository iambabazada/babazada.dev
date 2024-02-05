import React from 'react'
import Navbar from './views/Home/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'

const App = () => {
  return (
    <div >
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