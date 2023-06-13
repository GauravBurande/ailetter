import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BiFilter } from "react-icons/bi"

const Header = () => {

    const slugToCategory = {
        "everyday-life": "Everyday Life",
        "ai-detection": "AI Detection",
        "art": "Art",
        "audio": "Audio",
        "avatar": "Avatar",
        "business": "Business",
        "social-media": "Social Media",
        "chat": "Chat",
        "coaching": "Coaching",
        "design": "Design",
        "data-analysis": "Data Analysis",
        "development": "Development",
        "education": "Education",
        "email": "Email",
        "finance": "Finance",
        "gaming": "Gaming",
        "images": "Images",
        "legal": "Legal",
        "marketing": "Marketing",
        "music": "Music",
        "podcasting": "Podcasting",
        "productivity": "Productivity",
        "prompt-guides": "Prompt Guides",
        "research": "Research",
        "seo": "SEO",
        "speech": "Speech",
        "translation": "Translation",
        "video": "Video",
        "writing": "Writing",
    }

    const [displayCategory, setDisplayCategory] = useState(false);

    const hanndleCategoryFilterDisplay = () => {
        setDisplayCategory(!displayCategory);
    }

    const router = useRouter()
    const pathName = router.pathname
    const promptPage = pathName.includes('promptgallery')

    return (
        <React.Fragment>
            <section className='px-10 py-2 flex items-center flex-wrap lg:flex-nowrap justify-center gap-10'>
                <div className='lg:w-1/4 relative w-full'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className='text-center pt-2 px-2'>Get to know what's happening in AI bubble. <span className='font-semibold'>subscribe to ailetter</span></p>
                    <iframe className='w-full h-40' src="https://ailetter.substack.com/embed" frameBorder="0" scrolling="no"></iframe>
                    <div className='bg-white -translate-y-11 h-8'></div>
                </div>
                <div className='w-full bg-[#F2F2E3] hover:bg-transparent text-center'>
                    <h2 className='w-full text-3xl font-semibold md:text-7xl text-center py-8'>Collection of over 2000+ ai tools!</h2>
                    <p className='pb-5 px-5'>Sponsor ailetter by submitting your tool and get featured on top here!</p>
                </div>
            </section>

            {!promptPage && <section className='flex flex-col'>
                <button onClick={hanndleCategoryFilterDisplay} className='px-10 pt-3 md:hidden mx-auto flex w-fit underline underline-offset-4 text-lg font-semibold hover:text-orange-400'><BiFilter className='text-2xl' /> <p>categories</p></button>
                <div className={`py-2 ${displayCategory && "flex"} ${!displayCategory && "hidden"} ${!displayCategory && "-translate-y-11"} md:flex transition-all md:translate-y-0 flex-wrap space-y-4 items-center text-center justify-center`}>
                    {Object.keys(slugToCategory).map((ObjectKey) => {
                        return (
                            <Link key={ObjectKey} href={`/category/${ObjectKey}`}>
                                <span className='mx-2 whitespace-nowrap hover:bg-orange-400 hover:text-white px-2 py-1 outline-dashed'>{slugToCategory[ObjectKey]}</span>
                            </Link>
                        )
                    })}
                </div>
            </section>}
        </React.Fragment>
    )
}

export default Header
