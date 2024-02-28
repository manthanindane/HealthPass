"use client"
import React from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { Avatar } from '@/components/ui/avatar'
import { supabase } from '@/lib/supabase'
import { useRouter } from "next/navigation";
  

function menubar() {

    async function signOut() {
        const { error } = await supabase.auth.signOut()
        if (!error) {
          router.push('/login'); // Redirect to the login page
      }
      }
      const router = useRouter();
      


  return (
    <div>

        <Menubar>
  <MenubarMenu>
  
    <MenubarTrigger className='cursor-pointer p-0'>
     <Avatar/>
    </MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
      Your Profile
      </MenubarItem>
      <MenubarItem>Your Records</MenubarItem> 
      <MenubarSeparator />
      <MenubarItem>Settings</MenubarItem>
      <MenubarSeparator />
        
      <MenubarItem onClick={signOut}>Log Out</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>

    </div>
  )
}

export default menubar