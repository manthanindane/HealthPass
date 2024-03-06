'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Activity } from "lucide-react";
import { ModeToggle } from "../elements/Modetoggle";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useEffect } from 'react';


function page() {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const router = useRouter();



  const login = async () => {
    try {
      const { data: dataUser, error } = await supabase.auth.signInWithPassword({
        email: data.email, // Use the input values
        password: data.password
      })

      if (dataUser.user) { // Check for the user object
        router.push('/'); // Or redirect to a protected route
      }

    } catch (error) {
      console.log(error)
    }



  }

  async function signInWithGithub() {
    try {
      const { data: dataUser, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
      });

      if (dataUser) {
      } else if (error) {
        console.log(error);
        alert('Authentication failed: ' + error.message);
      }

    } catch (error) {
      console.error("Authentication error:", error);
      alert('An authentication error occurred. Please try again.');
    }
  }


  useEffect(() => {
    // Create an auth state listener that triggers on change 
    const authListener = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        router.push('/'); // Redirect to the homepage
      }
    });
  
    // Cleanup function to remove the listener when the component unmounts
    return () => {
      authListener.data
    }; 
  }, [router]); 


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value
    }));
  }
  // router.refresh();




  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center h-screen tracking-tight">
        <div className="w-full md:w-1/2 h-full bg-zinc-900 hidden md:flex">
          <img src="https://images.unsplash.com/photo-1512647591120-610d23bd8c30?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="building" className="object-cover w-full grayscale-0" />
          <h1 className="absolute left-10 top-10 font-bold text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl flex m-1 text-zinc-900">
            <Activity className="mr-2" /> HealthPass Inc
          </h1>
        </div>
        <div className="w-full md:w-1/2 border-x-2 h-full flex flex-col justify-center items-center">
          <div className="absolute top-10 left-10 ml-5 md:left-1/2 "><ModeToggle /></div>

          <Link href="/signup" > <h1 className="absolute font-semibold right-10 top-10">Sign up</h1></Link>
          <h1 className="font-bold xl:text-4xl md:text-3xl sm:text-3xl text-2xl m-1">Login in your account</h1>
          <p className="text-zinc-400 md:text-sm sm:text-xs text-xs m-1">Enter your email below to login</p>
          <Input type='email' name="email" value={data?.email} onChange={handleChange} placeholder="name@example.com" className="w-3/5 md:w-1/2 mt-4" />
          <Input type='password' name="password" value={data?.password} onChange={handleChange} placeholder="password" className="w-3/5 md:w-1/2 mt-4" />

          <Button variant="default" onClick={login} className="m-2 w-3/5 md:w-1/2">Login</Button>
          <p className="text-zinc-400 text-xs font-semibold m-1">OR CONTINUE WITH</p>
          <Button variant="outline" onClick={signInWithGithub} className="m-2 w-3/5 md:w-1/2 gap-2">Github <FaGithub /></Button>
          <p className="text-zinc-400 w-3/5 md:w-3/4 md:text-sm sm:text-xs text-xs m-1 mx-5 text-center">By clicking continue, you agree to our <a href="g" className="underline"> Terms of Service and Privacy Policy.</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default page;


