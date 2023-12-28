"use client";

import Image from "next/image"
import mainHero from '../../public/mainHero/mainHero.jpg'
import mainHero2 from '../../public/mainHero/mainHero2.webp'
import mainHero3 from '../../public/mainHero/mainHero3.jpg'
import mainHero4 from '../../public/mainHero/mainHero4.webp'
import NavBar from "./NavBar";
import { useRef , useState,useEffect} from "react"
import { StaticImageData } from "next/image";
import {motion,useInView} from 'framer-motion'
import Link from "next/link";


interface HeroProps {
    
}



 const heroImgArr:StaticImageData[] = [mainHero, mainHero2,mainHero3,mainHero4]




const Hero: React.FunctionComponent<HeroProps> = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)
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
        <div className="row-start-1 row-end-1 col-start-1 col-end-1 z-10 flex flex-col items-start justify-center gap-12  text-white pl-24 bg-[rgba(0,0,0,0.4)] backdrop-blur-sm">
            <section ref={ref} className="flex flex-col items-start justify-center gap-2 ">
            <TitleComponent title={"Crafting Dreams,"}/>
            <TitleComponent title={"Building Kitchens:"}/>
            <TitleComponent title={"Where Quality Meets Elegance."}/>
            </section>
          <section className="flex justify-center items-center gap-4">
        <Link href={'/contact'}>  <button className="rounded-xl px-10 py-5 bg-mainblue text-white">Start Today</button></Link>
          {/* <button className="rounded-xl px-8 py-4 bg-[rgba(0,0,0,0.35)] text-white"></button> */}
       
          </section>
        </div>
        <div className="row-start-1 row-end-1 col-start-1 col-end-1 w-full h-full overflow-hidden">
            <Image alt="Hero images of kitchens" className="w-full h-full object-cover"  src={heroImgArr[index]}/>
            </div>

       </div>
       </>
     );
}
 
export default Hero;

