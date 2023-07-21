// import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import db from '../../firebase'
import toolSlugs from '../../toolSlugs'
import { GoLinkExternal } from "react-icons/go"
import { collection, query, where, getDocs } from "firebase/firestore";
import Head from 'next/head'
import { useRouter } from 'next/router';
// import ProductsList from '../../components/ProductsList'
import Link from 'next/link';

export const getStaticPaths = async () => {

    // const querySnapshot = await getDocs(collection(db, "tools"));

    // let toolSlugs = []
    // querySnapshot.forEach((doc) => {
    //     toolSlugs = [...toolSlugs, `/tools/${doc.data().slug}`]
    // });

    // CHANGED THE WAY I GOT ALL THE SLUGS DUE TO FIREBASE SECURITY RULES AND I DON'T WANT TO IMPLEMENT API FOR JUST GETTING TOOL SLUGS
    // Now just get the slugs from toolSlugs.js file and update that file with new toolSlug when adding new tool.

    return {
        paths: toolSlugs,
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const toolSlug = context.params.tool

    const q = query(collection(db, "tools"), where("slug", "==", toolSlug));

    let tool = {}
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        tool = doc.data()
    });

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
    //     "visit-href": "#",
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

                    <a className='w-full' href={tool["visit-href"]} target='_blank'>
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
                                                        <a href={product["visit-href"]} target='_blank'>
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
