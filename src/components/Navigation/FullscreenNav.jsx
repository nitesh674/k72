import React, { useRef } from 'react'


function FullscreenNav() {
    const NavSilder = useRef(null);
    return (
        <div id='FillScreenNav' className='h-screen py-29 w-full absolute   text-white bg-black'>
            <div>
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

            <div className='font-[font2] footer w-full h-[10vh] mt-10  overflow-hidden flex justify-between'>
                <div className='w-[30vw] h-[10vh] flex items-center'>
                    <div className=' w-[20vw] flex justify-around items-center '>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="w-8 h-8"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M2 12h20"></path>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                        <span class="tracking-wide text-sm">MONTREAL_03:23:54</span>
                    </div>
                </div>
                <div className='font-[font2] text-[13px] w-[43vw]  h-[10vh]  gap-1 flex justify-between items-center '>
                    <h1>Politique de confidentialité</h1>
                    <h1>Avis de confidentialité</h1>
                    <h1>Rapport éthique</h1>
                    <h1>Options De Consentement</h1>
                </div>
                <div className='font-[font2] text-[12px] w-[30vw] bg-amber-800 flex justify-end items-center gap-3 mr-2'>
                    <div className="border border-white text-white rounded-full 
                  w-15 h-10 flex items-center justify-center text-[14px]">
                        FB
                    </div>

                    <div className="border border-white text-white rounded-full 
                  w-10 h-10 flex items-center justify-center text-[14px]">
                        IG
                    </div>

                    <div className="border border-white text-white rounded-full 
                  w-10 h-10 flex items-center justify-center text-[14px]">
                        IN
                    </div>

                    <div className="border border-white text-white rounded-full 
                  w-10 h-10 flex items-center justify-center text-[14px]">
                        BE
                    </div>

                </div>

            </div>
        </div>
    )
}

export default FullscreenNav
