import {z} from 'zod'
export const ContactFormSchema = z.object({
    name: z
        .string()
        .min(1,{message: 'Name is required'})
        .min(2,{message: 'Name is too short'}),
    email: z
        .string()
        .min(1,{message: 'Email is required'})
        .email('Invalid email address'),
    message: z.string().min(1,{message: 'Message is required'})
})
