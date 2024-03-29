'use client';
import { ChangeEvent, useEffect,useState } from "react";
import Form from './Form'
import React from 'react'
import { Accordion, Calendar } from "@rewind-ui/core";
import {motion} from 'framer-motion'
import Link from "next/link";
import format from "date-fns/format";
import {FormControl} from "@rewind-ui/core";
import toast from "react-hot-toast";



interface BookProps {
    
}







const Book: React.FunctionComponent<BookProps> = () => {
  
     const currentDate = new Date();
    const yesterday = new Date()
    yesterday.setDate(currentDate.getDate()-1)
   
    const formattedDate = format(currentDate, 'EE MMM dd yyyy')
    const formattedTime = format(currentDate, 'h:mm bbb');
    
   
    var allTimes = ['10:00 am', '10:30 am', '11:00 am', '11:30 am', '12:00 pm', 
    '12:30 pm','1:00 pm','1:30 pm', '2:00 pm','2:30 pm','3:00 pm','3:30 pm','4:00 pm','4:30 pm','5:00 pm'];

    function createCustomDate(hours:number, minutes:number) {
        const currentDate = new Date();
        currentDate.setHours(hours, minutes, 0, 0);
        return currentDate;
      }
      
  
      const customDateTimes = allTimes.map(allTimes => {
        const [hours, minutes, period] = allTimes.split(/[ :]/);
        const isPM = period.toLowerCase() === 'pm';
        const adjustedHours = isPM && parseInt(hours, 10) !== 12 ? parseInt(hours, 10) + 12 : parseInt(hours, 10);
        return createCustomDate(adjustedHours, parseInt(minutes, 10));
      });
   

      const availableTimes:string[]= []
      for(var i =0; i< customDateTimes.length;i++) {
        if(customDateTimes[i].getTime() > currentDate.getTime()) {
           availableTimes.push(format(customDateTimes[i], 'h:mm bbb'))
        }
      }





        const [mapTimes, setMapTimes] = useState<string[]>(allTimes)
        const [time,setTime] = useState<string | undefined | null>('9:00 am')
        const [date,setDate]= useState<string | null |undefined>(currentDate.toDateString())
        const [form,setForm] = useState<boolean>(false)
        const [person,setPerson] = useState<string>("Nik")
    



        
        const handleClick = ({e}: {e:React.MouseEvent<HTMLDivElement>}) => {
            const divTarget = e.target as HTMLDivElement; 
            setTime(divTarget.innerHTML);
      
        }

        const TimeComponent = ({t}:{t:string})=> {
            return (
                <motion.div
                onClick={(e: React.MouseEvent<HTMLDivElement>)=>handleClick({e})}            
                className={`flex justify-start items-center p-4 border-2 h-18   hover:cursor-pointer ${t==time ? "bg-mainblue text-white": "text-black"} `}>
                    {t}
                </motion.div>
            )
        }
     
        useEffect(() => {
          setTime(mapTimes[0])
        }, [mapTimes]);


      useEffect(() => {
        if(date) {
          const [dayOTW, month, day ,year] = date.split(/[ ]/)

          if(parseInt(day,10) == currentDate.getDate()) {
            setMapTimes(availableTimes)
          }else{
            setMapTimes(allTimes)
          }

        }else {
          setDate(formattedDate)
        }
      }, [date]);

     


    


    return (  
            <>
            {form?  
        <Form person={person}  time={time} date={date} title={"Kindly share your thoughts or specific requests with us."} body={"We're here to tailor our services to your needs."} form={form} setForm={setForm}/>
        :
        <div className="min-h-screen xl:h-screen grid xl:grid-cols-3 grid-rows-4 place-items-center p-4 z-50 pt-[5rem]">
       
        <div className="flex flex-col text-center items-start justify-start gap-4 row-start-1 row-end-2 xl:col-start-1 xl:col-end-3  xl:text-left " >
            <h1 className="text-3xl xl:text-5xl font-semibold">Initial Design and Pricing Estimate</h1>
            <h3>Check out our availability and book the date and time that works for you</h3>
        </div>


      <div className="row-start-2 row-end-5  grid grid-rows-3 gap-y-8  xl:grid-rows-none xl:col-span-3 xl:grid-cols-3  xl:gap-y-0 xl:gap-x-8  ">
      <Calendar minDate={yesterday} disabledWeekends={false} size="lg" shadow='xl' onChange={(e)=> {setDate(e?.toDateString())}} />
        
        <div className="grid grid-cols-4 justify-center items-start h-fit gap-4">
        {mapTimes.length == 0 ?  <h3 className="w-full row-span-full col-span-full text-mainblue">No booking times available, please select a future date.</h3> : 
        
        mapTimes.map((time,key)=> {
            return (
                <TimeComponent key={key} t={time}/>
            )
            }) }
        
        
        </div>

        <div className="flex flex-col items-start justify-between ">
        <div className="flex flex-col items-start justify-start gap-4 w-full">
        <p className="font-semibold text-2xl">Initial Design and Pricing Estimate </p>
        <p className="font-semibold text-2xl">Date:  
     
         
         <span className="text-mainblue text-xl"> {date} at {time} with {person}</span>
          </p>
       
        <p>Preferences</p>
        <FormControl.Select onChange={(e:ChangeEvent<HTMLSelectElement>)=> {setPerson(e.target.value)}} withRing={false} size="md" required>
        <option value="Nik" >Nik</option>
      <option value="Tina">Tina</option>
        </FormControl.Select>
        </div>

  <button onClick={()=>{(date && time) ? setForm(!form) : toast.error("please pick a date and time") }} className="self-end rounded-xl p-4 bg-dodgerblue text-white">Continue</button>
       
     

        </div>
      </div>





            </div>    
        
        
        
        
        
        }
            </>
            

           

     );
}
 
export default Book;