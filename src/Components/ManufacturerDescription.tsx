import { StaticImageData } from "next/image";
import Image from "next/image";

interface ManuFacturerDescriptionProps {
    image:StaticImageData
    body:string
}
 
const ManuFacturerDescription: React.FunctionComponent<ManuFacturerDescriptionProps> = ({image,body}) => {
    return ( 
        <div className="flex flex-col lg:flex-row justify-center gap-8 items-center">

            <div className=" w-96 h-24">
            <Image className="w-full h-full object-contain" alt='' src={image}/>
            </div>

            <div className="w-full p-4 lg:w-1/2 ">
            <p>&quot;{body}&quot;</p>
            </div>
        </div>
     );
}
 
export default ManuFacturerDescription;