import React, { useRef } from 'react'


function FullscreenNav() {
    const NavSilder = useRef(null);
    return (
        <div id='FillScreenNav' className='h-screen py-29 w-full absolute   text-white bg-black'>
            <div className='#'>
                <div 
                className='link relative border-t-[0.5px] border-white/50 overflow-hidden'>
                    <h1 className='font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Projets</h1>
                    <div ref={NavSilder} className='MoveLink absolute text-black bg-[#D3FD50] flex top-0 '>
                        <div className='flex movex items-center'>
                            <h2 className=' whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover  shrink-0 rounded-full' src="/src/assets/image/Fullscreennav1.jpg" alt="image1" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover shrink-0 rounded-full' src="/src/assets/image/Fullscreennav2.jpg" alt="image2" />
                        </div>
                        <div className='flex movex items-center'>
                            <h2 className=' whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover  shrink-0 rounded-full' src="/src/assets/image/Fullscreennav1.jpg" alt="image1" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover shrink-0 rounded-full' src="/src/assets/image/Fullscreennav2.jpg" alt="image2" />
                        </div>  
                    </div>
                </div>
                {/* 2 */}
                 <div 
                className='link relative border-t-[0.5px] border-white/50 overflow-hidden'>
                    <h1 className='font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Agence</h1>
                    <div ref={NavSilder} className='MoveLink absolute text-black bg-[#D3FD50] flex top-0 '>
                        <div className='flex movex items-center'>
                            <h2 className=' whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover  shrink-0 rounded-full' src="/src/assets/image/Fullscreennav1.jpg" alt="image1" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover shrink-0 rounded-full' src="/src/assets/image/Fullscreennav2.jpg" alt="image2" />
                        </div>
                        <div className='flex movex items-center'>
                            <h2 className=' whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover  shrink-0 rounded-full' src="/src/assets/image/Fullscreennav1.jpg" alt="image1" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover shrink-0 rounded-full' src="/src/assets/image/Fullscreennav2.jpg" alt="image2" />
                        </div>  
                    </div>
                </div>
                {/* 3 */}
                 <div 
                className='link relative border-t-[0.5px] border-white/50 overflow-hidden'>
                    <h1 className='font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Contact</h1>
                    <div ref={NavSilder} className='MoveLink absolute text-black bg-[#D3FD50] flex top-0 '>
                        <div className='flex movex items-center'>
                            <h2 className=' whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover  shrink-0 rounded-full' src="/src/assets/image/Fullscreennav1.jpg" alt="image1" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover shrink-0 rounded-full' src="/src/assets/image/Fullscreennav2.jpg" alt="image2" />
                        </div>
                        <div className='flex movex items-center'>
                            <h2 className=' whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover  shrink-0 rounded-full' src="/src/assets/image/Fullscreennav1.jpg" alt="image1" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover shrink-0 rounded-full' src="/src/assets/image/Fullscreennav2.jpg" alt="image2" />
                        </div>  
                    </div>
                </div>
                {/* 4 */}
                 <div 
                className='link relative border-y-[0.5px] border-white/50 overflow-hidden'>
                    <h1 className='font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Blogue</h1>
                    <div ref={NavSilder} className='MoveLink absolute text-black bg-[#D3FD50] flex top-0 '>
                        <div className='flex movex items-center'>
                            <h2 className=' whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover  shrink-0 rounded-full' src="/src/assets/image/Fullscreennav1.jpg" alt="image1" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover shrink-0 rounded-full' src="/src/assets/image/Fullscreennav2.jpg" alt="image2" />
                        </div>
                        <div className='flex movex items-center'>
                            <h2 className=' whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover  shrink-0 rounded-full' src="/src/assets/image/Fullscreennav1.jpg" alt="image1" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover shrink-0 rounded-full' src="/src/assets/image/Fullscreennav2.jpg" alt="image2" />
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullscreenNav
