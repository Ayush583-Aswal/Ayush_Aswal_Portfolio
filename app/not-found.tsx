import Link from 'next/link';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export default function NotFound(){
    return (
        <section className='pb-24 pt-40'>
            <div className='min-h-full px-4 sm:px-6 sm:py-24 md:grid md:place-items-center'>
                <div className="mx-auto max-w-max">
                    <main className="sm:flex">
                        <p className="text-4xl font-bold tracking-tight text-muted-foreground">
                            404
                        </p>
                        <div className="sm:ml-6">
                            <div className='sm:border-l sm-border-gray-200 sm:pl-6'>
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                    Page not found
                                </h1>
                                <p className='mt-1 text-base text-muted-foreground'>
                                    Please check the URL in the address bar and try again.
                                </p>
                            </div>
                            <div className='mt-10 flex space-x-3 sm:border-1 sm:border-transparent'>
                                <Link href='/'>
                                    <a className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-pink-600 border border-transparent rounded-md shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'>
                                        <ArrowLeftIcon className='w-5 h-5 mr-2' />
                                        Go back home
                                    </a>
                                </Link>
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        </section>
    )
}