import React from "react";
import About1 from "./About1";
import About2 from "./About2";
import { ModeToggle } from "../elements/Modetoggle";
function aboutus() {
  return (
     
     
      <div>
        <div className="absolute top-5 right-5 z-30"><ModeToggle/></div>
        
       <About1/>
      <About2/>
      </div>
   
  );
}

export default aboutus;
