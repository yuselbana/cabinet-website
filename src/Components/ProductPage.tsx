'use client';
import NavBar from "./NavBar";
import Image from "next/image";
import { Accordion } from "@rewind-ui/core";
import { StaticImageData } from "next/image";
import {motion} from 'framer-motion'
import LightBox from "./LightBox";
import { useState, useEffect } from "react";
import Link from "next/link";
interface ProductComponentProps {
image:StaticImageData
name:string
lightBox:boolean
setLightBox:React.Dispatch<React.SetStateAction<boolean>>
setSelectedImage:React.Dispatch<React.SetStateAction<StaticImageData |undefined>>
href:string |undefined

}
const ProductComponent:React.FunctionComponent<ProductComponentProps> = ({image,name,lightBox,setLightBox,setSelectedImage,href,}) => {
 
    return (
       <>
       {
        href ? 
        <Link className="h-fit" target="_blank" href={href}>
        <motion.div  whileHover={{scale:1.2, cursor:"pointer", transition:{duration:0.5}}}  className="grid grid-rows-4 lg:max-h-60 max-w-80 lg:max-w-96  border-2 rounded-lg border-offwhite">
            <div  className="row-start-1 row-end-4 h-full w-full rounded-t-lg overflow-hidden">
                <Image alt={name} src={image}  className="h-full w-full object-contain" />
            </div>

            <div className="row-start-4 row-end-5  flex justify-start items-start p-4 ">
                <h3 className="flex h-full items-center justify-center">{name}</h3>
            </div>
        </motion.div>
        </Link>
        :
        <motion.div onClick={()=> {setLightBox(!lightBox); setSelectedImage(image); document.body.style.overflowY='hidden'}} whileHover={{scale:1.2, cursor:"pointer", transition:{duration:0.5}}} 
         className="grid grid-rows-4 max-h-60 max-w-80 lg:max-w-96 border-2 rounded-lg border-offwhite">
        <div  className="row-start-1 row-end-4 h-full rounded-t-lg overflow-hidden">
            <Image alt={name} src={image} width={400} className="h-full w-full" />
        </div>

        <div className="row-start-4 row-end-5 upper flex justify-start items-start p-4 ">
            <h3>{name}</h3>
        </div>
    </motion.div>



       }
        </>
    )
}




export interface HeroProductProps {
    heroTitle:string
    heroImg1?:StaticImageData
    heroImg2?:StaticImageData
    heroImg3?:StaticImageData
    heroImg4?:StaticImageData
    heroParagraph:string
    accordionHeader1:string
    accordionBody1:string
    accordionNumber1:string
    accordionHeader2:string
    accordionBody2:string
    accordionNumber2:string

    header:string
    slideShowImgs?:StaticImageData[]
  
  

    
    
}

export const HeroProduct:React.FunctionComponent<HeroProductProps> = 
({header, heroTitle,heroImg1, heroImg2,heroImg3,heroImg4, heroParagraph, accordionHeader1, accordionBody1,
 accordionNumber1, accordionBody2, accordionHeader2, accordionNumber2, slideShowImgs}) => {
    
    const [heroIndex,setHeroIndex] = useState<number>(0);

    useEffect(() => {
       
        setTimeout(()=> {
            setHeroIndex(heroIndex+1)
            if(heroIndex==3) {
                setHeroIndex(0)
            }
          
        },2000)



    });

    return (
        <div className="h-screen  grid place-items-center pt-[5rem] ">
         <div className="grid grid-rows-1 h-4/5 lg:grid-rows-none lg:grid-cols-3 overflow-hidden w-4/5 gap-x-24 ">

            
         <div className="flex flex-col justify-around items-start h-full lg:row-start-1 lg:row-end-4 ">
           <section className="flex flex-col justify-start items-center text-center lg:text-left lg:items-start gap-4">
            <span className="text-mainblue">{header}</span>
           <h1 className="text-3xl lg:text-5xl font-semibold ">{heroTitle}</h1>
            <p>{heroParagraph}</p>
           </section>
                <Accordion className="text-center lg:text-left border-black "  bordered={true} shadow="lg" activeColor="blue" >


                <Accordion.Item anchor={`item-${accordionNumber1}`}>
            <Accordion.Header ><span className="italic">{accordionHeader1}</span></Accordion.Header>
                <Accordion.Body>{accordionBody1}</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item anchor={`item-${accordionNumber2}`}>
            <Accordion.Header ><span className="italic">{accordionHeader2}</span></Accordion.Header>
                <Accordion.Body>{accordionBody2}</Accordion.Body>
            </Accordion.Item>
           

                </Accordion>
            </div>

        {slideShowImgs ? 

        //2 seconds
        <div className="hidden h-full w-full row-start-2 row-end-4 lg:row-start-1  lg:grid lg:col-start-2 lg:col-end-4 rounded-xl overflow-hidden">
            <Image alt="Blue Kitchen" className="h-full w-full object-cover" src={slideShowImgs[heroIndex]}/>

        </div> 
        
        
        : 
        
        ((heroImg1 && heroImg2 && heroImg3 && heroImg4) &&  <section className="hidden grid-cols-4 grid-rows-2 row-start-2 row-end-4 lg:row-start-1  lg:grid lg:col-start-2 lg:col-end-4 rounded-xl overflow-hidden">
        <div className="col-start-2 col-end-5 row-start-1 row-end-2 h-full w-full">
        <Image alt="Happy Family In Kitchen" className="w-full h-full object-cover" src={heroImg1}/>
        </div>
        <div className="row-start-1 row-end-2 col-start-1 col-end-2">
      <Image alt="Chocolate Dessert on Counter" className="w-full h-full object-cover" src={heroImg2}/>
      </div>
      <div className="col-start-1 col-end-3 w-full h-full">
      <Image alt="Happy Family In Kitchen" className="w-full h-full object-cover" src={heroImg3} />
      </div>
      <div className=" col-start-3 col-end-5">
      <Image alt="Aesthetic Kitchen" className="w-full h-full object-cover" src={heroImg4} />
      </div>
    </section>
        )
     
        
        }            
         </div>

        </div>
    )
}

export interface ProductPageProps {
    header:string
    heroTitle:string
    heroImg1?:StaticImageData
    heroImg2?:StaticImageData
    heroImg3?:StaticImageData
    heroImg4?:StaticImageData
    heroParagraph:string
    accordionHeader1:string
    accordionBody1:string
    accordionNumber1:string
    accordionHeader2:string
    accordionBody2:string
    accordionNumber2:string
    productObjects:{name:string,image:StaticImageData,href?:string |undefined}[]
    productObjectsTitle:string
    productObjectsCaption:string
    slideShowImgs?:StaticImageData[]
}

export const ProductPage: React.FunctionComponent<ProductPageProps> = 
({
    header,
    heroTitle,
    heroImg1,
    heroImg2,
    heroImg3,
    heroImg4,
    heroParagraph,
    accordionHeader1,
    accordionBody1,
    accordionNumber1,
    accordionHeader2,
    accordionBody2,
    accordionNumber2,
     productObjects,
    productObjectsCaption,
    productObjectsTitle,
  slideShowImgs
}
) => {
    const [lightBox,setLightBox] = useState(false)
    const [selectedImage,setSelectedImage] = useState<StaticImageData|undefined>()
    return (  

         <div  className="min-h-screen ">
        
        <HeroProduct
        header={header}
        heroImg1={heroImg1}
        heroImg2={heroImg2}
        heroImg3={heroImg3}
        heroImg4={heroImg4}

           heroTitle={heroTitle}
           heroParagraph={heroParagraph}
           accordionHeader1={accordionHeader1}
           accordionBody1={accordionBody1}
           accordionNumber1={accordionNumber1}
           accordionHeader2={accordionHeader2}
           accordionBody2={accordionBody2}
           accordionNumber2={accordionNumber2}
         
           slideShowImgs={slideShowImgs}
       />

       <>
       {lightBox ? <LightBox lightBox={lightBox} setLightBox={setLightBox} image={selectedImage} alt="Quartz Countertop"/> : ''}
       </>
          <div className="flex flex-col justify-center items-center gap-4 ">
           
            <h3 className="italic text-3xl">{productObjectsTitle}</h3>
            <p className="">{productObjectsCaption}</p>
       
          <div className=" min-h-screen grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-y-4  w-full justify-items-center">
          {productObjects.map((product,key)=> {
                return <ProductComponent  setSelectedImage={setSelectedImage} lightBox={lightBox} setLightBox={setLightBox}  name={product.name} image={product.image} href={product.href} key={key}/>
          })}
        </div>
            </div>
          </div>
     
    );
}
 
export default ProductPage;