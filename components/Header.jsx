import Link from 'next/link'
import React from 'react'

const Header = () => {
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
            <section className='px-10 py-2 flex items-center flex-wrap lg:flex-nowrap justify-center gap-10'>
                <div className='lg:w-1/4 relative w-full'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className='text-center pt-2 px-2'>Get to know what's happening in AI bubble. <span className='font-semibold'>subscribe to ailetter</span></p>
                    <iframe className='w-full h-40' src="https://ailetter.substack.com/embed" frameBorder="0" scrolling="no"></iframe>
                    <div className='bg-white -translate-y-11 h-8'></div>
                </div>
                <div className='w-full bg-[#F2F2E3] text-center'>
                    <h1 className='font-ita w-full text-3xl md:text-7xl text-center py-8'>Collection of over 2000+ ai tools!</h1>
                    <p className='pb-5 px-5'>Sponsor ailetter to get featured on top here!</p>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Header
