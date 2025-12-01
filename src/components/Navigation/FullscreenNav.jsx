import React, { useRef } from 'react'


function FullscreenNav() {
    const NavSilder = useRef(null);
    return (
        <div id='FillScreenNav' className='h-screen  overflow-hidden w-full absolute   text-white bg-black'>
            <div className="flex w-full top-0 justify-between items-start px-4 py-2">

                <div className="w-32">
                    <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                        <path fill="white" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </div>

                <div className="w-20 h-20 relative">
                    <div className="absolute inset-0 w-px bg-amber-300 rotate-45 mx-auto"></div>
                    <div className="absolute inset-0 w-px bg-amber-300 -rotate-45 mx-auto"></div>
                </div>  
            </div>

            <div className=' NavContent py-7'>
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
                            <img className='h-20 w-50 object-cover  shrink-0 rounded-full' src="/src/assets/image/Fullscreennav2.jpg" alt="image1" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover shrink-0 rounded-full' src="/src/assets/image/Fullscreennav3.jpg" alt="image2" />
                        </div>
                        <div className='flex movex items-center'>
                            <h2 className=' whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover  shrink-0 rounded-full' src="/src/assets/image/Fullscreennav2.jpg" alt="image1" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover shrink-0 rounded-full' src="/src/assets/image/Fullscreennav3.jpg" alt="image2" />
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
                            <img className='h-20 w-50 object-cover  shrink-0 rounded-full' src="/src/assets/image/Fullscreennav4.jpg" alt="image1" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover shrink-0 rounded-full' src="/src/assets/image/Fullscreennav5.jpg" alt="image2" />
                        </div>
                        <div className='flex movex items-center'>
                            <h2 className=' whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover  shrink-0 rounded-full' src="/src/assets/image/Fullscreennav4.jpg" alt="image1" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover shrink-0 rounded-full' src="/src/assets/image/Fullscreennav1.jpg" alt="image2" />
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
                            <img className='h-20 w-50 object-cover  shrink-0 rounded-full' src="/src/assets/image/Fullscreennav5.jpg" alt="image1" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover shrink-0 rounded-full' src="/src/assets/image/Fullscreennav3.jpg" alt="image2" />
                        </div>
                        <div className='flex movex items-center'>
                            <h2 className=' whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover  shrink-0 rounded-full' src="/src/assets/image/Fullscreennav2.jpg" alt="image1" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 w-50 object-cover shrink-0 rounded-full' src="/src/assets/image/Fullscreennav4.jpg" alt="image2" />
                        </div>
                    </div>
                </div>

                <div className='footer  font-[font2]  w-full h-[10vh] mt-10  overflow-hidden flex justify-between'>
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
                    <div className='font-[font2] text-[12px] w-[30vw]  flex justify-end items-center gap-3 mr-2'>
                        <div className="border border-white text-white rounded-full 
                  w-15 h-10 flex items-center justify-center text-[14px]">
                            FB
                        </div>
                        <div className="border border-white text-white rounded-full 
                  w-15 h-10 flex items-center justify-center text-[14px]">
                            IG
                        </div>
                        <div className="border border-white text-white rounded-full 
                  w-15 h-10 flex items-center justify-center text-[14px]">
                            IN
                        </div>
                        <div className="border border-white text-white rounded-full 
                  w-15 h-10 flex items-center justify-center text-[14px]">
                            BE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullscreenNav
