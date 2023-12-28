"use client";

import Image from "next/image"
import mainHero from '../../public/mainHero/mainHero.jpg'
import mainHero2 from '../../public/mainHero/mainHero2.webp'
import mainHero3 from '../../public/mainHero/mainHero3.jpg'
import mainHero4 from '../../public/mainHero/mainHero4.webp'
import NavBar from "./NavBar";
import { useRef , useState,useEffect} from "react"
import { StaticImageData } from "next/image";

import Link from "next/link";


interface HeroProps {
    
}



 const heroImgArr:StaticImageData[] = [mainHero, mainHero2,mainHero3,mainHero4]




const Hero: React.FunctionComponent<HeroProps> = () => {

    const [index,setIndex] = useState<number>(0)
 useEffect(()=> {
   
   setTimeout(()=> {
    setIndex(index+1)
    if(index==3) {
        setIndex(0)
    }
   },5000)
   
 }) 





const TitleComponent = ({title}:{title:string}) => {
    return <h1 className="text-3xl lg:text-5xl font-bold ">{title}</h1>
}

    return ( 
        <>
        <NavBar/>
       <div className="h-screen grid grid-row-1 grid-col-1 ">
        <div className="row-start-1 row-end-1 col-start-1 col-end-1 z-10 flex flex-col items-center justify-center gap-12 text-center lg:text-left text-white bg-[rgba(0,0,0,0.4)] backdrop-blur-sm">
            <section className="flex flex-col items-center justify-center w-fit gap-2 ">
            <TitleComponent title={"Crafting Dreams,"}/>
            <TitleComponent title={"Building Kitchens:"}/>
            <TitleComponent title={"Where Quality Meets Elegance."}/>
                  <Link href={'/contact'}>  <button className="rounded-xl px-10 py-5 mt-2 bg-mainblue text-white">Start Today</button></Link>
            </section>
    

          {/* <button className="rounded-xl px-8 py-4 bg-[rgba(0,0,0,0.35)] text-white"></button> */}
       
   
        </div>
        <div className="row-start-1 row-end-1 col-start-1 col-end-1 w-full h-full overflow-hidden">
            <Image alt="Hero images of kitchens" className="w-full h-full object-cover"  src={heroImgArr[index]}/>
            </div>

       </div>
       </>
     );
}
 
export default Hero;

