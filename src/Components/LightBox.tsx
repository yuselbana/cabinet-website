import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import Image  from "next/image";
interface LightBoxProps {
    image:StaticImageData|undefined 
    alt:string
    lightBox:boolean
    setLightBox:React.Dispatch<React.SetStateAction<boolean>>
}
 
const LightBox: React.FunctionComponent<LightBoxProps> = ({image,alt,lightBox,setLightBox}) => {

    

    return ( 
        <div onClick={()=>{(lightBox && setLightBox(!lightBox)); document.body.style.overflowY='auto'}} className="h-full w-screen overflow-hidden grid place-items-center backdrop-blur-sm fixed bg-[rgba(0,0,0,0.7)]  top-0 z-30">
            <div className="h-1/2 w-1/2 overflow-hidden">
               {image &&  <Image className="w-full h-full object-contain" src={image} alt={alt}/>}
            </div>
        </div>
     );
}
 
export default LightBox;