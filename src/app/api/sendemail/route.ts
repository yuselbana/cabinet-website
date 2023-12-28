import { NextRequest, NextResponse } from "next/server"
import { transporter, mailOptions } from "@/nodemailer/nodemailer";
 async function Handler(req:NextRequest,res:NextResponse) {
    const body = await req.json();

    var subject = ""
    var html = ""
        if((body.consultation || body.design || body.dateAndTime )== (undefined ||null || '')) {
            subject="Client that has questions"
            html = 
            `
            <strong>Full Name</strong>: <span>${body.fName + ' ' +body.lName}</span><br/><br/>
            <strong>Email Address</strong>: <span>${body.email}</span><br/><br/>
            <strong>Phone Number</strong>: <span>${body.phone}</span><br/><br/>
            <strong>Message</strong>: <span>${body.message}</span>
            `
        }else {
            subject="Client that desires some service"
            html =  `
            <strong>Appointment</strong>: <span>${body.dateAndTime}</span> <br/><br/>
            <strong>Full Name</strong>: <span>${body.fName + ' ' +body.lName}</span><br/><br/>
            <strong>Email Address</strong>: <span>${body.email}</span><br/><br/>
            <strong>Phone Number</strong>: <span>${body.phone}</span><br/><br/>
            <strong>Design</strong>: <span>${body.design }</span> <br/><br/>
            <strong>Consultation</strong>: <span>${body.consultation}</span> <br/><br/>
            <strong>Message</strong>: <span>${body.message}</span>
            `
        }



    try {
        await transporter.sendMail({
            ...mailOptions,
            subject:`${subject}`,
            text:"ProDesign Client Inquiry",
            html:html
           
        }) 
    
        return NextResponse.json({status:'okay'})
    } catch (error) {
        console.log(error)
        return NextResponse.json({status:'bad post'})
    }
}

export {Handler as POST}

// fName:string
// lName:string
// email:string
// phone:string
// message:string
// consultation:string|undefined | null
// design:string|undefined | null
// dateAndTime:string | undefined| null