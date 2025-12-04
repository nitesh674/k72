
import { Link, Route, Routes } from 'react-router-dom'
import React, {useState} from 'react'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar.jsx'
import FullscreenNav from './components/Navigation/FullscreenNav.jsx'




export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <Navbar/> 
      <FullscreenNav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}
