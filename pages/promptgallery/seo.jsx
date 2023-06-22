import React, { Fragment } from 'react'
import PromptList from '../../components/PromptList';
import Head from 'next/head';

const Seo = () => {

    const seoPrompts = [
        "Generate a list of related keywords for [topic]",
        "Identify long-tail keywords for [topic] content optimization",
        "Find top-performing keywords for [topic]",
        "Create meta descriptions and title tags for [topic]",
        "Find opportunities for internal linking related to [topic]",
        "Generate ideas for blog posts and article topics on [topic]",
        "Research industry-specific terminology for use in [topic] content",
        "Find authoritative websites to acquire backlinks for [topic] content",
        "Generate a list of LSI keywords for [topic]",
        "Create an XML sitemap example related to [topic]",
        "Research the best meta tags for [topic]",
        "Find keywords with low competition for [topic]",
        "Create a list of synonyms for [topic] keywords",
        "Research the best internal linking structure for [topic] content",
        "Generate a list of questions people ask about [topic]",
        "Create a list of the best alt tags for images related to [topic]",
        "Create a list of related subtopics for [topic]",
        "Find the best time to publish content related to [topic]",
        "Research the best external linking strategies for [topic]",
        "Find the most popular tools used for [topic] SEO",
        "Create a list of potential influencers for [topic]",
        "Research the best schema markup for [topic]",
        "Find the best header tags for [topic] content",
        "Create a list of potential link-building opportunities for [topic]",
        "Research the best anchor text for [topic] backlinks",
        "Find the best keywords for [topic] PPC campaigns",
        "Create a list of potential guest blogging opportunities for [topic]",
        "Research the best local SEO strategies for [topic]",
        "Find the best keywords for [topic] voice search optimization",
        "Research the best analytics tools for [topic] website performance",
        "List the best keywords for [topic] featured snippets",
        "Create a list of potential partnerships for [topic]",
        "Research the best tactics for [topic] mobile optimization",
        "Find the best keywords for [topic] video optimization",
        "Research the best tactics for [topic] e-commerce optimization. Provide keyword clusters.",
        "Find the best keywords for [topic]",
        "Create a list of potential affiliate marketing opportunities for [topic]",
        "What are the best affiliate marketing websites for [topic]",
        "What are the best tactics for [topic] international SEO",
        "Find the best keywords for [topic] AMP optimization",
        "Create a list of potential podcast or podcast guest opportunities for [topic]",
        "Research the best tactics for [topic] Google My Business optimization",
        "Find the best keywords for [topic] social media optimization",
        "Find popular content topics related to [topic]",
        "Research the best SEO tactics for [topic] and provide actionable steps",
        "Create a list of potential video series or webinar ideas related to [topic]",
        "Research competitor strategies related to [topic]",
        "Find canonical tag examples related to [topic]",
        "Create an example keyword list targeting multiple geographic locations for [topic]",
        "Generate keyword ideas targeting different stages of the customer purchase funnel for [topic]",
        "Identify industry hashtags related to [topic]",
        "Give me 10 SEO-optimized titles for a blog post about X.",
        "Write an SEO-optimized Meta Description for this blog post.",
        "What are the most popular phrases people use to search for (keyword) on Google?",
        "Write a creative and SEO-optimized blog post describing the benefits of (keyword).",
        "Create a listicle of the top 10 most innovative applications of (keyword).",
        "Design an SEO-optimized explainer on why businesses need to incorporate (keyword) into their strategies today.",
        "Produce an SEO-friendly guide on how to use (keyword) in marketing campaigns.",
        "Write an email to ask (name) at (website) if I can write a guest post for them about (subject).",
        "Find 10 ways businesses can leverage (keyword) to increase revenue.",
        "Design an SEO-friendly article exploring the potential impacts of (keyword) on traditional business models.",
        "Create an SEO-driven content strategy outlining how businesses can make strategic use of (keyword).",
        "Develop an FAQ page optimized for (keyword) searches that also contains detailed content about its underlying concepts and applications in business strategies today.",
        "Draft a comprehensive checklist detailing what is necessary when creating search-engine-optimized content.",
        "What are the most important aspects of SEO that I need to focus on?",
        "How can I get my site to rank higher in search engine results?",
        "Are there any new tactics or strategies to increase organic traffic?",
        "What is the best keyword research tool for SEO?",
        "Is it possible to optimize content for more than one keyword phrase?",
        "How can I track my SEO performance and success metrics?",
        "How does link building help improve my website’s visibility in search results?",
        "Should I use a paid or free tool for link building?",
        "What are the benefits of using long-tail keywords in SEO?",
        "What specific technical elements must be implemented for SEO optimization success?",
        "Is it worth investing in pay-per-click campaigns for better visibility with search engines like Google and Bing?",
        "How should I approach optimizing my website for voice search queries?",
        "What is the best way to optimize meta tags, titles, and descriptions for maximum impact on SEO rankings?",
        "Should I consider using Accelerated Mobile Pages (AMP) as an SEO strategy?",
        "What mistakes should I avoid when updating pages of my website’s content with SEO optimization in mind?",
        "How to keep track of competitors’ keywords and backlinks to stay ahead of them in SERPs (Search Engine Results Pages).",
        "What are some steps I can take to optimize mobile UX for better organic rankings?",
        "What local SEO techniques will help me target users near my business location more effectively?",
        "How often should I update and add new content if I want sustained high rankings on search engines?"
    ];

    const onPageSeoPrompts = [
        "I'm looking for ways to optimize my website's title tags and meta descriptions for on-page SEO for my website about '{topic}'.",
        "I'm looking for ways to improve my website's load time and page speed for on-page SEO for my website about '{topic}'.",
        "I'm looking for ways to create and optimize my website's content for on-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use header tags and structure my website's content for on-page SEO for my website about '{topic}'.",
        "I'm looking for ways to optimize my website's images and videos for on-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use internal linking for on-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use alt tags for images for on-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use schema markup for on-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use keyword research and targeting for on-page SEO for my website about '{topic}'.",
        "I'm looking for ways to improve my website's on-page SEO through the use of structured data for '{topic}'.",
        "I'm looking for ways to improve my website's accessibility for on-page SEO for my website about '{topic}'",
        "I'm looking for ways to use social media tags for on-page SEO for my website about '{topic}'",
        "I'm looking for ways to improve my website's mobile optimization for on-page SEO for my website about '{topic}'",
        "I'm looking for ways to use redirects and 404 error pages for on-page SEO for my website about '{topic}'",
        "I'm looking for ways to use analytics and tracking for on-page SEO for my website about '{topic}'",
        "I'm looking for ways to use structured data markup for on-page SEO for my website about '{topic}'",
        "I'm looking for ways to use canonical tags for on-page SEO for my website about '{topic}'",
        "I'm looking for ways to improve my website's URL structure for on-page SEO for my website about '{topic}'",
        "I'm looking for ways to use rich snippets for on-page SEO for my website about '{topic}'",
        "I'm looking for ways to improve my website's on-page SEO by creating a sitemap for '{topic}'",
        "I'm looking for ways to improve my website's on-page SEO by optimizing my website's HTML code for '{topic}'",
        "I'm looking for ways to use meta robots tags for on-page SEO for my website about '{topic}'",
        "I'm looking for ways to improve my website's on-page SEO by creating a robots.txt file for '{topic}'",
        "I'm looking for ways to optimize my website's on-page SEO by using schema.org for '{topic}'",
        "I'm looking for ways to improve my website's on-page SEO by using JSON-LD for '{topic}'",
        "I'm looking for ways to use breadcrumb navigation for on-page SEO for my website about '{topic}'",
        "I'm looking for ways to use rich media for on-page SEO for my website about '{topic}'",
        "I'm looking for ways to use multimedia for on-page SEO for my website about '{topic}'",
        "I'm looking for ways to improve my website's on-page SEO by using internal linking and anchor texts for '{topic}'",
        "I'm looking for ways to improve my website's on-page SEO by optimizing my website's XML sitemap for '{topic}'"
    ];

    const offPageSeoPrompts = [
        "I'm looking for ways to improve my website's off-page SEO through link building for '{topic}'.",
        "I'm looking for ways to increase my website's visibility on social media for off-page SEO for '{topic}'.",
        "I'm looking for ways to optimize my website for local SEO to improve off-page SEO for '{topic}'.",
        "I'm looking for ways to use guest blogging to improve my website's off-page SEO for '{topic}'.",
        "I'm looking for ways to use influencer marketing to boost off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to leverage the power of social signals for off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use broken link building for off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to improve my website's off-page SEO through the use of online directories and citations for '{topic}'.",
        "I'm looking for ways to use press releases to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use social bookmarking to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use Q&A platforms to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use link reclamation to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use forum and community participation to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use competitor backlink analysis to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use brand mentions to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to improve my website's off-page SEO by creating high-quality infographics for '{topic}'.",
        "I'm looking for ways to use schema markup to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use online press releases to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use online directories and citations to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use social media to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use social media ads to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use web 2.0 properties to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use podcast and video submissions to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use email marketing to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use document sharing sites to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use mobile apps to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use Classifieds submissions to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use bookmarking and tagging to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use link exchange and link buying to improve off-page SEO for my website about '{topic}'.",
        "I'm looking for ways to use public relations to improve off-page SEO for my website about '{topic}'."
    ];

    return (
        <Fragment>
            <Head>
                <title>Best seo prompts</title>
                <meta name="description" content="A list of top seo prompts for businesses" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* open graph social meta tag */}
                <meta property="og:title" content="Best seo prompts" />
                <meta property="og:description" content="A list of top seo prompts for businesses" />
                <meta property="og:url" content="https://www.ailetter.tech/promptgallery/seo" />
                <meta property="og:image" content="https://www.ailetter.tech/images/seo.jpg" />
                <meta property="og:type" content="website" />

                {/* twitter card social meta tag */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.ailetter.tech/promptgallery/seo" />
                <meta name="twitter:title" content="Best seo prompts" />
                <meta name="twitter:description" content="A list of top seo prompts for businesses" />
                <meta name="twitter:image" content="https://www.ailetter.tech/images/seo.jpg" />
            </Head>

            <h1 className='px-10 text-3xl font-semibold pt-4'>ChatGPT prompts for SEO</h1>
            <PromptList list={seoPrompts} />
            <h2 className='px-10 text-3xl font-semibold pt-4'>ChatGPT prompts for on-page SEO</h2>
            <PromptList list={onPageSeoPrompts} />
            <h2 className='px-10 text-3xl font-semibold pt-4'>ChatGPT prompts for off-page SEO</h2>
            <PromptList list={offPageSeoPrompts} />
        </Fragment>
    )
}

export default Seo
