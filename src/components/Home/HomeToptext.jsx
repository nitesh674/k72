import React from 'react'
import Video  from './video'

export default function HomeToptext() {
  return (
    <div className=' HomeToptext font-[font1] pt-5 text-center text-white' >
      <div className='Toptext text-[9vw] uppercase leading-[8vw] flex items-center justify-center '>L'étincelle</div>
      <div className='Toptext text-[9vw] uppercase leading-[8vw] flex items-center justify-center '>
        qui
        <div className='Topvideo h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden'>  
          <Video/>
        </div>
        génère
        </div>
      <div className='Toptext text-[9vw] uppercase leading-[8vw] flex items-center justify-center '>la créativité</div>
    </div>
  )
}
