    'use client'
    
    import React,{use, useRef} from 'react'
    import {useScroll, motion, useTransform} from 'framer-motion';

    export default function Page2() {
        const element =useRef(null);
        const {scrollYProgress} = useScroll({
                target: element,
                offset: ["start 0.9", "start 0.25"], 
        });
        const paragraph ="Simplify your healthcare journey with HealthPASS: effortlessly manage medical records, schedule appointments, and track wellness goals on one intuitive platform. Streamline your experience and gain personalized insights to optimize your health. Join us for a smarter, more convenient approach to healthcare management."

        const words = paragraph.split(' ');
            return (
                <div className='flex flex-col items-center justify-center md:h-screen h-full'>
                    <motion.p className='md:text-2xl text-sm md:font-semibold text-justify m-5 md:w-3/4 md:mt-10 w-1/1 tracking-normal flex flex-wrap md:leading-7' ref={element} style= {{opacity:scrollYProgress}}>
                        {
                            words.map((word,i)=>{
                                const start =  i/words.length;
                                const end = start + (1/words.length);
                                return <Word key={i} range={[start,end]} progress={scrollYProgress}>{word}</Word>
                        })
                    }
                    </motion.p>
                    


                </div>
            )
    }

    const Word = ({children , range, progress}) => {
        const opacity = useTransform(progress, range, [0,1])
        return (
            <span className='mr-1.5 mt-1.5 relative' >
                <span className='absolute opacity-35'>{children}</span>
            <motion.span style={{opacity:opacity}}>{children}</motion.span>
            </span>
        )
    }