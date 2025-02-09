'use client'

import {z} from 'zod'
import Link from 'next/link'
import {toast} from 'sonner'
import {SubmitHandler, useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {ContactFormSchema} from '@/lib/schemas'
import{Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import {sendEmail } from '@/lib/actions'  

type Inputs = z.infer<typeof ContactFormSchema>

export default function ContactForm(){
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors,isSubmitting}
    }=useForm<Inputs>({
        resolver:zodResolver(ContactFormSchema),
        defaultValues:{ name:'', email:'', message:''}
    })

    const processForm:SubmitHandler<Inputs> = async (data) => {
        const result=await sendEmail(data)
        if(result?.error){
            toast.error('An error occurred. Please try again later.')
            return
        }
        toast.success('Message sent successfully!')
        reset()
    }
    return (
        <section id="contact" className='relative isolate'>
            <div className='relative max-w-3xl mx-auto px-9'>
            <h2 className='text-3xl font-semibold text-center mb-8 mt-16'>
      Reach out to me:
    </h2>
                <form onSubmit={handleSubmit(processForm)} className='mt-12 lg:flex-auto' noValidate>
                    <div  className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
                        <div>
                            <Input
                                id='name'
                                type='text'
                                placeholder='Name'
                                autoComplete='given-name'
                                {...register('name')}
                            />
                            {errors.name?.message  && (
                                <p className='ml-1 mt-2 text-sm text-rose-400'>
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Input
                                id='email'
                                type='email'
                                placeholder='Email'
                                autoComplete='email'
                                {...register('email')}
                            />
                            {errors.email?.message && (
                                <p className='ml-1 mt-2 text-sm text-rose-400'>
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div className='sm:col-span-2'>
                            <Textarea
                                rows={4}
                                placeholder='Message'
                                {...register('message')}
                            />
                            {errors.message?.message && (
                                <p className='ml-1 mt-2 text-sm text-rose-400'>
                                    {errors.message.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className='mt-6'>
                        <Button
                            type='submit'
                            disabled={isSubmitting}
                            className='w-full disabled:opacity-50'
                        >
                            {isSubmitting ? 'Sending...' : 'Contact Us'}
                        </Button>
                    </div>
                    <p className='mt-4 text-xs text-muted-foreground'>
                        By submitting this form, I agree to the{' '}
                        <Link href='/privacy' className='font-bold'>
                            privacy&nbsp;policy.
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    )
}