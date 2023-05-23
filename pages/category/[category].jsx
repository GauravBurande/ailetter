import { useRouter } from 'next/router'
import React, { useEffect, useState, Fragment } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import db from '../../firebase'
import ProductsList from '../../components/ProductsList'

const Category = () => {

    const [categoryTools, setCategoryTools] = useState([])
    const router = useRouter()
    const categorySlug = router.query.category

    const slugToCategory = {
        "social-media": ["Social Media", "Content creation"],
        "ai-detection": ["AI Detection",],
        "art": ["Art", "no-code", "Startup tools", "Parenting", "3d"],
        "audio": ["Audio", "Text and Speech", "Audio Editing",],
        "avatars": ["Avatars",],
        "business": ["Business", "Automation", "Job Search",],
        "chat": ["Chat", "chatbots", "Chatbot", "Customer support",],
        "coaching": ["Coaching",],
        "design": ["Design",],
        "data-analysis": ["Data Analysis",],
        "development": ["Development", "Developer tools",],
        "education": ["Education", "Human Resources",],
        "email": ["Email",],
        "finance": ["Finance",],
        "gaming": ["Gaming",],
        "images": ["Images", "Image Generation", "Image Editing"],
        "legal": ["Legal",],
        "marketing": ["Marketing",],
        "music": ["Music",],
        "podcasting": ["Podcasting",],
        "productivity": ["Productivity",],
        "prompt-guides": ["Prompt Guides",],
        "research": ["Research",],
        "seo": ["SEO",],
        "speech": ["Speech", "Text and Speech"],
        "translation": ["Translation",],
        "video": ["Video", "video Generation"],
        "writing": ["Writing", "Text and Speech"],
        "Everyday-life": ["Travel", "Relationships", "Health", "Fitness", "Fashion"],
    }
    const category = slugToCategory[categorySlug]

    useEffect(() => {
        const fetchCategory = async () => {
            const q = query(collection(db, "tools"), where("category", "array-contains-any", category));

            const querySnapshot = await getDocs(q);
            if (!querySnapshot) {
                console.log("no such document")
            }

            let categoryTools = []
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                categoryTools = [...categoryTools, { ...doc.data() }]
            });
            setCategoryTools(categoryTools)
            console.log("from state variable", categoryTools)
        }
        category && fetchCategory()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categorySlug])

    return (
        <Fragment>
            <h1 className='md:pl-28 px-12 pt-8 text-3xl font-semibold'>{categoryTools.length !== 0 && <span>Top</span>} {categoryTools.length} {category} AI Tools</h1>
            {
                categoryTools.length !== 0
                    ? <ProductsList products={categoryTools} />
                    : <h3 className='text-center mx-auto py-10 mb-10 font-bold text-4xl w-2/3 h-[20vh]'>No Tools to show here, check out other categories!</h3>
            }
        </Fragment>
    )
}

export default Category
