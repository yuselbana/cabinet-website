import cab from '../../public/cabinetryHero/cab1.jpg'
import Image, { StaticImageData } from 'next/image'
import abt1 from '../../public/about/abt1.jpg'
import abt2 from '../../public/about/abt2.jpg'
import abt3 from '../../public/about/abt3.jpg'
import abt4 from '../../public/about/abt4.jpg'
interface AboutProps {
    
}

const AboutComponent = ({title,body1,body2,reverse,image}: {title:string, body1:string,body2:string,reverse:boolean,image:StaticImageData} ) => {
    return (
        <>
            
               
               <div className="grid grid-rows-2 lg:grid-cols-7  lg:grid-rows-1 place-items-center p-4 lg:p-0">

            <div className={` h-fit w-full row-start-1 lg:row-end-2 ${reverse ? "lg:col-start-4 lg:col-end-7" : "lg:col-start-2 lg:col-end-5" } row-start-1 row-end-2  rounded-3xl overflow-hidden`}>
               <Image alt='' className='w-full h-full object-contain' src={image}/>
               </div>
       
            <div className={`h-fit rounded-3xl row-start-2 row-end-3 lg:row-start-1 lg:row-end-2  py-12 pl-8 flex flex-col items-start justify-start gap-4 ${reverse ? "lg:col-start-2 lg:col-end-5" : "lg:col-start-4 lg:col-end-7"} z-10  bg-white rounded-3xl`}>
               <span className="text-mainblue uppercase text-xl">{title}</span>
               <p>{body1}</p>
               <p>{body2}</p>
       
               </div>

             
         
               </div>
           

                </>
    )
}

 
const About: React.FunctionComponent<AboutProps> = () => {
    return ( 
    <div className="min-h-screen pt-[12rem] grid  gap-y-12 place-items-center ">

    <div className="grid grid-rows-2 min-h-screen lg:h-[75vh] lg:grid-cols-2 lg:grid-rows-none place-items-center  w-4/5 p-8 gap-y-4 lg:gap-x-4">
    <div className="flex flex-col items-start justify-center gap-16 row-span-2 lg:row-span-1 h-full">
    <section>
    <span className="text-mainblue">Our Story</span>
    <p>Motivated by the quest for affordable quality and unparalleled customer service, Pro Design Kitchens began its remarkable journey.</p>
    </section>
    <p>
    Since 2000, our team of skilled professionals at Pro Design Kitchens has been revolutionizing homes, consistently delivering exceptional customer service in the remodeling and house-flipping industry.
     Faced with delays and inadequate responses from our kitchen cabinet suppliers, we took the initiative to become a leading Cabinet Store ourselves. Our commitment is to extend our exemplary customer service to others who hold similar expectations for their projects.
    </p>
    <p>
    At Pro Design Kitchens, we understand that your home is a reflection of your personal style. That&nbsp;s why we approach every cabinet sale with a personalized touch. We aren&apos;t just your partners; we are your advocates, dedicated to fulfilling your vision every step of the way. 
    Schedule a meeting with us today to experience the Pro Design Kitchens difference.</p>

    <p>A heartfelt thank you to all our customers for entrusting us with their kitchen transformations!</p>
    <p>Warm regards,<br/>Nik, Matt, and Tina at Pro Design Kitchens</p>
    </div>


<div className="hidden lg:inline w-full h-full rounded-3xl overflow-hidden">
<Image alt='Blueprint Design' className='w-full h-full object-cover ' src={abt4}/>
</div>


</div>
        
        <AboutComponent reverse={false} title={"Quality Products"}
         body1={"As a premier Kitchen Remodeler, we understand that cabinets are the cornerstone of kitchen design. To guarantee durability, functionality, and aesthetics, we source our cabinets from 16 renowned manufacturers, offering an extensive range of styles, colors, and materials. "}
         body2={"Whether you're looking for contemporary chic or timeless elegance, our selection caters to every taste and budget, making us your go-to Cabinet Store. In addition to our vast array of cabinet choices, we also provide a selection of exquisite countertop options to flawlessly complete your kitchen's transformation."}
         image={abt1}
         /> 
         <AboutComponent reverse={true} title={"Our values"}
         body1={"We recognize that remodeling your kitchen is a significant endeavor, and our goal as Wholesale Kitchen experts is to make this journey as seamless and enjoyable as possible for you.  "}
         body2={"We are deeply committed to earning and maintaining your trust, assuring that every step of your kitchen remodel meets and surpasses your expectations. Our dedication to outstanding customer service is unwavering, and we look forward to making your kitchen remodeling experience with us a memorable one."}
         image={abt2}
         /> 
         <AboutComponent reverse={false} title={"Experience"}
         body1={"Our journey, fueled by a passion for exceptional design and backed by 25 years of industry expertise, has earned us a reputation for creating aesthetically pleasing and functional living spaces. "}
         body2={"If you're looking to transform your home into your envisioned sanctuary, contact Pro Design Kitchens today and discover the magic we can weave into your interiors."}
         image={abt3}
         /> 



        </div>

     );
}
 
export default About;



{/*  */}