import { UilPhone, UilEnvelope , UilLocationPoint, UilInstagram, UilFacebookF,UilBackward} from "@iconscout/react-unicons"
import { ChangeEvent, ChangeEventHandler, FormEvent, ReactNode } from "react"
import { FormControl} from "@rewind-ui/core"
import { types } from "util"
import { InputType } from "zlib"
import { useState,useEffect } from "react"
import axios from "axios"
import {toast} from "react-hot-toast"
import { useRouter } from "next/navigation"



interface ContactItemProps {
    desc:string
    icon:ReactNode
}


const ContactItem:React.FunctionComponent<ContactItemProps> = ({desc,icon}) => {
    return (
        <div className="flex flex-col  items-center text-lg lg:text-xl  gap-4 lg:flex-row lg:items-start">
            <span>{icon}</span>
            <h3>{desc}</h3>

        </div>
    )
}





interface FormFieldProps {
    form:boolean|undefined,
    submitted:boolean,
    setSubmitted:React.Dispatch<React.SetStateAction<boolean>>
    setTimer:React.Dispatch<React.SetStateAction<number>>
    timer:number
    date:string | null |undefined
    time:string | null |undefined
    person:string | null |undefined
}


const FormField:React.FunctionComponent<FormFieldProps> = ({date,time, submitted, setSubmitted,timer, setTimer,person})=> {

'use client';




//**Submitting Form **/
const handleSubmit = async(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await axios.post('/api/sendemail',formValues)
    .then((e)=> { setSubmitted(!submitted);   toast.success("Email sent!")})
    .catch((e)=> {toast.error("There was an issue in completing your request, please try again later.")})


    }
   
//**Submitting Form **/


const [formValues, setFormValues] = useState<{
    fName:string
    lName:string
    email:string
    phone:string
    message:string
    date:string | undefined|null
    time:string | undefined|null
    person:string| undefined|null

}>({
    fName:'',
    lName:'',
    email:'',
    phone:'',
    message:'',
    date:date,
    time:time,
    person:person
    
})
   
  
    return (
       
            <form  onSubmit={handleSubmit} className="grid grid-rows-2 p-4 gap-y-4">
            <div className="grid grid-rows-3 grid-cols-2 gap-4 ">
            <FormControl>
                <FormControl.Label required>First</FormControl.Label>
                <FormControl.Input onChange={(e:ChangeEvent<HTMLInputElement>) => setFormValues({...formValues,fName:e.target.value })}  name={"fName"} type={"text"}  className="p-4" placeholder={"Harry"} required></FormControl.Input>
            </FormControl>
            <FormControl>
                <FormControl.Label required>Last</FormControl.Label>
                <FormControl.Input onChange={(e:ChangeEvent<HTMLInputElement>) => setFormValues({...formValues,lName:e.target.value })}  name={"lName"} type={"text"}  className="p-4" placeholder={"Potter"} required></FormControl.Input>
            </FormControl>
            <FormControl>
                <FormControl.Label required>Email</FormControl.Label>
                <FormControl.Input onChange={(e:ChangeEvent<HTMLInputElement>) => setFormValues({...formValues,email:e.target.value })}  name={"email"} type={"email"}  className="p-4" placeholder={"harryPotter@gmail.com"} required></FormControl.Input>
            </FormControl>
         
            <FormControl>
                <FormControl.Label required>Phone Number</FormControl.Label>
                <FormControl.Input maxLength={10} onChange={(e:ChangeEvent<HTMLInputElement>) => setFormValues({...formValues,phone:e.target.value })}  name={"phone"} type={"tel"}  className="p-4" placeholder={"#"} required></FormControl.Input>
            </FormControl>
      

           </div>

            
           <div className="grid grid-rows-3 grid-cols-3">
              <div className="col-start-1 col-end-4 flex flex-col justify-start items-start gap-4">
              <FormControl className="w-full" >
                <FormControl.Label required>Message</FormControl.Label>
                <FormControl.Input className="p-4" onChange={(e:ChangeEvent<HTMLInputElement>)=>(setFormValues({...formValues, message:e.target.value}))}  name={"message"} placeholder="Type your comment..." required/>
            </FormControl>
              </div>
                <button className="rounded-lg bg-mainblue text-white p-4 col-start-1 col-end-4 lg:col-start-3 self-center  ">Send Message</button>
           </div>

        


            </form>
    
    )
}


const ThankYouPage = ({timer}:{timer:number})=> {
    return (
        <div className="flex flex-col items-center justify-center gap-8 pt-[7rem]">
                <h1 className="text-5xl">Thank you for contacting us!</h1>
                <h3 className="text-lg">Please Allow us 24 hours for a response to inquiries</h3>
                <h3 className="text-mainblue">Redirecting in {timer}</h3>
        </div>
    )
}




interface FormProps {
    form?:boolean 
    setForm:React.Dispatch<React.SetStateAction<boolean>> | (()=> {})
    title:string,
    body:string
    time?:string | undefined | null
    date?:string | undefined | null
    person?:string
   
}
 
const Form: React.FunctionComponent<FormProps> = ({form,setForm,title,body,date,time,person}) => {
    'use client';
    const router = useRouter()
    const [submitted, setSubmitted]= useState<boolean>(false)
    const [timer,setTimer] = useState<number>(5);


    useEffect(() => {
        if(submitted) {
           
           if(timer > 0) {
               setTimeout(()=> {
                   setTimer(timer-1)
               },1000)
           }
       
           if(timer==0) {
               router.push('/')
           }
        }
       }, [timer,submitted]);

    return ( 
    <div className="min-h-screen grid grid-rows-4 p-8 place-items-center pt-[5rem]">

    {submitted ?  
    
    <ThankYouPage timer={timer}/>: 
    
  <>
    <div className="grid grid-cols-8 place-items-start w-full pt-[4rem]">
    {form ?   <span onClick={()=>{setForm(!form)}} className="col-start-1 col-end-2 text-dodgerblue cursor-pointer"><UilBackward/>Back</span> : ''}
    <div className="flex flex-col justify-center items-center text-center h-full col-start-2 col-end-8 gap-4 mb-4 ">
            
            <h1 className="text-3xl lg:text-5xl ">{title} </h1>
            <h3 className="text-gray-400 text-xl">{body}</h3>
            {form ? <span className="text-mainblue text-xl font-semibold"> {date} at {time} with {person}</span> : ''}
            </div>
         
  </div>
   

      <div className="row-start-2 row-end-5 grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none h-fit w-full lg:w-4/5">       

          <div className="flex flex-col justify-between items-center text-center lg:text-left lg:items-start gap-16 bg-mainblue p-8 rounded-xl text-white">

          <section>
              <h2 className="text-4xl font-semibold">Contact Information</h2>
              <h3>Get in touch today!</h3>
          </section>


          <section className="flex flex-col justify-center items-center lg:items-start  gap-6">
              <ContactItem desc={"+(732) 604-9690"} icon={<UilPhone/>}/>
              <ContactItem desc={"info@prodesignkitchens.com"} icon={<UilEnvelope/>}/>
              <ContactItem desc={"225 NJ-35 Suite 6, Neptune City, NJ 07753"} icon={<UilLocationPoint/>}/>
          </section>


          <section className="flex justify-start items-center gap-6">
              <span><UilInstagram/></span>
              <span><UilFacebookF/></span>
          
          </section>


          </div>


          <FormField person={person} timer={timer} setTimer={setTimer} submitted={submitted} setSubmitted={setSubmitted} date={date} time={time}  form={form} />


      </div>
      </>  
    
    
  
    
    
    
    
    
    }
     


    </div> 
    
    
    );
}
 
export default Form;





