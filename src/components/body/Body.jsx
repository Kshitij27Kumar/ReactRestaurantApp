import React from 'react'
import Menu from './Menu'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
const Body = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Body
