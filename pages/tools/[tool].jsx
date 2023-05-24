import { useRouter } from 'next/router'
import React, { useEffect, useState, Fragment } from 'react'
import db from '../../firebase'
import Image from 'next/image'
import { GoLinkExternal } from "react-icons/go"
import { collection, query, where, getDocs } from "firebase/firestore";

const Tool = () => {

    const router = useRouter()
    const toolSlug = router.query.tool

    const dummyTool = {
        "index": 0,
        "title": "loading",
        "image": "",
        "description": "loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading loading ",
        "pricing": "loading",
        "visit-href": "#",
        "category": [
            "Please",
            "Wait"
        ],
        "slug": "loading",
    }

    const [tool, setTool] = useState(dummyTool)

    useEffect(() => {
        const fetchTool = async () => {
            const q = query(collection(db, "tools"), where("slug", "==", toolSlug));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                setTool(doc.data())
            });
        }
        fetchTool()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toolSlug])

    return (
        <Fragment>
            <section className='pr-10 pb-16 pl-8 sm:px-10 flex flex-wrap justify-between items-start md:px-20'>
                <section className='md:w-[50vw] flex flex-col gap-10'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-4xl px-8 bg-orange-200 py-3 font-bold hover:bg-transparent hover:outline-dashed'>{tool.title}</h1>
                    </div>

                    {tool.image && <div>
                        <Image className='overflow-hidden w-full' alt={tool.title} src={`${!tool.image.includes("https://") ? "https://topai.tools" + tool.image : tool.image}`} width={400} height={400} />
                    </div>}

                    <a href={tool["visit-href"]} target='_blank'>
                        <div className='flex p-2 gap-1 items-center justify-center outline-dashed text-orange-400 hover:text-black'>
                            <p>visit {tool.title}</p>
                            <GoLinkExternal />
                        </div>
                    </a>

                    <div>
                        <p>{tool.description}</p>
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

                <section className='md:w-[30vw] pt-20 md:pt-0'>
                    <h3 className='font-semibold text-3xl'>Featured Tools</h3>
                    <section className='min-h-[40vh] flex items-center justify-center'>
                        <p className='pb-5 text-xl px-5'>Sponsor ailetter by submitting your tool and get featured on top here!</p>
                    </section>
                </section>
            </section>
        </Fragment>
    )
}

export default Tool
