import React from 'react'
import Video  from './video'

export default function HomeToptext() {
  return (
    <div className='font-[font1] pt-5 text-center' >
      <div className='text-[9vw] uppercase leading-[8vw] flex items-center justify-center '>L'étincelle</div>
      <div className='text-[9vw] uppercase leading-[8vw] flex items-center justify-center '>
        qui
        <div className='h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden'>  
          <Video/>
        </div>
        génère
        </div>
      <div className='text-[9vw] uppercase leading-[8vw] flex items-center justify-center '>la créativité</div>
    </div>
  )
}
