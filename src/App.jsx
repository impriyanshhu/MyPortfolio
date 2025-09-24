import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'
import SocialMedia from './Components/SocialMedia/SocialMedia'

const App = () => {

  return (
    <div>

      <Navbar />

      <main>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </main>

      <SocialMedia />

    </div>
  )
}

export default App
