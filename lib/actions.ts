'use server'
import {z} from 'zod'
import {Resend} from 'resend'
import ContactFormEmail from '@/emails/contact-form-email'
import { ContactFormSchema } from './schemas'
import React from 'react'
type ContactFormInputs = z.infer<typeof ContactFormSchema>

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function sendEmail(data: ContactFormInputs) {
    const result=ContactFormSchema.safeParse(data)
    if(result.error){
        return {error: result.error.format()}
    }
    try{
        const {name,email,message}=result.data
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["ayushaswal583@gmail.com"],
            cc: ["ayushaswal583@gmail.com"],
            subject: "Contact form submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            react: React.createElement(ContactFormEmail, { name, email, message }), // ✅ Corrected
          });
        if(!data || error){
            throw new Error('Failed to send Email')
        }
        return {success:true}
    } catch(error){
        return {error}
    }
   
}