import { Fragment } from "react"

const Hero = () => {
    return (
        <Fragment>
            <section className='px-10 py-2 flex items-center flex-wrap lg:flex-nowrap justify-center gap-10'>
                <div className='lg:w-1/4 w-full'>
                    <p className='text-center pt-2 px-2'>Get to know what&apos;s happening in AI bubble. <span className='font-semibold'>subscribe to ailetter</span></p>
                    <iframe className='w-full h-40' src="https://ailetter.substack.com/embed" frameBorder="0" scrolling="no"></iframe>
                    <div className='bg-white -translate-y-11 h-8'></div>
                </div>
                <div className='w-full -translate-y-10 bg-[#F2F2E3] hover:bg-transparent text-center'>
                    <h2 className='w-full text-3xl font-semibold md:text-7xl text-center py-8'>Collection of over 2000+ ai tools!</h2>
                    <p className='pb-5 px-5'>Sponsor ailetter by submitting your tool and get featured on top here!</p>
                </div>
            </section>
        </Fragment>
    )
}

export default Hero
