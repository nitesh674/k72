import React from 'react'


function FullscreenNav() {
    return (
        <div id='FillScreenNav' className='h-screen py-29 w-full absolute  bg-amber-950 text-white'>
            <div className='#'>
                {/* 1 */}
                <div className='link border-t-2'>
                    <h1 className='font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Projets</h1>
                    <div className='absolute flex'>
                        <div className='flex overflow-auto items-center'>
                            <h2 className=' whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="image1" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] pt-4 uppercase text-center'>Pour Tout Voir</h2>
                            <img className='h-20 rounded-full' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="image2" />
                        </div>
                        {/* <div>
                            <h2>Pour Tout Voir</h2>
                            <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="image1" />
                            <h2>Pour Tout Voir</h2>
                            <img src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="image2" />
                        </div> */}
                    </div>
                </div>
                {/* 2 */}
                {/* <div className='link border-t-1'>
                    <h1 className='font-[font2] text-[8vw] leading-[0.8] pt-3 uppercase text-center'>Agence</h1>
                    {/* <div>
                        <div>
                            <h2>Pour Tout Voir</h2>
                            <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="image1" />
                            <h2>Pour Tout Voir</h2>
                            <img src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="image2" />
                        </div>
                         <div>
                            <h2>Pour Tout Voir</h2>
                            <img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="image1" />
                            <h2>Pour Tout Voir</h2>
                            <img src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="image2" />
                        </div>
                    </div> *
                </div> */}
            </div>
        </div>
    )
}

export default FullscreenNav
