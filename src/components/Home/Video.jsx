import React from 'react'
import HeroVideo from '../../assets/Video/69496b2d.mp4'
export default function Video() {
  return (
    <div className='w-full h-full'>
        <video className='w-full h-full object-cover' autoPlay muted loop src={HeroVideo}></video>
    </div>
  )
}
