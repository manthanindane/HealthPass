"use client"
import React from 'react';
import Spline from '@splinetool/react-spline';

function About1() {
    return (
        <div className="relative h-screen flex flex-col items-center justify-center gap-12 text-center">
            <div className="absolute inset-0 z-1">
            {/* <Spline scene="https://prod.spline.design/mbjz9bAE72LLBbVB/scene.splinecode" /> */}

            </div>
            <div className="z-10 flex flex-col gap-10">
                <h1 className="text-8xl font-bold ">About Us</h1>
              
                <p className="relative text-center p-4 text-xl max-w-5xl font-medium">
                    At HealthPass Inc, we are dedicated to revolutionizing healthcare through the power of technology and artificial intelligence (AI). Our mission is to provide innovative solutions that enhance the accessibility, efficiency, and effectiveness of healthcare services for individuals and communities worldwide.
                </p>
            </div>
        </div>
    );
}

export default About1;
