import React, { useState } from 'react'
import Link from 'next/link'
import { HiOutlineMenu } from "react-icons/hi"

const Navbar = () => {

    const [displayMobileNav, setDisplayMobileNav] = useState(false)

    const handleMenuClick = () => {
        setDisplayMobileNav(!displayMobileNav)
    }

    return (
        <React.Fragment>
            <section>
                <div className={`flex justify-between ${displayMobileNav && 'bg-orange-400'} items-center py-8 px-10`}>
                    <Link href={"/"}>
                        <div className='flex mr-2 items-center gap-2'>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className='md:w-16 w-8 rounded-full' fetchpriority="high" src="/images/ailetter.jpg" alt="ailetter" />
                            <h1 className='md:text-3xl text-lg font-semibold'>ailetter</h1>
                        </div>
                    </Link>

                    <div>
                        <div className='md:hidden'>
                            <HiOutlineMenu onClick={handleMenuClick} className='text-xl' />
                        </div>
                        <ul className='md:flex text-lg md:text-sm lg:text-lg hidden gap-5 items-center justify-center'>
                            <Link href={'/promptgallery'} className='hover:underline hover:underline-offset-2'>PromptGallery</Link>
                            <Link href={'/incomeideas'} className='hover:underline hover:underline-offset-2'>IncomeIdeas</Link>
                            {/* <a className='hover:underline hover:underline-offset-2' href="https://ailetter.substack.com/" target='_blank'>NewsLetter</a> */}
                            <Link href={'/submit'} className='hover:underline hover:underline-offset-2'>Submit/Sponsor</Link>
                        </ul>
                    </div>
                </div>
                {displayMobileNav && <div className='md:hidden'>
                    <ul className='flex bg-orange-400 text-white pb-8 px-10 flex-col text-lg gap-5 justify-center'>
                        <Link href={'/promptgallery'} className='hover:underline hover:underline-offset-2'>PromptGallery</Link>
                        <Link href={'/incomeideas'} className='hover:underline hover:underline-offset-2'>IncomeIdeas</Link>
                        {/* <a className='hover:underline hover:underline-offset-2' href="https://ailetter.substack.com/" target='_blank'>NewsLetter</a> */}
                        <Link href={'/submit'} className='hover:underline hover:underline-offset-2'>Submit/Sponsor</Link>
                    </ul>
                </div>}
            </section>
        </React.Fragment>
    )
}

export default Navbar
