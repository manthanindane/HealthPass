"use client"
import Heropage from "./elements/Heropage";
import Page2 from "./elements/Page2";
import { ModeToggle } from "./elements/Modetoggle";
import { supabase } from "@/lib/supabase";
import { SiteFooter } from "./elements/SiteFooter";
import { Button } from "@/components/ui/button";
import NavigationMenuDemo from "./elements/Navbar";
import Menubar from "./elements/Menubar";
import { useRouter } from "next/navigation";
import Parallax from "./elements/Parallax";
import Info from "./elements/Info";

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
      <div><Parallax/></div>
      <div><Info/></div>
      <div><SiteFooter /></div>
    </div>
  );
}
