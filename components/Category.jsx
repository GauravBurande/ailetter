import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { TbTriangleFilled } from "react-icons/tb"

const Category = () => {

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
            {!promptPage && <section className='flex flex-col'>
                <button onClick={hanndleCategoryFilterDisplay} className='px-10 pt-3 md:hidden mx-auto flex w-fit underline underline-offset-4 items-center justify-center gap-1 text-lg font-semibold hover:text-orange-400'>
                    <p>categories</p>
                    <TbTriangleFilled className={`text-2xl transition-all ${displayCategory && 'rotate-180'}`} />
                </button>
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

export default Category
