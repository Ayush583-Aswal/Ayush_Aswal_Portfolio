import { JSX, SVGProps } from 'react';

const navigation = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ayush-aswal-a5028a250/',
        icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
            <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                <path d='M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 21h5V7H0v14zm7 0h5v-7c0-1.57.31-3.07 2.2-3.07s2.2 1.5 2.2 3.07v7h5V13c0-3.86-2.5-5.6-5.6-5.6-2.1 0-3.95 1.2-4.6 2.4V7H7v14z'/>
            </svg>
        )
    },
    {
        name: 'GitHub',
        href: 'https://github.com/',
        icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
            <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                <path d='M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.21.66-.47v-1.72c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.88 1.52 2.3 1.08 2.86.83.09-.64.34-1.08.62-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02a9.62 9.62 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.59 1.03 2.68 0 3.86-2.35 4.7-4.59 4.95.35.3.66.91.66 1.84v2.73c0 .27.16.57.67.47A10.02 10.02 0 0 0 22 12c0-5.52-4.48-10-10-10z'/>
            </svg>
        )
    },
    {
        name: 'X',
        href: 'https://twitter.com/',
        icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
            <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.46 2a9 9 0 0 1-2.88 1.11 4.52 4.52 0 0 0-7.86 3.1 4.49 4.49 0 0 0 .11 1.03A12.8 12.8 0 0 1 2 3.5a4.51 4.51 0 0 0-.61 2.27 4.48 4.48 0 0 0 2 3.72 4.48 4.48 0 0 1-2-.55v.06a4.5 4.5 0 0 0 3.6 4.4 4.5 4.5 0 0 1-2 .08 4.51 4.51 0 0 0 4.21 3.14A9.05 9.05 0 0 1 2 18.41 12.81 12.81 0 0 0 9.29 21c8.47 0 13.11-7 13.11-13.07q0-.3 0-.6A9.35 9.35 0 0 0 23 3z'/>
            </svg>

        )
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/',
        icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
            <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                <path d='M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0-2A7.5 7.5 0 0 0 0 7.5v9A7.5 7.5 0 0 0 7.5 24h9A7.5 7.5 0 0 0 24 16.5v-9A7.5 7.5 0 0 0 16.5 0h-9zM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm0-2A7 7 0 1 0 19 12a7 7 0 0 0-7-7zm6.5 1.5A1.5 1.5 0 1 1 17 7a1.5 1.5 0 0 1 1.5-1.5z'/>
            </svg>

        )
    }
];

export default function Footer() {
    return (
        <footer className='py-8'>
            <div className='container max-w-3xl'>
                <div className='md:flex md:items-center md:justify-between'>
                    <div className='flex justify-center space-x-6 md:order-2'>
                        {navigation.map((item) => (
                            <a 
                                key={item.name} 
                                href={item.href}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-muted-foreground hover:text-foreground'
                            >
                                <span className='sr-only'>{item.name}</span>
                                <item.icon aria-hidden='true' className='w-6 h-6' />
                            </a>
                        ))}
                    </div>
                    <div className='mt-8 md:order-1 md:mt-0'>
                        <p className='text-center text-xs leading-5 text-muted-foreground'>
                            &copy; {new Date().getFullYear()}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
