import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import db from '../../firebase'
import ProductsList from '../../components/ProductsList'
import Head from 'next/head';
import CategoryComponent from '../../components/Category';

const slugToCategory = {
    "ai-detection": ["AI Detection",],
    "art": ["Art", "Parenting", "3d"],
    "audio": ["Audio", "Text and Speech", "Audio Editing",],
    "avatar": ["Avatar", "Avatars"],
    "business": ["Business", "E-commerce", "Automation", "Job Search", "Meeting assistant",],
    "social-media": ["Social Media", "Content creation"],
    "chat": ["Chat", "chatbots", "Chatbot", "Customer support",],
    "coaching": ["Coaching",],
    "design": ["Design",],
    "data-analysis": ["Data Analysis",],
    "development": ["Development", "Developer tools", "Automation"],
    "education": ["Education", "Human Resources",],
    "email": ["Email",],
    "finance": ["Finance",],
    "gaming": ["Gaming",],
    "images": ["Images", "Image Generation", "Image Editing"],
    "legal": ["Legal",],
    "marketing": ["Marketing", "Advertising", "Sales"],
    "music": ["Music",],
    "podcasting": ["Podcasting", "Podcasts"],
    "productivity": ["Productivity",],
    "prompt-guides": ["Prompt Guides",],
    "research": ["Research",],
    "seo": ["SEO",],
    "speech": ["Speech", "Text and Speech"],
    "translation": ["Translation",],
    "video": ["Video", "video Generation", "Video Editing"],
    "writing": ["Writing", "Text and Speech"],
    "everyday-life": ["Everyday Life", "Life Assistant", "Fun", "Travel", "no-code", "Startup tools", "Relationships", "Health", "Fitness", "Fashion"],
}

export const getStaticPaths = async () => {
    return {
        paths: Object.keys(slugToCategory).map((category) => `/category/${category}`),
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const categorySlug = context.params.category

    const category = slugToCategory[categorySlug]

    const q = query(collection(db, "tools"), where("category", "array-contains-any", category));

    const querySnapshot = await getDocs(q);
    if (!querySnapshot) {
        return {
            props: { categoryTools: [] }
        }
    }

    let categoryTools = []
    querySnapshot.forEach((doc) => {
        categoryTools = [...categoryTools, { ...doc.data() }]
    });

    return {
        props: { categoryTools: categoryTools }
    }
}

const Category = ({ categoryTools }) => {

    // const [categoryTools, setCategoryTools] = useState([])
    const router = useRouter()
    const categorySlug = router.query.category

    const category = slugToCategory[categorySlug]

    // useEffect(() => {
    //     const fetchCategoryTools = async () => {
    //         const q = query(collection(db, "tools"), where("category", "array-contains-any", category));

    //         const querySnapshot = await getDocs(q);

    //         let categoryTools = []
    //         querySnapshot.forEach((doc) => {
    //             // doc.data() is never undefined for query doc snapshots
    //             // console.log(doc.id, " => ", doc.data());
    //             categoryTools = [...categoryTools, { ...doc.data() }]
    //         });
    //         setCategoryTools(categoryTools)
    //     }
    //     // category && fetchCategoryTools()
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [categorySlug])

    return (
        <Fragment>
            <Head>
                <title>{`${category[0]} AI Tools`}</title>
                <meta name="description" content={`A list of best ${category[0]} tools`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* open graph social meta tag */}
                <meta property="og:title" content={`${category[0]} AI Tools`} />
                <meta property="og:description" content={`${category[0]} AI Tools - Browse latest ai tools to increase your efficiency and productivity`} />
                <meta property="og:url" content={`https://www.ailetter.tech/category/${categorySlug}`} />
                <meta property="og:image" content="https://www.ailetter.tech/images/ailetter.png" />
                <meta property="og:type" content="website" />

                {/* twitter card social meta tag */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`https://www.ailetter.tech/category/${categorySlug}`} />
                <meta name="twitter:title" content={`${category[0]} AI Tools`} />
                <meta name="twitter:description" content={`${category[0]} AI Tools - Browse latest ai tools to increase your efficiency and productivity`} />
                <meta name="twitter:image" content="https://www.ailetter.tech/images/ailetter.png" />
            </Head>

            <CategoryComponent />

            <h1 className='md:pl-28 px-12 pt-8 text-3xl font-semibold'>{categoryTools.length !== 0 && <span>Top</span>} {categoryTools.length} {category[0]} AI Tools</h1>
            {
                categoryTools.length !== 0
                    ? <ProductsList products={categoryTools} />
                    : <h3 className='text-center mx-auto py-10 mb-10 font-bold text-4xl w-2/3 h-[20vh]'>No Tools to show here, check out other categories!</h3>
            }
        </Fragment>
    )
}

export default Category
