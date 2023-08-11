// import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
// import db from '../../firebase'
// import toolSlugs from '../../toolSlugs'
import { GoLinkExternal } from "react-icons/go"
// import { collection, query, where, getDocs } from "firebase/firestore";
import Head from 'next/head'
import { useRouter } from 'next/router';
import Link from 'next/link';
import jwt from 'jsonwebtoken';

export const getStaticPaths = async () => {
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

    // const querySnapshot = await getDocs(collection(db, "tools"));

    let toolSlugs = []
    // querySnapshot.forEach((doc) => {
    //     toolSlugs = [...toolSlugs, `/tools/${doc.data().slug}`]
    // });

    const queryBody = {
        "structuredQuery": {
            "select": {
                "fields": [
                    { fieldPath: "slug" },
                ]
            },
            "from": [
                { "collectionId": "tools" }
            ],
        }
    }

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
            toolSlugs = [...toolSlugs, `/tools/${fields.slug?.stringValue || ""}`]
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return {
        paths: toolSlugs,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
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

    const toolSlug = context.params.tool

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
                { "collectionId": "tools" }
            ],
            "where": {
                "fieldFilter": {
                    "field": { "fieldPath": "slug" },
                    "op": "EQUAL",
                    "value": { "stringValue": toolSlug }
                }
            },
            "limit": 1 // You can remove this if you expect multiple matches or want to retrieve more than one document
        }
    }

    let tool = {}

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
            tool = {
                "index": fields.index?.integerValue || 5000,
                "title": fields.title?.stringValue || "",
                "slug": fields.slug?.stringValue || "",
                "image": fields.image?.stringValue || "",
                "description": fields.description?.stringValue || "",
                "pricing": fields.pricing?.stringValue || "",
                "category": fields.category.arrayValue?.values.map((value) => value.stringValue) || [],
                "visit": fields.visit?.stringValue || "",
            }
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }

    // const q = query(collection(db, "tools"), where("slug", "==", toolSlug));

    return {
        props: { tool: tool }
    }
}

const Tool = ({ tool, featuredTools }) => {

    const router = useRouter()
    const toolSlug = router.query.tool

    // const tool = {
    //     "index": 0,
    //     "title": "loading",
    //     "image": "",
    //     "description": "loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading ",
    //     "pricing": "loading",
    //     "visit": "#",
    //     "category": [
    //         "Please",
    //         "Wait"
    //     ],
    //     "slug": "loading",
    // }

    // const [tool, setTool] = useState(dummyTool)

    // useEffect(() => {
    //     const fetchTool = async () => {
    //         const q = query(collection(db, "tools"), where("slug", "==", toolSlug));

    //         const querySnapshot = await getDocs(q);
    //         querySnapshot.forEach((doc) => {
    //             // doc.data() is never undefined for query doc snapshots
    //             // console.log(doc.id, " => ", doc.data());
    //             setTool(doc.data())
    //         });
    //     }
    //     fetchTool()
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [toolSlug])

    return (
        <Fragment>
            <Head>
                <title>{`${tool.title} - ${tool.category[0]} ai tool`}</title>
                <meta name="description" content={tool.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* open graph social meta tag */}
                <meta property="og:title" content={`${tool.title} - ${tool.category[0]} ai tool`} />
                <meta property="og:description" content={tool.description} />
                <meta property="og:url" content={`https://www.ailetter.tech/tools/${toolSlug}`} />
                <meta property="og:image" content={`${!tool.image.includes("https://") ? "https://topai.tools" + tool.image : tool.image}`} />
                <meta property="og:type" content="website" />

                {/* twitter card social meta tag */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`https://www.ailetter.tech/tools/${toolSlug}`} />
                <meta name="twitter:title" content={`${tool.title} - ${tool.category[0]} ai tool`} />
                <meta name="twitter:description" content={tool.description} />
                <meta name="twitter:image" content={`${!tool.image.includes("https://") ? "https://topai.tools" + tool.image : tool.image}`} />
            </Head>

            <section className='pr-10 pb-16 pl-8 sm:px-10 flex flex-wrap justify-between items-start md:px-20'>
                <section className='xl:w-[50vw] lg:w-[40vw] flex flex-col items-center justify-center gap-10'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-4xl px-8 bg-orange-200 py-3 font-bold hover:bg-transparent hover:outline-dashed'>{tool.title}</h1>
                    </div>

                    {tool.image && <div className='outline-double w-11/12 outline-8'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className='overflow-hidden w-full' alt={tool.title} src={`${!tool.image.includes("https://") ? "https://topai.tools" + tool.image : tool.image}`} width={400} height={400}
                        />
                    </div>}

                    <a className='w-full' href={tool.visit} target='_blank'>
                        <div className='flex p-2 gap-1 mx-auto w-11/12 items-center justify-center outline-dashed text-orange-400 hover:text-black'>
                            <p>visit {tool.title}</p>
                            <GoLinkExternal />
                        </div>
                    </a>

                    <div className='w-11/12'>
                        <p className='outline-dashed p-3 hover:text-orange-900'>{tool.description}</p>
                    </div>

                    <div>
                        <p>Pricing: <span className='bg-orange-200 hover:bg-gray-100 px-3 mb-1 inline-block'>{tool.pricing}</span></p>
                        <div>tags: {tool.category.map((tag) => {
                            return (
                                <div className='inline' key={tag}>
                                    <div className='inline mr-2 px-3 whitespace-nowrap bg-orange-200 hover:bg-gray-100'>
                                        {tag}
                                    </div>
                                </div>
                            )
                        })}</div>
                    </div>
                </section>

                <section className='lg:w-[37vw] w-full pt-14 xl:pt-0'>
                    {featuredTools.length !== 0 && <h3 className='font-semibold pb-10 text-3xl'>Try these tools</h3>}
                    <section className='min-h-[40vh] w-full flex items-center justify-center'>
                        {
                            featuredTools.length !== 0
                                ? <div className='w-full flex flex-col gap-10'>
                                    {featuredTools.map((product) => {
                                        return (
                                            <section className='w-full outline-double outline-8 hover:outline-orange-400' key={product.title}>
                                                <div className='flex flex-col sm:flex-row w-full'>
                                                    <div className='lg:w-4/5 h-40 md:h-[9.3rem] relative'>
                                                        <Link href={`/tools/${product.slug}`}>
                                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                                            <img className='absolute object-left object-cover h-full w-full overflow-hidden' alt={product.title} width={600} height={400} src={`${!product.image.includes("https://") ? "https://topai.tools" + product.image : product.image}`} />
                                                        </Link>
                                                    </div>
                                                    <div className='text-start relative w-full pl-3 py-2 text-sm flex justify-center flex-col bg-orange-200 hover:bg-transparent'>
                                                        <a href={product.visit} target='_blank'>
                                                            <div className='absolute hover:text-orange-500 flex p-2 items-center justify-center -top-1 right-0'>
                                                                {/* <p>visit</p> */}
                                                                <GoLinkExternal />
                                                            </div>
                                                        </a>
                                                        <div>
                                                            <Link href={`/tools/${product.slug}`}>
                                                                <h4 className='md:text-xl inline-block text-lg hover:underline font-semibold'>{product.title}</h4>
                                                            </Link>
                                                        </div>
                                                        <div className='w-full pt-2'>
                                                            <Link href={`/tools/${product.slug}`}>
                                                                <p className='mb-3 pr-1 w-full line-clamp-3 leading-none'>{product.description}</p>
                                                            </Link>
                                                            <p>Pricing: <span className='hover:bg-orange-200 bg-gray-100 px-1 mb-1 inline-block'>{product.pricing}</span></p>
                                                            <div>tags: {product.category.map((tag) => {
                                                                return (
                                                                    <div className='inline' key={tag}>
                                                                        <div className='inline mr-1 px-1 hover:bg-orange-200 bg-gray-100'>
                                                                            {tag}
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        )
                                    })}
                                </div>
                                : <p className='pb-5 text-xl px-5'>Sponsor ailetter by submitting your tool and get featured on top here!</p>
                        }
                    </section>
                </section>
            </section>
        </Fragment>
    )
}

export default Tool
