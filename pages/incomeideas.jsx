import Head from 'next/head';
import React, { Fragment } from 'react'

const IncomeIdeas = () => {

    const ideas = [
        {
            "title": "AI-Based Affiliate Sites",
            "description": "Create a blog about an affiliate product. Generate persuasive content and blog posts using AI text tools like Jasper or Copy.ai. Utilize AI to summarize product sales pages and create lists of features, benefits, pros, and cons."
        },
        {
            "title": "Children's Book Author",
            "description": "Use ChatGPT to write stories and generate content for children's books. Use tools like MidJourney or Stable Diffusion to create illustrations. Publish and sell books through platforms like Amazon's KDP in both digital and physical formats."
        },
        {
            "title": "Clean Up Images For People",
            "description": "Offer a service to clean up and restore photos for people using AI-based tools. Remove unwanted items, backgrounds, upscale pixelated images, and even remove watermarks from images."
        },
        {
            "title": "Convert YouTube videos to TikToks",
            "description": "Help YouTubers grow their channel by managing their TikTok account. Use AI tools to repurpose their content for TikTok, saving them time and attracting a new audience. Offer this service to multiple clients."
        },
        {
            "title": "Create Adult Coloring Books",
            "description": "Use Midjourney to create black and white images suitable for coloring books. Compile themed images into a book and publish using print-on-demand platforms like Amazon, Etsy, or your own ecommerce store."
        },
        {
            "title": "Create Niche AI-generated Art T-Shirts",
            "description": "Identify a niche market and generate a variety of designs using tools like Midjourney or InstantArt. Utilize print-on-demand platforms like Printful or Printify to sell customized art t-shirts."
        },
        {
            "title": "Create Slide Decks For Companies",
            "description": "Use tools like Tome or SlidesAI to generate slide decks based on specific topics. Offer slide deck creation services to companies, especially for video sales letters (VSLs) and webinars."
        },
        {
            "title": "Create a 'No Face' YouTube Channel",
            "description": "Select a popular niche on YouTube using tools like vidIQ or TubeBuddy. Use tools like Tome or Canva to create visuals and generate AI-generated audio using text-to-speech. Edit the content together and monetize through AdSense revenue."
        },
        {
            "title": "Manage Advertising Campaigns",
            "description": "Use tools like AdCreative.ai to create high-quality ads for Facebook and offer ad management services to businesses. Write compelling copy, find suitable images, and handle targeting for your clients."
        },
        {
            "title": "Podcast Shownotes Creator",
            "description": "Utilize podcast tools like Deciphr AI or Melville App to automatically listen to podcasts, summarize episodes, and generate show notes. Provide podcasters with professional and accurate show notes."
        },
        {
            "title": "Sell AI Art on Etsy",
            "description": "Create and sell digital prints on Etsy. Use Midjourney or Stable Diffusion to generate images similar to top-selling artwork. Upscale the images using AI image upscaler tools. Write persuasive descriptions with the help of ChatGPT."
        },
        {
            "title": "Sell Copywriting Services",
            "description": "Offer high-converting copywriting services using AI copywriting tools. Target ecommerce stores, info-marketers, or SaaS companies. Leverage AI tools for generating rough drafts and improving existing copy."
        },
        {
            "title": "Sell Social Media Management",
            "description": "Manage social media accounts for companies. Use ChatGPT to generate relevant posts and tweets. Employ tools like Replai or TweetEmote to automate engagement and generate AI-generated responses."
        },
        {
            "title": "Sell Stock Images to Adobe Stock",
            "description": "Generate AI-generated images of commonly searched stock photos using tools like Midjourney or Stable Diffusion. Submit the images to Adobe Stock for sale and earn commissions whenever they are used."
        },
        {
            "title": "Sell Voiceover Impressions on Fiverr",
            "description": "Use Voice.ai or similar tools to modulate your voice and sound like famous personalities. Offer voiceover impressions on platforms like Fiverr, providing clients with unique and entertaining voice recordings."
        },
        {
            "title": "Sell YouTube Thumbnail Creation",
            "description": "Use Midjourney or Canva to generate AI-generated images for YouTube thumbnails. Add text and graphics in Canva. Sell this service on platforms like Fiverr or Upwork to content creators in need of eye-catching thumbnails."
        },
        {
            "title": "Sell Your Best AI Prompts",
            "description": "Sell your best AI prompts through platforms like PromptBase. List your top image generation prompts for sale, attracting customers looking for creative inspiration and generating income from your prompt ideas."
        },
        {
            "title": "YouTube Optimization Specialist",
            "description": "Use tools like CreatorML or VidIQ to analyze YouTube channels and provide optimization suggestions. Offer services as a YouTube optimization specialist, helping creators improve their channels and increase viewership."
        }
    ];

    return (
        <Fragment>
            <Head>
                <title>Income ideas using new ai tools</title>
                <meta name="description" content="Money making ideas by using new ai tools." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <h1 className='px-10 text-3xl font-semibold pt-4'>Making money using ai</h1>
            <p></p>
            <div className='flex items-center justify-center p-10 gap-10 flex-wrap'>
                {ideas.map((idea) => {
                    return (
                        <div key={idea.title} className='bg-orange-200 flex-col gap-8 pr-5 relative flex items-start w-[27rem] min-h-[5rem] p-3 max-w-md'>
                            <h3 className='text-xl font-semibold'>{idea.title}</h3>
                            <p>{idea.description}</p>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default IncomeIdeas
