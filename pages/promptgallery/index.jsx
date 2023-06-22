import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'

const PromptGallery = () => {

    const promptCategories = [
        {
            "category": "Email Marketing",
            "description": "Get good results with email marketing. Try these chatGPT prompts and get better results.",
            "image": "/images/email_marketing.jpg",
            "pageLink": "/promptgallery/email-marketing"
        },
        {
            "category": "Copywriting",
            "description": "Get good with your copy. Try these chatGPT prompts and get copy for mostly everything.",
            "image": "/images/copywriting.jpg",
            "pageLink": "/promptgallery/copywriting"
        },
        {
            "category": "Marketing",
            "description": "Write a marketing campaign with ChatGPT. Try these prompts and get better results.",
            "image": "/images/marketing.jpg",
            "pageLink": "/promptgallery/marketing"
        },
        {
            "category": "SEO",
            "description": "Do keyword research, on-page SEO, & off-page SEO. Try these chatGPT prompts and get better results.",
            "image": "/images/seo.jpg",
            "pageLink": "/promptgallery/seo"
        },
        {
            "category": "Writing",
            "description": "Write blog posts with ChatGPT. Try these prompts and get better results.",
            "image": "/images/writing.jpg",
            "pageLink": "/promptgallery/writing"
        },
    ]

    return (
        <Fragment>
            <Head>
                <title>Best directory of ChatGPT prompts</title>
                <meta name="description" content="A list of top 1000+ prompts to use for businesses" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* open graph social meta tag */}
                <meta property="og:title" content="Best directory of ChatGPT prompts" />
                <meta property="og:description" content="A list of top 1000+ prompts to use for businesses" />
                <meta property="og:url" content="https://www.ailetter.tech/promptgallery" />
                <meta property="og:image" content="https://www.ailetter.tech/images/ailetter.png" />
                <meta property="og:type" content="website" />

                {/* twitter card social meta tag */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.ailetter.tech/promptgallery" />
                <meta name="twitter:title" content="Best directory of ChatGPT prompts" />
                <meta name="twitter:description" content="A list of top 1000+ prompts to use for businesses" />
                <meta name="twitter:image" content="https://www.ailetter.tech/images/ailetter.png" />
            </Head>

            <h1 className='text-3xl font-semibold p-10 text-center'>1000+ ChatGPT Prompts</h1>
            <section className='p-10 flex flex-wrap justify-center gap-10'>
                {promptCategories.map((category) => {
                    return (
                        <div key={category.category}>
                            <Link className='flex h-full items-center justify-center' href={category.pageLink}>
                                <div className='relative w-44 h-36'>
                                    <Image className='absolute object-center object-cover h-full w-full overflow-hidden' src={category.image} alt={category.category} height={100} width={1000} />
                                </div>
                                <div className='bg-orange-200 flex flex-col items-start justify-center pl-3 gap-3 w-full h-full'>
                                    <h2 className='md:text-xl inline-block text-lg hover:underline font-semibold'>{category.category}</h2>
                                    <p className='max-w-xs leading-none md:leading-normal text-sm'>{category.description}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </section>
        </Fragment>
    )
}

export default PromptGallery
