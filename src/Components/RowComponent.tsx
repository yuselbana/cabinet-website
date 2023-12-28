import { StaticImageData } from "next/image"
import Image from "next/image"
import Link from "next/link"
interface RowComponentProps {
title:string
body:string
image:StaticImageData
order:string
button:string
buttonHREF:string
}
 
const RowComponent: React.FunctionComponent<RowComponentProps> = ({title,body,image,order,button,buttonHREF}) => {
    return ( 
<div className={`h-fit lg:h-[50vh] grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none overflow-hidden  ${order =='1' ? "rounded-t-3xl" : "rounded-b-xl "}`}>
    <section className={`w-full h-full grid place-items-center p-12 lg:p-32 ${order == '1' ? 'order-1' : '-order-2'} bg-offwhite`}>
        <div className="flex flex-col items-center lg:items-start justify-start gap-4 text-center lg:text-left">
            
            <h1 className="text-4xl">{title}</h1>
            <h3 className="text-lg">{body}</h3>
        {button ? <Link href={buttonHREF}>  <button className="p-4 rounded-xl bg-mainblue text-white" >{button}</button></Link> : ''}
        </div>
    </section>

    <section className="w-full h-full overflow-hidden">
        <Image className="w-full h-full object-cover" src={image} alt="Beautiful Kitchens"/>
    </section>


</div>

     );
}
 
export default RowComponent;