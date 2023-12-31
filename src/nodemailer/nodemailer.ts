import nodemailer from 'nodemailer'

export const transporter  = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:process.env.NODEMAILER_USER,
        pass:process.env.NODEMAILER_PASSWORD
    }
})

export const mailOptions = {
    from:process.env.NODEMAILER_USER,
    to:process.env.NODEMAILER_USER
}
