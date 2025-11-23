import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useLocation } from 'react-router-dom';

function Stair(props) {
    const currentpath = useLocation().pathname
    const stairParentRef = useRef(null);
    const pageRef = useRef(null)
    useGSAP(function (){
        const tl = gsap.timeline()
        tl.to(stairParentRef.current, {
            display: 'block'
        })
        tl.from('.stair',{
            height:0,
            stagger:{
                amount:-0.25
            }
        })
       tl.to('.stair',{
            y:'100%',
            stagger: {
                amount: -0.25   
            }
       })
       tl.to(stairParentRef.current,{
        display: 'none'
       })
       tl.to('.stair',{
        y:'0%'
       })
       gsap.from(pageRef.current,{
            opacity:0,
            delay:1
       })
    },[currentpath])
  
    // console.log(props)
    return (
      <div>
         <div>
            <div ref={stairParentRef} className='w-full h-screen fixed z-20 top-0'>
                <div className='w-full h-full flex'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
       </div>
      </div>
    )
}

export default Stair
