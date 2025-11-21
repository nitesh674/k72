import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Timeline } from 'gsap/gsap-core.js'




export default function App() {

  const tl = gsap.timeline();
  useGSAP(function () {
    tl.from('.stair', {
      height: 0,
      stagger: {
        amount: -0.30
      }
    })
    tl.to(".stair", {
      y: '100%',
      stagger: {
        amount: -0.30
      }
    })
  })



  return (
    <div className='text-white'>

      <div className='w-full h-screen fixed z-20 top-0'>
        <div className='w-full h-full flex'>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
        </div>
      </div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}
