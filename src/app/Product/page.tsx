"use client"
import { PiPulseFill } from "react-icons/pi";
import React from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../elements/Modetoggle";
import NavigationMenuDemo from "../elements/Navbar";

function page() {
  return (
    <div className='flex flex-col justify-around h-auto items-center'>
        <div className="mt-8"><NavigationMenuDemo/></div>
        <div className="absolute right-5 top-5">
        <ModeToggle/>
        </div>
            <div className='mt-10'>
            <PiPulseFill className="h-36 w-36"/>
            </div>

            <div className="m-8 gap-8">
                <h1 className='text-7xl text-center font-bold'>Coming Soon</h1>
                <p className="text-xl mt-8 font-semibold text-gray-400 ">In the meantime, Sign up for our monthly newsletter to stay up to date.</p>
            </div>

            <div className="flex gap-4">
                <Input placeholder="Email" className=""></Input>
                <Button>Sign Up</Button>
            </div>
    </div>
  )
}

export default page