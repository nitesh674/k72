import React from 'react'

export default function Projects() {
  return (
    <div className='p-4'>
        <div className=' pt-[40vh]'>
            <h1 className='font-[font2] text-[15vw] uppercase'>Projets</h1> 
        </div>
        <div className='-mt-20'>
          <div className='w-full h-[400px] mb-4 flex gap-4 '>
               <div className='w-1/2 h-full relative transition-all rounded-none hover:rounded-[50px] overflow-hidden bg-amber-700'>
                  <img className='w-full h-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                  <div className='absolute top-0 left-0  w-full h-full  bg-black/10'>
                    <h2 className='font-[font2] text-[4vw] uppercase text-white border-0' >Vior Le Projet</h2>
                  </div>
               </div>
          </div>
        </div>
    </div>
  )
}
