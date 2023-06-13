import React, { Fragment } from 'react'
import PromptList from '../../components/PromptList';

const Marketing = () => {

    const marketingPrompts = [
        "Please write a marketing campaign outline that addresses the Sunk Cost Fallacy when presenting our [product/service] to [ideal customer persona]. Consider how to frame the value of our offering in terms of future benefits, rather than past investments, and how to overcome any resistance to change or decision-making biases.",
        "Please write a marketing campaign outline that takes the Law of Diminishing Returns into account when positioning our [product/service] for [ideal customer persona]. Consider how to optimize the value we offer for the cost, and how to communicate this value effectively to the target audience.",
        "Please write a marketing campaign outline that leverages the Pareto Principle to identify the most important [product/service features] for [ideal customer persona] and focuses on maximizing the impact of these features. Consider how to prioritize the remaining [20%/80%] of features in a way that adds value to the customer experience.",
        "Please write a marketing campaign outline that takes the Butterfly Effect into account when targeting [ideal customer persona] with our [product/service]. Consider how small changes or actions can have large and unpredictable impacts, and how to anticipate and manage these potential impacts.",
        "Write a marketing campaign outline using The Pratfall Effect to create messaging and offers that highlight the imperfections or mistakes of the product or service in a humorous or self-deprecating way. Use this approach to make the product more relatable and appealing to the target audience, and to increase conversion rates.",
        "Write a marketing campaign outline using The Principle of Least Effort to make the product or service as easy and convenient to use as possible. Identify ways to reduce the effort required by the target audience to adopt and use the product, and create messaging and offers that highlight these benefits in order to increase conversion rates.",
        "Write a marketing campaign outline using the Anchoring and Adjustment Heuristic to present information in a logical and incremental way. Consider the audience's initial impressions and assumptions, and anchor the messaging and offers to these initial points. Then, make adjustments based on additional information in order to increase conversion rates.",
        "Write a marketing campaign outline using the Representative Heuristic to appeal to the [ideal customer persona]. Identify the prototype or stereotype that represents the audience's expectations and experiences, and create messaging and offers that are similar to this prototype in order to increase conversion rates.",
        "In order to avoid the Gambler's Fallacy, please write a marketing campaign outline that presents data and statistics in a meaningful and accurate way. Emphasize the importance of considering the full range of information and not relying on past performance as a guarantee of future results. Use data to demonstrate the effectiveness of the [product/service] and how it can help [ideal customer persona] achieve their [goals].",
        "Using the principle of marginal analysis, please outline a marketing campaign that considers the marginal cost and marginal benefit of various growth strategies. Identify the [strategies] being considered, and weigh the costs and benefits of each in terms of their impact on the overall [objective] of the campaign. Consider factors such as time, resources, and potential return on investment when making decisions.",
        "Write a marketing campaign outline that avoids relying on stereotypes or typical examples when targeting [ideal customer persona]. Use the representativeness heuristic to consider the full range of information and avoid biases and errors in judgment. Use data and statistics to support the value of considering the full range of information.",
        "Write a marketing campaign outline that takes into account the potential for psychological reactance among [ideal customer persona]. Highlight the autonomy and freedom that using the [product/service] provides, and avoid language or offers that may be perceived as controlling or restrictive. Emphasize the choice and control the audience has when using the product.",
        "Write a marketing campaign outline that addresses the potential for the Dunning-Kruger Effect among [ideal customer persona]. Explain the importance of continuing education and learning about the [product/service] in order to make informed decisions. Use data and statistics to support the value of learning and to avoid overestimating one's own competence.",
        "Please write a [type of text] outlining a marketing campaign that uses the availability heuristic to be aware of the importance of considering a wide range of information and not just relying on examples that are easily available or memorable. Identify any potential [biases and errors in judgment] that may occur due to the availability heuristic and create messaging and offers that consider a diverse range of examples and data points. Also, provide resources and support to help [ideal customer persona] consider a wide range of information when making a purchase decision.",
        "Write a [type of text] outlining a marketing campaign that maps out the customer journey for [ideal customer persona] and creates tailored messaging and offers for each stage. Identify the [touchpoints] and [emotional states] that occur at each stage and create messaging and offers that align with these. Also, consider the role of [customer feedback] and how it can be used to improve the customer journey and increase conversion rates.",
        "Please write a [type of text] outlining a marketing campaign using the diffusion of innovation model to predict and shape the adoption of [product/service] among [ideal customer persona]. Identify the [early adopters] and [late majority] within the target audience and create messaging and offers that appeal to their unique needs and motivations. Also, consider the role of [opinion leaders] and how they can help accelerate the diffusion process.",
        "Write a [type of text] outlining a marketing campaign that uses the ladder of inference to better understand the thought processes of [ideal customer persona] and identify potential barriers to conversion. Consider the [assumptions and beliefs] that may influence their decision-making and create messaging and offers that address these. Also, provide resources and support to help them move through the ladder of inference and make a purchase decision.",
        "Please write a [type of text] outlining a marketing campaign using the '80/20 Rule' (also known as the Pareto Principle) to identify and prioritize the most impactful areas for [product/service] growth. Identify the [key metrics] that contribute the most to [desired outcome] and create messaging and offers that focus on these areas. Also, consider the [minority inputs] that may have a disproportionate impact on the [majority outputs] and how to leverage these effectively.",
        "How can you use social media to increase brand awareness?",
        "What creative strategies can you implement to increase customer engagement?",
        "What key metrics should you track to measure success in your marketing campaigns?",
        "What techniques can you use to better target your ideal customer?",
        "What are the most cost-effective methods to reach your target audience?",
        "How can you use influencer marketing to boost your brand’s visibility?",
        "How can you use content marketing to create loyalty and trust in your brand?",
        "How can you turn customer feedback into useful insights and strategies?",
        "What unique strategies can you use to stand out from the competition?",
        "How can you use A/B testing to optimize your marketing campaigns?",
        "How can you use market segmentation to identify the right target audience?",
        "Write an email subject line convincing potential customers to switch our service.",
        "How can you use customer feedback to identify opportunities for improvement?",
        "How can you use data-driven insights to inform your marketing decisions?",
        "What methods can you use to optimize your website for better user experience?",
        "How can you make the most of your existing customer base to drive more sales?",
        "How can you use email marketing to increase customer engagement?",
        "What strategies can you implement to make your content more shareable?",
        "How can you use promotions and discounts to increase sales?",
        "How can you use the latest technology to improve customer service?",
        "How can you use online reviews to improve customer satisfaction?",
        "How can you use customer segmentation to create more targeted campaigns?",
        "What tactics can you use to capture more leads and convert them into customers?",
        "How can you use storytelling in your marketing campaigns to engage customers?",
        "How can you use video marketing to increase brand visibility?",
        "How can you use influencer marketing to reach a wider audience?",
        "How can you use customer segmentation to deliver personalized content?",
        "What strategies can you use to ensure better customer experience?",
        "How can you use online surveys to get customer feedback?",
        "What methods can you use to measure the ROI of your marketing campaigns?",
        "How can you use A/B testing to optimize your website for better conversions?",
        "How can you use content marketing to generate more qualified leads?",
        "What tactics can you use to increase customer loyalty?",
        "What key metrics should you track to measure success in your marketing?",
        "How can you use visual content to stand out from the competition?",
        "How can you use automation to maximize efficiency and save time?",
        "How can you use retargeting to drive conversions?",
        "How can you use customer segmentation to create more effective campaigns?",
        "What strategies can you use to create an effective lead generation system?",
        "How can you use artificial intelligence to improve customer experience?",
        "How can you use location-based marketing to reach more customers?",
        "What tactics can you use to boost engagement on social media?",
        "How can you use gamification to increase customer loyalty?",
        "How can you use storytelling to create an emotional connection with customers?",
        "How can you use customer feedback to improve your marketing strategy?",
        "How can you use data analytics to track the success of your campaigns?",
        "How can you use technology to create more personalized customer experiences?",
        "What strategies can you use to maximize the reach of your campaigns?",
        "How can you use online reviews to increase customer trust in your brand?",
        "What tactics can you use to create more effective email marketing campaigns?",
        "How can you use social media to increase brand loyalty?",
        "How can you use content marketing to create a unique brand identity?",
        "How can you use SEO to improve your website rankings?",
        "How can you use influencer marketing to build relationships with customers?",
        "List [number] ideas for blog posts about [topic].",
        "Write a minute-long advertisement script about [product, service, or company].",
        "Create a 3-month social media campaign calendar for our product with the goal to [insert goal] and mention the channels we should focus on.",
        "List [number] viral Instagram Reels ideas about [company, product, or service].",
        "Generate [number] of viral TikTok ideas about [company, product, or service].",
        "Create 3 call-to-action button ideas based on the contents of this blog post URL. [Insert URL]",
        "Create an advertising campaign about [company, product, or service] targeting [target audience]. Include key messages and slogans and choose the best media channels for promotions.",
        "Write [number] Google Ad headlines from [URL].",
        "List common challenges faced by [buyer persona description].",
        "List the key marketing segments in [industry]. Which segment has the biggest opportunity for our [company, group, organization, business]?",
        "Write marketing copy to make my marketing emails more engaging. The copy must be about our [product, service, or company].",
        "What are 10 main points that are crucial to marketers trying to acquire new customers?",
        "Generate an AIDA for [product or service].",
        "Write 5 tweets to generate interest in [product, company, or service].",
        "Write a promotional LinkedIn post about [product or service].",
        "Write 3-second Facebook Ad copy about [product or service].",
        "Write a press release about our upcoming event. Include the event's date, time, location, and purpose.",
        "Generate 5 different YouTube descriptions for our video about [topic].",
        "Generate questions for a Facebook poll about [topic].",
        "What marketing channels have the highest ROI?",
        "List ways to market my brand on TikTok.",
        "How can influencer marketing generate leads?",
        "What marketing tactics should I leverage to reach my target audience?",
        "What marketing channels have the lowest ROI?"
    ];

    // Remove duplicate elements from the array
    // const uniquePrompts = Array.from(new Set(marketingPrompts));
    // console.log(uniquePrompts)

    return (
        <Fragment>
            <h1 className='px-10 text-3xl font-semibold pt-4'>ChatGPT prompts for marketing</h1>
            <PromptList list={marketingPrompts} />
        </Fragment>
    )
}

export default Marketing

