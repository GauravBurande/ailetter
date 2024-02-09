import Head from 'next/head'
import React, { Fragment } from 'react'

const Submit = () => {

    const plans = [
        {
            "title": "basic",
            "payment type": "one time",
            "amount": 10.00,
            "plan offerings": [
                "listed on the latest tools section",
                "it may take time due to queued submission reviews, the estimated waiting time is about 30+ days",
                "no updates available",
            ],
            "button call": "submit now",
            // "button url": "https://mommyai.lemonsqueezy.com/checkout/buy/3933be25-14b7-46d2-9176-6e84e25171f1",
        },
        {
            "title": "get featured",
            "payment type": "one time",
            "amount": 15.00,
            "plan offerings": [
                "listed on the site within 24 hours",
                "requested upadates available",
                "featured on top of the site",
                "visible in the featured section for a week"
            ],
            "button call": "submit now",
            // "button url": "https://mommyai.lemonsqueezy.com/checkout/buy/0c8b11aa-78cc-43af-bc91-6dd3e7c407f4",
        },
        {
            "title": "sponsor",
            "payment type": "one time",
            "amount": 25.00,
            "plan offerings": [
                "listed on the site within 24 hours",
                "requested upadates available",
                "featured on top of the site",
                "visible in the featured section for a month",
            ],
            "button call": "submit now",
            // "button url": "https://mommyai.lemonsqueezy.com/checkout/buy/ebdbdec4-4000-4b27-8ba7-cfcdc6bb4c67",
        },
    ]

    return (
        <Fragment>
            <Head>
                <title>submit ai tools on ailetter</title>
                <meta name="description" content="Submit a tool, sponsor ailetter and get featured on our site and newlsetter." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* open graph social meta tag */}
                <meta property="og:title" content="submit ai tools on ailetter" />
                <meta property="og:description" content="Submit a tool, sponsor ailetter and get featured on our site and newlsetter." />
                <meta property="og:url" content="https://www.ailetter.tech/submit" />
                <meta property="og:image" content="https://www.ailetter.tech/images/ailetter.png" />
                <meta property="og:type" content="website" />

                {/* twitter card social meta tag */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.ailetter.tech/submit" />
                <meta name="twitter:title" content="submit ai tools on ailetter" />
                <meta name="twitter:description" content="Submit a tool, sponsor ailetter and get featured on our site and newlsetter." />
                <meta name="twitter:image" content="https://www.ailetter.tech/images/ailetter.png" />
            </Head>

            <div className='p-10'>
                <h1 className='text-3xl font-semibold pb-10'>Submit a tool, sponsor ailetter and get featured on our site and newsletter.</h1>

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
                                    <button onClick={() => {alert("this project is no longer maintained")}} className='bg-white w-full px-3 hover:bg-black hover:text-white py-2'>{plan['button call']}</button>
                            </div>
                        )
                    })
                }
            </div>
        </Fragment>
    )
}

export default Submit
