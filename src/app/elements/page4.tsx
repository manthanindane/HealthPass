'use client'

import React, { useRef } from 'react';
import { FileText, HeartPulse, FolderKanban, FileLock2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { motion, useScroll } from 'framer-motion';
import { Separator } from "@/components/ui/separator"
import Spline from '@splinetool/react-spline';


function page4() {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.25"],
  });
  const cardData = [
    {
      icon: <HeartPulse />,
      title: 'Seamless Healthcare Integration',
      description:
        'HealthPass provides seamless access to healthcare services, enabling users to conveniently schedule appointments, access medical records, and communicate with healthcare providers, all in one centralized platform.',
    },
    {
      icon: <FileText />,
      title: 'Personalized Health Insights', description: 'Through advanced AI algorithms, HealthPass delivers personalized health insights and recommendations tailored to individual users, empowering them to make informed decisions about their well-being and lifestyle choices.'
    },

    {
      icon: <FolderKanban />,
      title: 'Efficient Health Management', description: 'With its comprehensive health management features, HealthPass streamlines tasks such as medication management, appointment reminders, and health data tracking, promoting proactive healthcare management and adherence to treatment plans.'
    },
    {
      icon: <FileLock2 />,
      title: 'Enhanced Data Security', description: 'HealthPass prioritizes the security and privacy of user data, employing state-of-the-art encryption techniques and strict access controls to safeguard sensitive health information, ensuring peace of mind for users regarding the confidentiality of their medical data.'
    },
  ];

  return (
    <div className="flex md:flex-row  h-auto w-full overflow-hidden  flex-col-reverse">
      <motion.div className='mt-10 md:w-1/2' ref={element} style={{ opacity: scrollYProgress }} >

      <h1 className="flex md:ml-20 ml-10 text-4xl font-semibold m-4 justify-center">
            Why HealthPass?
          </h1>
          <div className="flex flex-col justify-center md:ml-20  md:grid md:grid-cols-2 items-center m-4 gap-4 ">
          
            {cardData.map((card, index) => (
              <Card key={index} className="max-w-xs h-auto overflow-hidden border-none" >
                <CardHeader>
                  <div className='flex -ml-6 -mb-4'>
                    <CardContent >{card.icon}</CardContent>
                  </div>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
       
      </motion.div>
      
      <div className="flex flex-col justify-center items-center">
        <div className='justify-end items-center '>
      <Spline  scene="https://prod.spline.design/9l9wU0pAg7ASd38V/scene.splinecode" />
      </div>
      </div>
    
      
    </div>
  );
}

export default page4;
