import React from 'react'

function ProjectsCard(props) {
  return (
    <div>
        <div className='w-full h-[500px] mb-4 flex gap-4 '>
          <div className='w-1/2 h-full group relative transition-all rounded-none hover:rounded-[50px] overflow-hidden bg-amber-700 mb-80'>
            <img className='w-full h-full object-cover' src={props.iamge1} alt="" />
            <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0  flex  items-center justify-center  left-0  w-full h-full   bg-black/10'>
              <h2 className='font-[font2] text-6xl  uppercase text-white  border-2 rounded-full pt-2 px-3' >Vior Le Projet</h2>
            </div>
          </div>  
            <div className='w-1/2 h-full group relative transition-all rounded-none hover:rounded-[50px] overflow-hidden bg-amber-700 mb-80'>
            <img className='w-full h-full object-cover' src={props.iamge2} alt="" />
            <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0  flex  items-center justify-center  left-0  w-full h-full   bg-black/10'>
              <h2 className='font-[font2] text-6xl  uppercase text-white  border-2 rounded-full pt-2 px-3' >Vior Le Projet</h2>
            </div>
          </div>  
        </div>
      </div>
  )
}

export default ProjectsCard
  