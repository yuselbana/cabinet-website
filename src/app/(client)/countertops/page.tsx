import ProductPage from "@/Components/ProductPage"
import biancoCarrara from '../../../../public/countertops/biancoCarrara.jpg'
import calacattaOmbra from '../../../../public/countertops/calacattaOmbra.jpg'
import calacattaTuscany from '../../../../public/countertops/calacattaTuscany.jpg'
import calacattaVienna from '../../../../public/countertops/calacattaVienna.jpg'
import cararraSelect from '../../../../public/countertops/cararraSelect.jpg'
import noirBlanc from '../../../../public/countertops/noirBlanc.jpg'
import biancoFantastico from '../../../../public/countertops/biancoFantastico.jpg'
import biancoLasa from '../../../../public/countertops/biancoLasa.jpg'
import biancoVenatino from '../../../../public/countertops/biancoVenatino.jpg'
import calacattaArgento from '../../../../public/countertops/calacattaArgento.jpg'
import calacattaBello from '../../../../public/countertops/calacattaBello.jpg'
import calacattaBorghini from '../../../../public/countertops/calacattaBorghini.jpg'
import calacattaGold from '../../../../public/countertops/calacattaGold.jpg'
import calacattaOne from '../../../../public/countertops/calacattaOne.jpg'
import calacattaOro from '../../../../public/countertops/calacattaOro.jpg'
import caldiaExtra from '../../../../public/countertops/caldiaExtra.jpg'
import carraraNuovo from '../../../../public/countertops/carraraNuovo.jpg'
import dolomitiExtra from '../../../../public/countertops/dolomitiExtra.jpg'
import greySoapStone from '../../../../public/countertops/greySoapStone.jpg'
import michelangelo from '../../../../public/countertops/michelangelo.jpg'
import montClairRoyal from '../../../../public/countertops/montClairRoyal.jpg'
import neveSupreme from '../../../../public/countertops/neveSupreme.jpg'
import statuaryVena from '../../../../public/countertops/statuaryVena.jpg'
import chocolateOnCouter from '../../../../public/counterTopHero/chocolateOnCounter.jpeg'
import happyFamily from '../../../../public/counterTopHero/happyFamily.jpeg'
import happyFamily2 from '../../../../public/counterTopHero/happyFamily2.jpg'
import kitch from '../../../../public/counterTopHero/kitch.jpg'
import { StaticImageData } from "next/image"

const counterTopObjects : {name:string, image:StaticImageData}[] =[
{name:"Bianco Carrara",image:biancoCarrara},
{name:"Calacatta Ombra",image:calacattaOmbra},
{name:"Calacatta Tuscany",image:calacattaTuscany},
{name:"Calacatta Vienna",image:calacattaVienna},
{name:"Cararra Select",image:cararraSelect},
{name:"Noir Blanc",image:noirBlanc},
{name:"Bianco Fantastico",image:biancoFantastico},
{name:"Bianco Lasa",image:biancoLasa},
{name:"Bianco Venatino",image:biancoVenatino},
{name:"Calacatta Argento",image:calacattaArgento},
{name:"Calacatta Bello",image:calacattaBello},
{name:"Calacatta Borghini",image:calacattaBorghini},
{name:"Calacatta Gold Select",image:calacattaGold},
{name:"Calacatta One",image:calacattaOne},
{name:"Calacatta Oro",image:calacattaOro},
{name:"Caldia Extra",image:caldiaExtra},
{name:"Carrara Nuovo",image:carraraNuovo},
{name:"Dolomiti Extra",image:dolomitiExtra},
{name:"Grey Soap Stone",image:greySoapStone},
{name:"Michelangelo",image:michelangelo},
{name:"Montclair Royal",image:montClairRoyal},
{name:"Neve Supreme",image:neveSupreme},
{name:"Statuary Vena",image:statuaryVena}
]

export default function Page() {
    return <ProductPage 
        header={"02"}
        heroTitle={"Quartz & Granite Masterpieces"}
        heroImg1={happyFamily}
        heroImg2={chocolateOnCouter}
        heroImg3={happyFamily2}
        heroImg4={kitch}
        heroParagraph={"Explore the unmatched beauty and durability of our quartz and granite countertops in the gallery below. Each image is a testament to the exquisite craftsmanship and timeless appeal of these premium materials. From sleek and modern to classic and enduring, our countertops are designed to elevate your space with a perfect blend of style and functionality. "}
        accordionHeader1={"Quartz Countertops"}
        accordionBody1={"Unleash the perfect blend of style and durability with our engineered quartz surfaces. Crafted from natural quartz crystals, these countertops offer a stunning array of colors, adding a touch of sophistication to your kitchen."}
        accordionNumber1={"1"}
        accordionHeader2={"Granite Countertops"}
        accordionBody2={" Elevate your kitchen aesthetic with the timeless beauty of granite. Each slab is a unique masterpiece, showcasing distinctive patterns and hues. Renowned for durability, granite countertops seamlessly combine style and functionality for enduring appeal."}
        accordionNumber2={"2"}
        productObjects={counterTopObjects}
        productObjectsTitle={"Quartz Selection"}
        productObjectsCaption={"Come to our showroom to see the best available options"}
      
        
        />
    
}

//have to make lightbox for the images.