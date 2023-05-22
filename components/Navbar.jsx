import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <React.Fragment>
            <section>
                <div className='flex justify-between items-center py-8 px-10'>
                    <Link href={"/"}>
                        <div className='flex items-center gap-2'>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className='md:w-16 w-8 rounded-full' fetchpriority="high" src="/images/ailetter.jpg" alt="ailetter" />
                            <h1 className='md:text-3xl text-lg font-semibold'>ailetter</h1>
                        </div>
                    </Link>

                    {/* TODO: A menu here */}
                    {/* <div className='fixed right-16'>
                        <button className='bg-gray-800 text-sm hover:bg-transparent hover:outline-dashed hover:text-orange-500 text-white p-3'>submit a tool</button>
                    </div> */}
                </div>
            </section>
        </React.Fragment>
    )
}

export default Navbar
