import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeBottomText() {
  return (
      <div className='BottomText font-[font1]  flex justify-center gap-2 text-white'>
          <div className="border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-12 uppercase ">  
          <Link className='text-[5vw] leading-[5vw]  ' to='/Projects'>Projects</Link>
          </div>
          <div className="border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-12   uppercase ">  
          <Link className='text-[5vw] leading-[5vw]' to='/Agence'>Agences</Link>
          </div>
      </div>
  )
}
