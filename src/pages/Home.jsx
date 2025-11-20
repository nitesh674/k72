import React from 'react'
import Video from '../components/Home/video'
import HomeToptext from '../components/Home/HomeToptext'
import HomeBottomText from '../components/Home/HomeBottomText'
export default function home() {
  return (
    <div>
      <div className='h-screen w-screen fixed '> 
        <Video/>
      </div>
       <div className=' h-screen w-screen flex flex-col justify-between pb-5 overflow-hidden  relative'>
          <HomeToptext/>
          <HomeBottomText/>

       </div>

    </div>
  )
}
