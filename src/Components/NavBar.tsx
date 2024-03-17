'use client';
import Image from "next/image";
import logo from '../../public/cabinetlogo.png'
import { UilBars } from "@iconscout/react-unicons";
import { useState,useEffect } from "react";
import { UilX } from "@iconscout/react-unicons";
import Link from "next/link"
import {motion} from 'framer-motion'
import HeadRoom from 'react-headroom'
import { UilPhone, UilEnvelope} from "@iconscout/react-unicons"

const SideBarComponent = ({number,navListItem,href,nav,setNav} : {number:string, navListItem:string,href:string,nav:boolean, setNav:React.Dispatch<React.SetStateAction<boolean>>}) => {
   return (
   <Link onClick={()=>{setNav(!nav); document.body.style.overflowY='auto'}} href={href}>
    <div className="flex justify-center items-center gap-4 ">
    <p>{number}</p>
    <h3>{navListItem}</h3>
</div>
</Link>
   )
}


interface NavBarProps {
  
    }
   
    
const NavBar: React.FunctionComponent<NavBarProps> = () => {
    const [nav,setNav] = useState(false);


    
    const SideBar= () => {
        return (
            <div className="grid grid-rows-4 fixed right-0 top-0 w-screen lg:w-[50vw] bg-mainblue text-white h-screen overflow-hidden self-stretch place-items-center touch-none">
            
               
                <div className="cursor-pointer" onClick={()=>{setNav(!nav); document.body.style.overflowY='auto'}}>
                <UilX  size='80'/>
                </div>
                
    
                <div className=" text-3xl font-medium row-start-2 row-end-4 flex flex-col items-center justify-center lg:justify-center gap-12 h-full self-start">
                <SideBarComponent nav={nav} setNav={setNav} href={'/portfolio'} number={"(01)"} navListItem={"Portfolio"}/>
                <SideBarComponent nav={nav} setNav={setNav} href={'/countertops'} number={"(02)"} navListItem={"Countertops"}/>
                <SideBarComponent nav={nav} setNav={setNav} href={'/cabinetry'} number={"(03)"} navListItem={"Cabinetry"}/>
                <SideBarComponent nav={nav} setNav={setNav} href={'/about'} number={"(04)"} navListItem={"About Us"}/>
                <SideBarComponent nav={nav} setNav={setNav} href={'/contact'}number={"(05)"} navListItem={"Contact"}/>
                
                </div>
    
    
                <div className=" text-xl font-medium flex flex-col items-center justify-center gap-4 text-center md:w-full w-2/3">
                <section className="flex gap-2 items-center justify-center">
                <UilPhone size={24}/>
                <h3>732-604-9690</h3>
                </section>
                <section className="flex gap-2 items-center justify-center">
                <UilEnvelope size={24}/>
                <h3>info@prodesignkitchens.com</h3>
                </section>
              
                </div>
    
    
            </div>
    
        )
    }

    
    const NavBarLink = ({title,href} : {title:string, href:string}) => {
        return <Link href={href}><motion.h3 whileHover={{scale:1.1,borderBottomWidth:2,borderBottomColor:'#2170A9'}} className="text-lg">{title}</motion.h3></Link> 
    

    }


    return (  
        <HeadRoom style={{display:'flex',justifyContent:'center',alignItems:'center'}} 
        wrapperStyle={{position:'fixed',top:'0px',zIndex:'50', background:'transparent', width:'100%'}}   
       >
            <div className="xl:w-4/5  p-4 flex items-center xl:justify-around justify-center bg-[rgba(255,255,255,0.95)] h-[7rem] gap-4 rounded-xl">
                
            <div className="shrink-0 flex items-center justify-center ">
                <Link href='/'><Image src={logo}  width={200} height={250} alt='Pro-Designs Logo'/></Link>
                <div className="hidden lg:flex flex-col items-start justify-around text-mainblue font-semibold">
                    <section className="flex gap-2 items-center justify-center">
                    <UilPhone size={20}/>
                    <h3>732-604-9690</h3>
                    </section>
                    <section className="flex gap-2 items-center justify-center">
                    <UilEnvelope size={20}/>
                    <h3>info@prodesignkitchens.com</h3>
                    </section>
                
                </div>
            </div>

        
                  
       

            <div className="cursor-pointer">
            <UilBars  onClick={()=>{setNav(!nav); document.body.style.overflowY='hidden'}} className="text-mainblue inline lg:hidden" size={"60"}/>
            </div>
        {nav ? 
         <SideBar/>  
        
            :    
    
               <div className="hidden justify-center items-center gap-8  lg:flex font-semibold">
                <NavBarLink href={'/portfolio'} title={"Portfolio"}></NavBarLink>
                  <NavBarLink href={'/countertops'} title={"Countertops"}></NavBarLink>
                  <NavBarLink href={'/cabinetry'} title={"Cabinetry"}></NavBarLink>
                  <NavBarLink href={'/about'} title={"About"}></NavBarLink>
             
                  <Link href='/contact'><button className="bg-mainblue font-semibold text-white rounded-lg p-4 " >Contact</button></Link>
            </div> 
        }
            </div>

        </HeadRoom >
    );
}
 
export default NavBar;