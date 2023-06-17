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

                    <div>
                        <ul className='md:flex hidden gap-6 items-center justify-center'>
                            <Link href={'/promptgallery'} className='hover:underline text-lg hover:underline-offset-2'>PromptGallery</Link>
                            <Link href={'/incomeideas'} className='hover:underline text-lg hover:underline-offset-2'>IncomeIdeas</Link>
                            <a className='hover:underline text-lg hover:underline-offset-2' href="https://ailetter.substack.com/" target='_blank'>NewsLetter</a>
                            <Link href={'/submit'} className='hover:underline text-lg hover:underline-offset-2'>Submit/Sponsor</Link>
                        </ul>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Navbar
