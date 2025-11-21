import React, { useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'


export default function App() {

const stairParentRef = useRef(null);

useGSAP(() => {

  const tl = gsap.timeline();

  tl.set(stairParentRef.current,{ display: "block" }) 

    .from(".stair", {
      height: 0,
      stagger: {
        amount: -0.3, 
      }
    })

    .to(".stair", {
      y: "100%",
      stagger: {
        amount:-0.3,
      }
    })
    .set(stairParentRef.current, { display: "none" });   
});


  return (
    <div className='text-white'>

      <div ref={stairParentRef} className='w-full h-screen fixed z-20 top-0'>
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
