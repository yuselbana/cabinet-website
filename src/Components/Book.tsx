'use client';
import { ChangeEvent, useEffect,useState } from "react";
import Form from './Form'
import React from 'react'
import { Accordion, Calendar } from "@rewind-ui/core";
import {motion} from 'framer-motion'
import Link from "next/link";
import format from "date-fns/format";
import {FormControl} from "@rewind-ui/core";



interface BookProps {
    
}







const Book: React.FunctionComponent<BookProps> = () => {
  
    const currentDate = new Date();

    const formattedDate = format(currentDate, 'EE MMM dd yyyy')

    const times = ['10:00 am', '10:30 am', '11:00 am', '11:30 am', '12:00 pm', '12:30 pm','1:00 pm','1:30 pm', '2:00 pm' ]
   
    // const formattedTime = format(currentDate, 'HH:mm');

  


        const [date,setDate] = useState<string |undefined | null>()
        const [time,setTime] = useState<string | undefined | null>("10:00 am")
        const [form,setForm] = useState<boolean>(false)
        const [dateAndTime,setDateAndTime] = useState<string>(formattedDate)
        const [person,setPerson] = useState<string>('Nik')
       

        
        const handleClick = ({e}: {e:React.MouseEvent<HTMLDivElement>}) => {
            const divTarget = e.target as HTMLDivElement; 
            setTime(divTarget.innerHTML);
      
        }

        const TimeComponent = ({t}:{t:string})=> {
            return (
                <motion.div
                onClick={(e: React.MouseEvent<HTMLDivElement>)=>handleClick({e})}            
                className={`flex justify-start items-center p-4 border-2 border-mainblue hover:cursor-pointer bg-${t==time ? "dodgerblue text-white": "transparent"} `}>
                    {t}
                </motion.div>
            )
        }
     


    useEffect(() => {
        if(date == undefined ) {
            setDate(formattedDate)
        }
        setDateAndTime(`${date}, at ${time} with ${person}`)
       
    }, [date,time,person]);

    return (  
            <>
            {form?  
        <Form  dateAndTime={dateAndTime} time={time} date={date} title={"Kindly share your thoughts or specific requests with us."} body={"We're here to tailor our services to your needs."} form={form} setForm={setForm}/>
        :
        <div className="min-h-screen xl:h-screen grid xl:grid-cols-3 grid-rows-4 place-items-center p-4 z-50 pt-[5rem]">
       
        <div className="flex flex-col text-center items-start justify-start gap-4 row-start-1 row-end-2 xl:col-start-1 xl:col-end-3  xl:text-left " >
            <h1 className="text-3xl xl:text-5xl font-semibold">Initial Design and Pricing Estimate</h1>
            <h3>Check out our availability and book the date and time that works for you</h3>
        </div>


      <div className="row-start-2 row-end-5  grid grid-rows-3 gap-y-8  xl:grid-rows-none xl:col-span-3 xl:grid-cols-3  xl:gap-y-0 xl:gap-x-8  ">
      <Calendar disabledWeekends={false} size="lg" shadow='xl' onChange={(e)=> {setDate(e?.toDateString())}} />
        
        <div className="grid grid-cols-4 justify-center items-start h-fit gap-4">
    {times.map((time,key)=> {
    return (
        <TimeComponent key={key} t={time}/>
    )
    }) }
        </div>

        <div className="flex flex-col items-start justify-between ">
        <div className="flex flex-col items-start justify-start gap-4 w-full">
        <p className="font-semibold text-2xl">Initial Design and Pricing Estimate </p>
        <p className="font-semibold text-2xl">Date:  
     
         
         <span className="text-mainblue text-xl"> {dateAndTime}</span>
          </p>
       
        <p>Preferences</p>
        <FormControl.Select onChange={(e:ChangeEvent<HTMLSelectElement>)=> {setPerson(e.target.value)}} withRing={false} size="md" required>
        <option value="Nik" >Nik</option>
      <option value="Tina">Tina</option>
        </FormControl.Select>
        </div>

  <button onClick={()=>{setForm(!form)}} className="self-end rounded-xl p-4 bg-dodgerblue text-white">Continue</button>
       
     

        </div>
      </div>





            </div>    
        
        
        
        
        
        }
            </>
            

           

     );
}
 
export default Book;