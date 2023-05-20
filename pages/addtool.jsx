import React from 'react'
import db from '../firebase'
import { doc, setDoc } from "firebase/firestore";

const add2000tools = async () => {
    // await setDoc(doc(db, "tools", "Scrip AI"), {
    //     "index": 19,
    //     "title": "Scrip AI",
    //     "image": "/assets/img/tools/scrip-ai.webp",
    //     "description": "Scrip AI is an AI-powered tool designed for quickly generating short video scripts for platforms like TikTok, Reels, and YouTube Shorts allowing users to create 30 to 60-second scripts in just one minute.Scrip AI could be used by content creators looking to generate a large volume of short-form video content quickly and efficiently, businesses looking to create short promotional videos for social media, and educators or trainers looking to create bite-sized educational content.",
    //     "pricing": "Free",
    //     "visit-href": "https://scripai.com/?ref=ailetter",
    //     "category": [
    //         "Social Media",
    //         "Content Creation"
    //     ]
    // });
}

const AddTool = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <button onClick={add2000tools} className='bg-orange-400 p-3 hover:bg-transparent hover:outline-dashed'>add 2000+ tools</button>
        </div>
    )
}

export default AddTool
