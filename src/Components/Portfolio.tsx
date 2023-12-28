'use client';
import Image, { StaticImageData } from "next/image";
import kitch1 from '../../public/imagegallery/kitch1.webp'
import kitch2 from '../../public/imagegallery/kitch2.webp'
import kitch3 from '../../public/imagegallery/kitch3.webp'
import kitch4 from '../../public/imagegallery/kitch4.webp'
import kitch5 from '../../public/imagegallery/kitch5.webp'
import kitch6 from '../../public/imagegallery/kitch6.webp'
import kitch7 from '../../public/imagegallery/kitch7.webp'
import kitch8 from '../../public/imagegallery/kitch8.webp'
import kitch9 from '../../public/imagegallery/kitch9.webp'
import kitch10 from '../../public/imagegallery/kitch10.webp'
import kitch11 from '../../public/imagegallery/kitch11.webp'
import kitch12 from '../../public/imagegallery/kitch13.webp'
import kitch13 from '../../public/imagegallery/kitch14.webp'
import kitch14 from '../../public/imagegallery/kitch15.webp'
import kitch15 from '../../public/imagegallery/kitch16.webp'
import LightBox from "./LightBox";
import { useState } from "react";

interface ImageGalleryProps {
    
}
const imgArr = [kitch1,kitch12,kitch3,kitch4,kitch5,kitch6,kitch14,kitch8,kitch13,kitch10,kitch11,kitch2,kitch9,kitch7,kitch15]



interface ImageColProps {
images:Array<StaticImageData>
}   







 
const Portfolio: React.FunctionComponent<ImageGalleryProps> = () => {
    const [lightBox, setLightBox] = useState<boolean>(false)
    const [selectedImage, setSelectedImage] = useState<StaticImageData | undefined>()
    const ImageCol:React.FunctionComponent<ImageColProps>  = ({images}) => {
   
        return (
         <div className="flex flex-col gap-4">
         {images.map((img,key)=> {
             return(
             <div  key={key}>
                 <Image  onClick={()=> {setLightBox(!lightBox); setSelectedImage(img); document.body.style.overflowY = 'hidden'}} className="w-full h-full object-cover rounded-xl cursor-pointer" src={img} alt="Kitchen Cabinet"/>
                 
             </div>
             )
         })}
          
     </div>
        )
     }
     
    return ( 
        <div className="min-h-screen pt-[5rem] grid place-items-center ">

        <div className="text-center flex flex-col items-center justify-center h-[50vh] w-3/4 lg:w-1/2 gap-4">
            <span className="text-mainblue">01</span>
           <h1 className="text-3xl lg:text-5xl font-semibold">Our Work</h1>
           <p>Explore our portfolio to see the real impact of our work. From modern designs to timeless classics, our completed projects speak for themselves.</p>
        </div>

      {lightBox ? <LightBox image={selectedImage} alt={"img"} lightBox={lightBox} setLightBox={setLightBox}/> : ''}
    <div className="flex flex-wrap items-center justify-center xl:flex-nowrap gap-4 p-4 ">
                <ImageCol images={imgArr.slice(0,3)}/>
                <ImageCol images={imgArr.slice(3,6)}/>
                <ImageCol images={imgArr.slice(6,9)}/>
                <ImageCol images={imgArr.slice(9,12)}/>
                <ImageCol images={imgArr.slice(12,15)}/>

        </div>
        </div>
         
       
     );
}
 
export default Portfolio;