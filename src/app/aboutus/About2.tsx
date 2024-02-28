"use client"

import { Linkedin } from 'lucide-react'
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Spline from '@splinetool/react-spline';

function About2() {
    return (

        <div className="team-section flex flex-col h-screen items-center gap-6">
           
            <h2 className="text-5xl mt-8 font-bold ">Our Team</h2>
            <div className="team-grid flex justify-center mt-8 gap-8">
                <div className="relative flex flex-col text-gray-700 bg-white shadow-2xl  bg-clip-border rounded-xl w-96 ">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                        <img src="https://avatars.githubusercontent.com/u/68989979?s=400&u=1702e4f429f8349e5b169301886ea63fb3c4e36e&v=4" alt="profile-picture" />
                            
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Manthan Indane
                        </h4>
                        <p
                            className="block font-sans text-base font-medium leading-relaxed bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                            Co-founder and CEO
                        </p>
                       <div className='flex justify-center mt-4 gap-4'>
                    
                      <a href="https://twitter.com/manthanindane"><FaXTwitter /></a> 
                      <a href="https://www.linkedin.com/in/manthan-indane-930559179/"><FaLinkedin /></a> 
                       <a href="https://github.com/manthanindane"><FaGithub /></a>

                       </div> 


                    </div>

                </div>
                <div className="relative flex flex-col text-gray-700 bg-white shadow-2xl bg-clip-border rounded-xl w-96">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                        <img className="w-full" src="data:image/jpeg;base64,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" alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Kaushal Jogi
                        </h4>
                        <p
                            className="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                            Co-founder and COO
                        </p>
                        <div className='flex justify-center mt-4 gap-4'>

                        <a href="https://twitter.com/AINewsFlash"><FaXTwitter /></a> 
                      <a href="https://www.linkedin.com/in/kaushal-jogi-41b6b121b/"><FaLinkedin /></a> 
                       <a href="https://github.com/KaushalJogi2002"><FaGithub /></a>

                       </div> 
                        

                    </div>

                </div>
            </div>
        </div>
    )
}

export default About2