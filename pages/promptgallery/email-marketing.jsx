import React, { Fragment } from 'react'
import PromptList from '../../components/PromptList';
import Head from 'next/head';

const EmailMarketing = () => {

    const emailPrompts = [
        "I need a [type of email] that will persuade my [ideal customer persona] to purchase my [product/service] by highlighting its unique benefits and addressing any potential objections.",
        "I'm looking for a [type of email] that will convince my [ideal customer persona] to sign up for my [program/subscription] by explaining the value it brings and the benefits they'll receive.",
        "I need a [type of email] that will make my [ideal customer persona] feel [emotion] about my [product/service] and convince them to take [desired action].",
        "I'm looking for a [type of email] that will explain the features and benefits of my [product/service] to [ideal customer persona] in a clear and concise manner, leading them to make a purchase.",
        "I need a [type of email] that will address the pain points and needs of my [ideal customer persona] and show them how my [product/service] is the solution they've been searching for.",
        "I'm looking for a [type of email] that will draw in my [ideal customer persona] with a strong headline and hook, and then convince them to take [desired action] with persuasive language and compelling evidence.",
        "I need a [type of email] that will tell a story about my [product/service] and how it has helped [ideal customer persona] achieve their [goal] in a relatable and engaging way.",
        "I'm looking for a [type of email] that will showcase the unique features and benefits of my [product/service] to [ideal customer persona] and persuade them to make a purchase.",
        "I need a [type of email] that will overcome objections and concerns my [ideal customer persona] may have about my [product/service] and convince them to take [desired action].",
        "I'm looking for a [type of email] that will establish trust and credibility with my [ideal customer persona] by highlighting the successes and testimonials of previous customers who have used my [product/service].",
        "I need a [type of email] that will make my [ideal customer persona] feel [emotion] about my [product/service] and persuade them to take [desired action] with a sense of urgency.",
        "I'm looking for a [type of email] that will clearly explain the features and benefits of my [product/service] to [ideal customer persona] and persuade them to make a purchase with a strong call-to-action.",
        "I need a [type of email] that will showcase the value and benefits of my [product/service] to [ideal customer persona] and convince them to take [desired action] with social proof and credibility building elements.",
        "I'm looking for a [type of email] that will speak directly to the needs and pain points of my [ideal customer persona] and persuade them to take [desired action] with a sense of urgency and strong offer.",
        "I need a [type of email] that will convince my [ideal customer persona] to purchase my [product/service] by highlighting its unique benefits and addressing any potential objections.",
        "Create an email campaign to promote a new product or service.",
        "Offer subscribers exclusive discounts and coupons.",
        "Create an email that features customer success stories.",
        "Send out a survey to gather feedback from customers.",
        "Create an email that features video content.",
        "Create an email with a quiz or interactive element.",
        "Create an email with graphical content.",
        "Create a series of emails that feature product reviews.",
        "Create an email that features a Q&A with a company leader.",
        "Send out a one-time special offer to subscribers.",
        "Offer customers a free trial of your services.",
        "Use an email to showcase customer reviews and testimonials.",
        "Create an email that features graphical content.",
        "Craft an email that features a behind-the-scenes look at your company.",
        "Offer an incentive to customers for leaving product reviews.",
        "Create an email that encourages readers to join your mailing list.",
        "Send out an email to thank customers for their business.",
        "Use an email to introduce a new product or service.",
        "Create an email to announce a new blog post or article.",
        "Offer customers the chance to win a prize with an email campaign.",
        "Offer customers a free gift with purchase.",
        "Send out a newsletter with tips and advice.",
        "Create an email with a special offer for returning customers.",
        "Send out an email to promote an upcoming event.",
        "Create an email to announce a sale or discount.",
        "Use an email to highlight customer testimonials.",
        "Craft an email with a special offer for referral customers.",
        "Create a promotional email to drive online sales.",
        "Use an email to announce a new product or service.",
        "Offer customers exclusive discounts and coupons.",
        "Create an email series to educate customers about your product or service.",
        "Craft an email with a personal touch.",
        "Send out an email with a quiz or interactive element.",
        "Create a series of emails that feature video content.",
        "Send out a newsletter with industry news and updates.",
        "Create an email to feature customer reviews.",
        "Create an email campaign around a special event or holiday.",
        "Give me 10 promotional email subject lines for my...",
        "What are the best practices for writing attention-grabbing subject lines?",
        "Give me 10 subject lines for my [niche] newsletter.",
        "How can I create a sense of urgency in my subject lines?",
        "Give me 10 follow-up email subject lines.",
        "Write the body copy for a promotional email with the subject line: [Your subject line].",
        "What are the best practices for writing compelling marketing email body copy?",
        "Write the body copy of a newsletter email with the subject line: [Your subject line].",
        "What are the best practices for formatting and structuring email copy?",
        "Write a follow-up email with the subject line: [Your subject line].",
        "How can I use A/B testing to improve my email campaign conversion rate?",
        "What are the key elements of a marketing email that I should split test?",
        "How do I analyze my A/B test to find out which version works the best?",
        "How can I use A/B testing to find out the best time to send my emails (and the best frequency)?",
        "How can I use my A/B test results to improve future email marketing campaigns?",
        "What are the best practices for effective email marketing design?",
        "What makes a good email header?",
        "How do I use images and graphics effectively in my marketing emails?",
        "How can I optimize my marketing emails for mobile?",
        "How can I make my emails load faster on mobile devices?",
        "What are the best ways to quickly grow my email list?",
        "How do I decrease the number of unsubscribers from my email list?",
        "How can I re-engage inactive subscribers on my email list?",
        "What are the most common mistakes to avoid when building an email list?",
        "What are the best practices for managing an email list?",
        "What are the legal requirements for sending promotional emails?",
        "How can I ensure my emails are compliant with data privacy laws?",
        "How can I ensure my marketing emails comply with CAN-SPAM laws?",
        "What consent do I need to start sending marketing emails?",
        "What are the consequences of failing to comply with email marketing laws?",
        "How do I improve my email deliverability rate?",
        "Why are my emails being marked as spam?",
        "How do I remove invalid email addresses, spam traps, and other malicious addresses from my list?",
        "How can I measure my email deliverability?",
        "How can I fix email deliverability issues caused by recipients' firewalls?",
    ];

    return (
        <Fragment>
            <Head>
                <title>Best email marketing prompts</title>
                <meta name="description" content="A list of top email marketing prompts for businesses" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* open graph social meta tag */}
                <meta property="og:title" content="Best email marketing prompts" />
                <meta property="og:description" content="A list of top email marketing prompts for businesses" />
                <meta property="og:url" content="https://www.ailetter.tech/promptgallery/email-marketing" />
                <meta property="og:image" content="https://www.ailetter.tech/images/email_marketing.jpg" />
                <meta property="og:type" content="website" />

                {/* twitter card social meta tag */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.ailetter.tech/promptgallery/email-marketing" />
                <meta name="twitter:title" content="Best email marketing prompts" />
                <meta name="twitter:description" content="A list of top email marketing prompts for businesses" />
                <meta name="twitter:image" content="https://www.ailetter.tech/images/email_marketing.jpg" />
            </Head>
            <h1 className='px-10 text-3xl font-semibold pt-4'>ChatGPT prompts for email marketing</h1>
            <PromptList list={emailPrompts} />
        </Fragment>
    )
}

export default EmailMarketing
