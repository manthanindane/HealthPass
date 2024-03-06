// import { DrawerDemo } from "./elements/Drawer";
"use client"
import Heropage from "./elements/Heropage";
import Page2 from "./elements/Page2";
import Page3 from "./elements/Page3";
import Page4 from "./elements/Page4";
import Page5 from "./elements/page5";
import { ModeToggle } from "./elements/Modetoggle";
import { supabase } from "@/lib/supabase";
import Avatar from "./elements/avatar";
import { SiteFooter } from "./elements/SiteFooter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavigationMenuDemo from "./elements/Navbar";
import Menubar from "./elements/Menubar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const setNewView = async () => {
    const { data, error } = await supabase
      .from("views")
      .insert({
        name: 'random name'
      })
    if (data) console.log(data)
    if (error) console.log(error)
  };

  setNewView();

  const handleClick = () => {
    router.push('/Product')
  }

  return (
    <div className="">
      <div className="flex top-4 ml-10 items-center justify-between tracking-tight mt-4">
        <div className="hidden sm:block">
          <NavigationMenuDemo />
        </div>
        <div className="flex gap-4 ">
          <Button variant="default" onClick={handleClick} className="w-3/5 md:w-1/2 px-8">Try our Product</Button>
          <ModeToggle />
          <Menubar />
          
        </div>
       



      </div>

      <div><Heropage /></div>
      <div><Page2 /></div>
      <div><Page3 /></div>
      <div><Page4 /></div>
      {/* <div><Page5/></div> */}
      <div><SiteFooter /></div>
    </div>
  );
}
