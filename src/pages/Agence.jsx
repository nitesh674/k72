import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

export default function Agence() {
  gsap.registerPlugin(ScrollTrigger)
  const imageDevRef =  useRef(null);
  const  imageRef  = useRef(null);

  const imageArray = [
      "/src/assets/image/url1.jpg",
      "/src/assets/image/url2.jpg",
      "/src/assets/image/url3.jpg",
      "/src/assets/image/url4.jpg",
      "/src/assets/image/url5.jpg",
      "/src/assets/image/url6.jpg",
      "/src/assets/image/url7.jpg",
      "/src/assets/image/url8.jpg",
      "/src/assets/image/url9.jpg",
      "/src/assets/image/url10.jpg",
  ]
  useGSAP(() => {
  imageArray.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  gsap.to(imageDevRef.current, {
    scrollTrigger: {
      trigger: imageDevRef.current,
      start: "top 20%",
      end: "top -100%",
      scrub: true,
      pin: true,
      onUpdate: (elem) => {
        let imageIndex = Math.floor(elem.progress * imageArray.length);
        if (imageIndex >= imageArray.length) imageIndex = imageArray.length - 1;
        imageRef.current.src = imageArray[imageIndex];
      },
    },
  });
});

  return (
    <div >
      <div className='section1 '>
      <div ref={imageDevRef} className=' h-[20vw] w-[15vw] rounded-3xl absolute top-25 left-105 overflow-hidden'>
            <img  ref={imageRef} className='h-full object-cover ' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="#" />
      </div>
      <div className=' relative font-[font2]'>
      <div className='mt-[55vh]'>
      <h1 className='text-[19vw] text-center leading-[17vw] tracking-wide text-black uppercase'>Soixan7e <br />
        Douze</h1>
      </div>
      <div className='pl-[40%]' > 
        <p className='text-5xl text-black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
    </div>
    </div>
   <div className="section2 h-screen">
   </div>
    </div>
  )
}
