'use client'
import React, { useRef } from 'react'
import pic1 from '/public/pic1.jpg'
import pic2 from '/public/pic2.jpg'
import pic3 from '/public/pic3.jpg'
import pic4 from '/public/pic4.png'
import pic5 from '/public/pic5.png'
import pic6 from '/public/pic6.png'
import pic7 from '/public/pic7.png'
import pic8 from '/public/pic8.png'
import pic9 from '/public/pic9.jpg'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'


function Page3() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  }
  )

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const pictures = [
    {
      src: pic1,
      scale: scale5,
      left: '10%',
      top:'23%',
      height:'50%',
      width:'25%'
    },
    {
      src: pic2,
      scale: scale4,
      left:'20%',
      top:'-20%',
      height:'50%',
      width:'25%'
    },

    {
      src: pic3,
      scale: scale6,
      left:'-20%',
      top:'-25%',
      height:'35%',
      width:'20%'
    },
    
    {
      src: pic5,
      scale: scale8,
      left:'-20%',
      top:'15%',
      height:'45%',
      width:'20%'
    },
    {
      src: pic6,
      scale: scale4,
      left:'-20%',
      top:'-7%',
      height:'15%',
      width:'25%'
    },
    {
      src: pic7,
      scale: scale4,
      left:'0',
      top:'-20%',
      height:'35%',
      width:'40%'

    },
    
    {
      src: pic8,
      scale: scale9 ,
      left:'25%',
      top:'10%',
      height:'45%',
      width:'20%'
    },
    {
      src: pic9,
      scale: scale4,
      left:'-7%',
      top:'20%',
      height:'40%',
      width:'25%'
    },
    {
      src: pic4,
      scale: scale4,
      left:'0',
      top:'0',
      height:'25%',
      width:'25%'

    },
  ]

  return (

    <div ref={container} className='h-[300vh] mt-10 relative'>
      <div className='sticky top-0 h-screen overflow-hidden'>     
          {
            pictures.map(({ src, scale,left,top,height,width}, index) => {
              return <motion.div key={index} style={{scale,left,top}} className='w-full h-full absolute top-0 flex items-center justify-center'>
                <div className='h-[25vh] w-[25vw] relative 'style={{left,top,height,width}} >
                  <Image className='object-cover' src={src}
                    fill alt="Image 1"
                    placeholder="blur" />
                </div>
              </motion.div>
            })
          }       
     </div>
    </div>
  )
}

export default Page3