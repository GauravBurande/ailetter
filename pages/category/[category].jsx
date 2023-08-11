import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
// import { collection, query, where, getDocs } from "firebase/firestore";
// import db from '../../firebase'
import ProductsList from '../../components/ProductsList'
import Head from 'next/head';
import CategoryComponent from '../../components/Category';
import jwt from 'jsonwebtoken';

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

    const categories = slugToCategory[categorySlug]
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
    const privateKey = process.env.FIREBASE_PRIVATE_KEY

    const jwtToken = jwt.sign(
        {
            iss: clientEmail,
            scope: 'https://www.googleapis.com/auth/cloud-platform',
            aud: 'https://www.googleapis.com/oauth2/v4/token',
            iat: parseInt(Date.now() / 1000),
            exp: parseInt(Date.now() / 1000) + 60 * 60, // 60 minutes
        },
        privateKey,
        {
            algorithm: 'RS256',
        }
    );
    // console.log("jwt token", jwtToken)

    // Exchange the JWT token for an access token
    const getAccessToken = async () => {
        try {
            const tokenResponse = await fetch('https://www.googleapis.com/oauth2/v4/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                    assertion: jwtToken,
                }),
            });

            const tokenData = await tokenResponse.json();
            return tokenData.access_token;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

    const projectId = process.env.FIREBASE_PROJECT_ID;
    const accessToken = await getAccessToken();
    // console.log("accessToken: ", accessToken);

    const queryBody = {
        "structuredQuery": {
            "select": {
                "fields": [
                    { fieldPath: "index" },
                    { fieldPath: "title" },
                    { fieldPath: "slug" },
                    { fieldPath: "image" },
                    { fieldPath: "description" },
                    { fieldPath: "pricing" },
                    { fieldPath: "category" },
                    { fieldPath: "visit" },
                ]
            },
            "from": [
                {
                    "collectionId": "tools"
                }
            ],
            "where": {
                "fieldFilter": {
                    "field": {
                        "fieldPath": "category"
                    },
                    "op": "ARRAY_CONTAINS_ANY",
                    "value": {
                        "arrayValue": {
                            "values": categories.map(category => {
                                return {
                                    "stringValue": category
                                };
                            })
                        }
                    }
                }
            }
        }
    }

    let categoryTools = []

    try {
        const response = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents:runQuery`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(queryBody)
        })

        const result = await response.json()

        result.forEach(doc => {
            const fields = doc.document.fields
            const docData = {
                "index": fields.index?.integerValue || 5000,
                "title": fields.title?.stringValue || "",
                "slug": fields.slug?.stringValue || "",
                "image": fields.image?.stringValue || "",
                "description": fields.description?.stringValue || "",
                "pricing": fields.pricing?.stringValue || "",
                "category": fields.category.arrayValue?.values.map((value) => value.stringValue) || [],
                "visit": fields.visit?.stringValue || "",
            }
            categoryTools = [...categoryTools, { ...docData }];
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }

    // const q = query(collection(db, "tools"), where("category", "array-contains-any", category));
    // const querySnapshot = await getDocs(q);

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