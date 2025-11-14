import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'
import SocialMedia from './Components/SocialMedia/SocialMedia'
import Footer from './Components/Footer/Footer'

const App = () => {

  const location = useLocation();

  return (
    <div className='flex flex-col min-h-screen'>

      <Navbar />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      
      {location.pathname !== "/" && <Footer />}

      <SocialMedia />

    </div>
  )
}

export default App
