import Head from 'next/head'
import React, { Fragment } from 'react'

const Submit = () => {

    const plans = [
        {
            "title": "basic",
            "payment type": "one time",
            "amount": 0,
            "plan offerings": [
                "listed on the latest tools section",
                "it may take time due to queued submission reviews, the estimated waiting time is about 30+ days",
                "no updates available",
            ],
            "button call": "submit",
            "button url": "mailto:ailetter.substack@gmail.com?subject=Submit my tool to ailetter!",
        },
        {
            "title": "get featured",
            "payment type": "one time",
            "amount": 9.99,
            "plan offerings": [
                "listed on the site within 24 hours",
                "requested upadates available",
                "featured on top of the site",
                "visible in the featured section for a week"
            ],
            "button call": "submit now",
            "button url": "mailto:ailetter.substack@gmail.com?subject=Feature my tool!",
        },
        {
            "title": "sponsor",
            "payment type": "one time",
            "amount": 15.99,
            "plan offerings": [
                "listed on the site within 24 hours",
                "requested upadates available",
                "featured on top of the site",
                "visible in the featured section for a month",
                "featured in our weekly newsletter"
            ],
            "button call": "submit now",
            "button url": "mailto:ailetter.substack@gmail.com?subject=I'm sposoring the ailetter!",
        },
    ]

    return (
        <Fragment>
            <Head>
                <title>submit ai tools on ailetter</title>
                <meta name="description" content="Submit a tool, sponsor ailetter and get featured on our site and newlsetter." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className='p-10'>
                <h1 className='text-3xl font-semibold pb-10'>Submit a tool, sponsor ailetter and get featured on our site and newlsetter.</h1>

                <p className='font-semibold text-lg pb-5'>*Requirements</p>
                <div className='flex flex-col gap-1'>
                    <p>Have a nice user interface.</p>
                    <p>Plase have social media tags or open graph tags for your tool.</p>
                    <p>Should be an ai tool 😄</p>
                </div>
            </div>
            <div className='p-10 flex flex-wrap items-center justify-center gap-10'>
                {
                    plans.map((plan) => {
                        return (
                            <div className='p-10 min-w-[20rem] flex flex-col justify-between min-h-[24rem] bg-orange-300' key={plan.title}>
                                <div>
                                    <div className='flex gap-5 items-center justify-between'>
                                        <p className='font-semibold text-2xl'>{plan.title}</p>
                                        <p className='px-2 py-1 text-xs whitespace-nowrap bg-gray-500 text-white'>{plan['payment type']}</p>
                                    </div>
                                    <p className='text-3xl pb-5 font-bold'>${plan.amount}</p>

                                    <div className='pb-8'>
                                        {plan['plan offerings'].map((offer) => {
                                            return (
                                                <p key={offer}>
                                                    ✨  {offer}
                                                </p>
                                            )
                                        })}
                                    </div>
                                </div>
                                <a href={plan['button url']}>
                                    <button className='bg-white w-full px-3 hover:bg-black hover:text-white py-2'>{plan['button call']}</button>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </Fragment>
    )
}

export default Submit
