import React, { Fragment } from 'react'
import PromptList from '../../components/PromptList';
import Head from 'next/head';

const Writing = () => {

    const writingPrompts = [
        "I'm looking for a [type of blog post] that will engage my [ideal customer persona] with a unique and compelling perspective on [subject] and persuade them to take [desired action] on my [website/product].",
        "I need a [type of blog post] that will provide valuable and relevant information to my [ideal customer persona] and persuade them to take [desired action] on my [website/product].",
        "I'm looking for a [type of blog post] that will educate my [ideal customer persona] on a specific [topic] and persuade them to take [desired action] on my [website/product].",
        "I need a [type of blog post] that will speak directly to the needs and pain points of my [ideal customer persona] and persuade them to take [desired action] with a sense of urgency and strong offer.",
        "I'm looking for a [type of blog post] that will showcase the value and benefits of my [product/service] to [ideal customer persona] and convince them to take [desired action] with social proof and credibility-building elements.",
        "I need a [type of blog post] that will tell a story about my [product/service] and how it has helped [ideal customer persona] achieve their [goal] in a relatable and engaging way.",
        "I'm looking for a [type of blog post] that will draw in my [ideal customer persona] with a strong headline and hook, and then convince them to take [desired action] with persuasive language and compelling evidence.",
        "I need a [type of blog post] that will address the pain points and needs of my [ideal customer persona] and show them how my [product/service] is the solution they've been searching for.",
        "I'm looking for a [type of blog post] that will clearly explain the features and benefits of my [product/service] to [ideal customer persona] and persuade them to make a purchase with a strong call-to-action.",
        "I need a [type of blog post] that will overcome objections and concerns my [ideal customer persona] may have about my [product/service] and convince them to take [desired action].",
        "I'm looking for a [type of blog post] that will showcase the unique features and benefits of my [product/service] to [ideal customer persona] and persuade them to make a purchase.",
        "I need a [type of blog post] that will make my [ideal customer persona] feel [emotion] about my [product/service] and persuade them to take [desired action] with a sense of urgency.",
        "I'm looking for a [type of blog post] that will establish trust and credibility with my [ideal customer persona] by highlighting the successes and testimonials of previous customers who have used my [product/service].",
        "I need a [type of blog post] that will convince my [ideal customer persona] to purchase my [product/service] by highlighting its unique benefits and addressing any potential objections.",
        "Generate a month-long content calendar targeting specific keywords.",
        "Make me a month-long calendar for the following keywords [Enter Keywords here]. Add [number of articles] articles each week, and use persuasive SEO-friendly titles for each article.",
        "Generate Blog Post Ideas",
        "Create a list of at least 10 blog post ideas on the following topics: [Enter topics separated by commas]. Suggest SEO-Friendly title for each post, and use an emotional and persuasive tone in post titles.",
        "Generate SEO title and meta description for a blog post",
        "Suggest at least 5 SEO-friendly titles and meta descriptions for the following blog post [Enter your blog post text here]. Use a persuasive and intriguing tone.",
        "Suggest tags for a blog post",
        "Suggest at least 5 tags for the following blog post [Enter your blog post text here].",
        "Generate related long-tail keywords for a blog post",
        "I want you to generate a list of long-tail keywords that are related to the following blog post [Enter blog post text here].",
        "Create an article outline",
        "Write an article outline for the following topic [Enter topic or blog post title here].",
        "Write an article on a specific topic",
        "Write an article on the following topic [Enter topic here]. The article should be at least [number of words] words in length. Use a persuasive tone and pretend to be an expert on the topic.",
        "Outrank a competitor for a specific keyword",
        "Write an article based on the topics covered in the following article [Enter competitor URL here]. Make the article more comprehensive than the URL provided by adding details that the source URL has missed or didn’t cover. Answer the most commonly asked questions about the topic at the end of the article.",
        "Write a motivational blog post",
        "I want you to write a motivational blog post about overcoming [fear/failure/challenge goes here].",
        "Generate call-to-action ideas",
        "I want you to come up with 5 effective call-to-action button ideas based on the contents of the following URL [Your website or landing page URL goes here].",
        "Generate a pros and cons outline for a topic",
        "Write down an essay on the pros and cons of [Your topic goes here].",
        "Write questions for an interview blog post",
        "Write interview questions for a blog post with [Guest Name] who is an expert in [Guest profession or area of expertise].",
        "Proofread a text and optimize it for the focus keyword",
        "I want you to act as SEO editor and copywriter. I need you to proofread and analyze the following text and optimize it for the focus keyword. I also need you to correct any grammar mistakes you find in the article. Ask me to provide you with the article text and focus keyword.",
        "Reuse a blog post for social media content",
        "I want you to act as a topic authority and social media influencer. I will provide you with the text or URL of an article. You need to summarize it and create content for social media platforms. Ask me to provide you with the text or URL of the article.",
        "Generate a list of tools to mention in a blog post",
        "Create a list of the most popular tools used by the [Field of Interest] professionals with the pros and cons of each tool.",
        "Write a conclusion for a blog post",
        "I want you to pretend to be a topic expert, and write a persuasive conclusion for the following blog post. [Your blog post text goes here].",
        "Come up with best practices for using something",
        "Pretend to be a topic expert and write down an essay on the best practices to follow when using [mention the tool or topic here].",
        "Write a comparison blog post",
        "I want you to pretend to be a topic expert and compare [Item 1] vs [Item 2] with pros and cons. I need you to show that [item 1] is better than [item 2] and persuade the reader to have a positive feeling about [item 1].",
        "Build reader personas to learn more about a target audience",
        "Build a reader persona for a blog post titled '[Your blog post title goes here]'.",
        "Polish your content to look more creative",
        "Analyze and improve the following content to make it more creative. Use an [Select tone style] tone and write in a casual and conversational style. '[Your content goes here]'",
        "Rewrite the following list in JavaScript format and remove any repeated array elements: ['item1', 'item2', 'item1', 'item3', 'item2']"
    ]

    return (
        <Fragment>
            <Head>
                <title>Best writing prompts for blogs</title>
                <meta name="description" content="A list of top blog writing prompts for businesses" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <h1 className='px-10 text-3xl font-semibold pt-4'>ChatGPT prompts for blog writing</h1>
            <PromptList list={writingPrompts} />
        </Fragment>
    )
}

export default Writing
