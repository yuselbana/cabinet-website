import Link from "next/link"
import questions from '../../public/question.jpg'
import contact from '../../public/contact.jpg'
import Image from "next/image"
import RowComponent from "./RowComponent"
import Loading from "@/app/(client)/loading"
interface ChooseContactProps {
    
}




 
const ChooseContact: React.FunctionComponent<ChooseContactProps> = () => {
    return ( 
        <div className=" min-h-screen  pt-[7rem] grid grid-rows-5  place-items-center">
            <div className="flex flex-col items-center justify-center text-center gap-4">
            <span className="text-mainblue">05</span>
            <h1 className=" text-4xl">Connect with Us!</h1>
            <p className="w-1/2 text-lg">Have questions, ideas, or ready to take the next step in creating your dream kitchen? We&apos;re here for you.  </p>
            </div>
            <div className="row-span-4 p-8">
            <RowComponent button={"Book Now"} buttonHREF={"/book"} order={"1"} title={"Schedule Your Appoinment"} image={contact}  body={"We're committed to working with you one on one, ensuring a customized kitchen design that aligns with your preferences. Additionally, we provide a complimentary quote and 3D renderings."} />
            <RowComponent button={"Questions?"} buttonHREF={"/questions"} order={"-2"} title={"Answering Your Questions "} image={questions}  body={"We understand that decisions like these can be significant. If you have any doubts or queries about our services, we're here to provide clarity. Our team is ready to address your concerns and ensure you have all the information you need to make an informed decision. Feel free to reach out, and let's discuss how we can bring your vision to life together."} /> 
            </div>
        </div>
  
    )


       
}
 
export default ChooseContact;