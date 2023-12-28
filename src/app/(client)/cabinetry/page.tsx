
import ProductPage from "@/Components/ProductPage"
import { HeroProduct } from "@/Components/ProductPage"
import { HeroProductProps } from "@/Components/ProductPage"
import { ProductPageProps } from "@/Components/ProductPage"
import cab1 from '../../../../public/cabinetryHero/cab1.jpg'
import cab2 from '../../../../public/cabinetryHero/cab2.jpg'
import cab3 from '../../../../public/cabinetryHero/cab3.jpg'
import cab4 from '../../../../public/cabinetryHero/cab4.jpg'
import cab5 from '../../../../public/cabinetryHero/cab5.jpg'
import twentyFirstCenturyCabinetry from '../../../../public/cabinets/21stCenturyCabinetry.png'
import cncCabinetry from '../../../../public/cabinets/cncCabinetry.png'
import foreverMarkCabinetry from '../../../../public/cabinets/foreverMarkCabinetry.png'
import proSelectDesign from '../../../../public/cabinets/proSelectDesign.png'
import stMartin from '../../../../public/cabinets/stMartin.png'
import homeCo from '../../../../public/cabinets/homeCo.webp'
import jwq from '../../../../public/cabinets/jwqCabinetry.jpg'
import parriottWood from '../../../../public/cabinets/parriotWood.jpg'
import primaryKitchen from '../../../../public/cabinets/primaryKitchen.png'
import kountryWood from '../../../../public/cabinets/kountryWood.svg'
import tribecaCabinetry from '../../../../public/cabinets/tribecaCabinetry.png'
import wolfCabinetry from '../../../../public/cabinets/wolfCabinetry.svg'
import fermaWood from '../../../../public/cabinets/fermaWood.png'
import fgmCabinetry from '../../../../public/cabinets/fgmCabinetry.png'
import kithKitchens from '../../../../public/cabinets/kithKitchens.webp'
import ManuFacturerDescription from "@/Components/ManufacturerDescription"
import { StaticImageData } from "next/image"


const cabinetObjects = [
    {name:'Forever-Mark Cabinetry', image:foreverMarkCabinetry, href:'https://forevermarkcabinetry.com/cabinet-collections/'},
        {name:'CNC Cabinetry', image:cncCabinetry, href:'https://cnccabinetry.com/kitchen-cabinets/#New+Jersey'},
        {name:'ProSelect Design', image:proSelectDesign, href:'https://www.proselectdesign.com/cabinets-and-cabinetry-collections'},
        {name:'St.Martin Cabinetry', image:stMartin, href:'https://www.stmartincabinetry.com/list/76.html'},
        {name:'21st Century Cabinetry', image:twentyFirstCenturyCabinetry, href:'https://21stcenturycd.com/cabinets/'}, 
        {name:'HomeCo', image:homeCo, href:'https://www.google.com/'},
        {name:'JWQ Cabinetry',image:jwq, href:'https://www.jwqcabinetry.com/'},
        {name:'Parriott Wood', image:parriottWood, href:'https://www.parriottwood.com/c1-Cabinets.html'},
        {name:'Primary Kitchen', image:primaryKitchen, href:'https://primarykitchen.com/products/'},
        {name:'Kountry Wood', image:kountryWood, href:'https://www.kountrywood.com/door-styles/'},
        {name:'Tribeca Cabinetry', image:tribecaCabinetry, href:'https://tribecacabinetry.com/'},
        {name:'Wolf Cabinetry', image:wolfCabinetry, href:'https://www.wolfhomeproducts.com/kitchen-cabinetry/'},
        {name:'Ferma Wood', image:fermaWood, href:'https://fermawoodcabinetry.com/products-information/catalogue/'},
        {name:'FGM Cabinetry', image:fgmCabinetry, href:'https://www.fgmcabinetry.com/products'},
        {name:'Kith Kitchens', image:kithKitchens, href:'https://kithkitchens.com/door-styles/'},

    ]



    const slideShowImgs: StaticImageData[] = [cab1,cab2,cab4,cab5]

export default function Page() {
    return (
        <>
        <ProductPage
    header={"03"}
    heroTitle={"Our Cabinet Partners"}
    slideShowImgs={slideShowImgs}
    heroParagraph={"Discover the artistry behind our kitchen transformations through the lens of our esteemed cabinet manufacturers. We take pride in collaborating with industry leaders to bring you a diverse selection of high-quality cabinets. Each partnership reflects our commitment to delivering excellence, ensuring that your kitchen not only meets but exceeds the standards of craftsmanship and style. "}
    accordionHeader1={"Medium-Density Fiberboard"}
    accordionBody1={"Embrace modernity with our Medium-Density Fiberboard (MDF) cabinets. Sleek in design and budget-friendly, these cabinets offer a contemporary solution without sacrificing style. Ideal for creating a chic and practical kitchen space."}
    accordionNumber1={"1"}
    accordionHeader2={"Solid Wood"}
    accordionBody2={" Embrace warmth and authenticity with our high-quality, all-wood cabinets. Crafted for natural beauty and durability, they offer timeless appeal and a versatile design, complementing various styles for a charming kitchen atmosphere. Choose enduring all wood for style and substance in your kitchen."}
    accordionNumber2={"2"}
    productObjects={cabinetObjects}
    productObjectsTitle={"Our Cabinet Lines"}
    productObjectsCaption={"Click brand logo to view their collection you will be directed to their webpage displaying their catalog"}   
    

    />
      <div className="grid place-items-center gap-y-12 text-center">
      <ManuFacturerDescription image={twentyFirstCenturyCabinetry} body={"When you partner with 21st Century Cabinetry, you’re able to offer your clients an elegant line of kitchen cabinetry at an affordable price. Our wholesale cabinets are crafted for those looking for a variety of features and finishes, but at a more affordable rate & better quality than what you’ll find at the big box stores. Our most popular kitchen cabinet styles and finishes include natural wood, contemporary dark, timeless white and much more. As a dealer, you’ll have access to our exclusive line of cabinets, as well as accessories including moldings, glass doors, hardware and more."}/> 
      <ManuFacturerDescription image={foreverMarkCabinetry} body={"At Forevermark Cabinetry, we provide affordable, quality wood cabinetry.Cabinetry that is functional and stylish. Cabinetry that is reliable and durable enough for our families. Cabinetry that we use in our own homes every day. Forevermark Cabinetry features wood construction, superior hardware, and durable paints and finishes. We carefully design each distinctive style to make sure your kitchen stands out."}/>
      <ManuFacturerDescription image={stMartin} body={"The kitchen is the heart of the home and it is our belief that luxury kitchens should offer unsurpassed quality while still being an excellent value. We manufacture frameless cabinetry in an array of styles, materials and ﬁnishes to create environments that are unique and built to match your lifestyle. Our professionally designed collections cater to your speciﬁc design and aesthetic preferences and can transform your home into a sanctuary that will bring you joy for many years to come."}/>  
      <ManuFacturerDescription image={proSelectDesign} body={"Our ProSelect Cabinetry Collections offer unmatched workmanship and design-- custom tailored to each design project. ProSelect Cabinetry carries a large selection of styles and finishes to meet any residential or commercial needs. The door styles we offer include Flat Panel, Raised Panel and Rope Raised Panel designs. Coordinate your whole-house look with our Kitchen Cabinet Collections, Coordinating Vanities for the Bath, and NEW Furniture Vanities. We offer a full selection of kitchen cabinets and coordinating vanities."}/>  
      <ManuFacturerDescription image={primaryKitchen} body={"We offer innovative finishes, a variety of door styles, and high-end cabinet systems that complement any design style. From traditional to modern, or farmhouse to industrial – our kitchens are always timeless."}/>   
      <ManuFacturerDescription image={kithKitchens} body={"When choosing cabinet doors for you kitchen, bath, or other space, the cabinet door design coupled with the finish or color selection sets the design tone for your space. Cabinets are often the most visible design element in the kitchen. No matter your style and design preferences, Kith offers a door style for every personality and home design from elaborate to simple."}/>  
      <ManuFacturerDescription image={wolfCabinetry} body={"Create a kitchen that you’re happy to come home to with Wolf cabinetry. Whether you prefer the modern appearance of slab doors or feel more at home in a traditional-looking kitchen, you’ll find the right style, color, and price from Wolf Home Products. Explore our selection of cabinets on this page or visit our gallery to see some of the many ways homeowners have incorporated our quality kitchen cabinets into their decor."}/>  
      <ManuFacturerDescription image={tribecaCabinetry} body={"The kitchen is the heart of the home and it is our belief that kitchens should be fashion forward, stylish and contemporary while still being an excellent value. This is why every aspect of our products, from the design and engineering to the manufacturing process utilized at our state-of-the-art facility, was carefully considered. Our cabinetry features superior construction specifications, elevated furniture grade finishes and modern design flourishes all at an unbeatable price point and lightning-fast lead time. New for this year are our White Rift Oak products, which undergo wire-brushing for texture and warmth, and are a stellar example of the quality, style and design inherent in our brand."}/>
     
      </div>
        
        </>
    )
}


//add links for the companies
//  https://www.homecoonline.com/ {go to cabinet section}