import db, { googleAuthProvider, userAuth } from '../firebase'
// import { writeBatch, doc } from "firebase/firestore";
// import aitools from '../ailetter database'
import { getAuth, signInWithPopup } from "firebase/auth";
import { doc, setDoc, query, orderBy, limit, collection, getDocs } from "firebase/firestore";
import { Toaster, toast } from 'sonner'

import Head from "next/head"
import { Fragment, useEffect, useState } from "react"

const AddTool = () => {

    const time = new Date()
    const timestamp = time.getTime();
    // console.log(timestamp)

    useEffect(() => {
        const auth = getAuth();
        auth.onAuthStateChanged(async (user) => {
            if (user && user.email === owner) {
                setUserIsOwner(true);
            }
        })
    });

    const [userIsOwner, setUserIsOwner] = useState(false)
    const emptyForm = { "title": "", "image": "", "description": "", "pricing": "", "visit-href": "" }
    const [formWithoutCategory, setFormWithoutCategory] = useState(emptyForm)
    const [category, setCategory] = useState('')
    const [tag, setTag] = useState('')
    const [featured, setFeatured] = useState(false)
    const [imageFile, setImageFile] = useState(null)

    // const batch = writeBatch(db);

    // add tools in batch, many at once
    // const addTools = async () => {
    //     for (const tool of aitools) {
    //         const laRef = doc(db, "tools", tool.title);
    //         batch.set(laRef, tool)
    //         console.log(tool)
    //     }

    //     await batch.commit();
    // }

    const owner = "ailetter.substack@gmail.com";

    const signIn = async () => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then((result) => {
                const user = result.user;
                if (user.email === owner) {
                    setUserIsOwner(true);
                } else {
                    toast.error("Sorry, you are not allowed to access this page.");
                }
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                alert(errorCode + ': ' + errorMessage + 'for email ' + email)
            });
    }

    const addOneTool = async (e) => {

        e.preventDefault();
        // Replace non-alphanumeric characters with a hyphen
        const slug = formWithoutCategory.title.replace(/[^a-zA-Z0-9]+/g, '-');

        // Convert to lowercase
        const lowercaseSlug = slug.toLowerCase();

        // Remove leading and trailing hyphens
        const finalSlug = lowercaseSlug.replace(/^-+|-+$/g, '');

        try {
            const response = await fetch('/api/addToSlugList', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ finalSlug }),
            });

            const result = await response.json();

            if (result.success) {
                console.log("Successfully added to the slug list");
            } else {
                console.log("Failed to add to the slug list")
            }
        } catch (error) {
            console.log("Error: " + error)
        }

        const q = query(collection(db, "tools"), orderBy("index", "desc"), limit(1));

        const querySnapshot = await getDocs(q);

        let topTool = {}
        querySnapshot.forEach((doc) => {
            topTool = doc.data()
        });

        const topIndex = topTool.index

        const toolDocument = { index: topIndex + 1, slug: finalSlug, ...formWithoutCategory, "visit-href": formWithoutCategory['visit-href'] + "?ref=ailetter.tech", category: [category, tag], timestamp, featured }
        console.log(toolDocument)

        await setDoc(doc(db, "tools", formWithoutCategory.title), toolDocument);

        setFormWithoutCategory(emptyForm)
        setCategory('')
        setTag('')
        setFeatured(false)
    }

    const handleSignOut = () => {
        userAuth.signOut().then(() => {
            toast.success("Signed out successfully!")
            setUserIsOwner(false);
        }).catch((error) => {
            alert(error.message)
        })
    }

    const handleFormInput = (e) => {
        if (e.target.name === "category") {
            setCategory(e.target.value);
        }
        if (e.target.name === "tag") {
            setTag(e.target.value);
        }
        if (e.target.name === "featured") {
            setFeatured(!featured);
        } else if (e.target.name !== "tag") {
            setFormWithoutCategory({ ...formWithoutCategory, [e.target.name]: e.target.value })
        }
    }

    const handleImageInput = async (e) => {
        setImageFile(URL.createObjectURL(e.target.files[0]));
        console.log(imageFile);
    }

    return (
        <Fragment>
            <Head>
                <title>add tool to ailetter</title>
                <meta name="description" content="Add tool to ailetter - directory of more than 2000 tools, genereate backlinks and get more visitors" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* open graph social meta tag */}
                <meta property="og:title" content="add tool to ailetter" />
                <meta property="og:description" content="Add tool to ailetter - directory of more than 2000 tools, genereate backlinks and get more visitors" />
                <meta property="og:url" content="https://www.ailetter.tech/addtool" />
                <meta property="og:image" content="https://www.ailetter.tech/images/ailetter.png" />
                <meta property="og:type" content="website" />

                {/* twitter card social meta tag */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.ailetter.tech/addtool" />
                <meta name="twitter:title" content="add tool to ailetter" />
                <meta name="twitter:description" content="Add tool to ailetter - directory of more than 2000 tools, genereate backlinks and get more visitors" />
                <meta name="twitter:image" content="https://www.ailetter.tech/images/ailetter.png" />
            </Head>

            <Toaster position="top-right" closeButton />

            {userIsOwner &&
                <div className='flex min-h-[50vh] gap-20 flex-wrap justify-between md:px-36 p-10 pt-0 items-center'>
                    <div className='md:w-5/12'>
                        <form className='w-full flex flex-col items-center justify-center gap-4' onSubmit={addOneTool} method="post">
                            <div className='flex w-full gap-2 flex-col justify-center items-start'>
                                <label htmlFor="title">title</label>
                                <input onChange={handleFormInput} value={formWithoutCategory.title} id='title' name='title' className='w-full px-3 py-1 outline outline-2' type="text" required />
                            </div>
                            <div className='flex w-full gap-2 flex-col justify-center items-start'>
                                <label htmlFor="image">image URL</label>
                                <div className='flex flex-wrap gap-2 items-center'>
                                    <p>or</p>
                                    <input type="file" onChange={handleImageInput} />
                                    <button className='px-2 py-1 rounded-[1px] bg-gray-100 hover:bg-gray-200 outline outline-1' type='button'>upload</button>
                                </div>
                                <input onChange={handleFormInput} value={formWithoutCategory.image} id='image' name='image' className='w-full px-3 py-1 outline outline-2' type="url" required />
                            </div>
                            <div className='flex w-full gap-2 flex-col justify-center items-start'>
                                <label htmlFor="description">description</label>
                                <textarea onChange={handleFormInput} value={formWithoutCategory.description} id='description' name='description' className='w-full px-3 py-1 outline outline-2' type="text" required />
                            </div>
                            <div className='flex w-full gap-2 flex-col justify-center items-start'>
                                <label htmlFor="pricing">pricing</label>
                                <div className='flex flex-wrap gap-2'>
                                    <input checked={formWithoutCategory.pricing === "Free"} onChange={handleFormInput} className='cursor-pointer' type="radio" id="Free" name="pricing" value="Free" />
                                    <label htmlFor="Free">Free</label>
                                    <input checked={formWithoutCategory.pricing === "Freemium"} onChange={handleFormInput} className='cursor-pointer' type="radio" id="Freemium" name="pricing" value="Freemium" />
                                    <label htmlFor="Freemium">Freemium</label>
                                    <input checked={formWithoutCategory.pricing === "Paid"} onChange={handleFormInput} className='cursor-pointer' type="radio" id="Paid" name="pricing" value="Paid" />
                                    <label htmlFor="Paid">Paid</label>
                                    <input checked={formWithoutCategory.pricing === "Free trial"} onChange={handleFormInput} className='cursor-pointer' type="radio" id="Free trial" name="pricing" value="Free trial" />
                                    <label htmlFor="Free trial">Free trial</label>
                                    <input checked={formWithoutCategory.pricing === "Usage-based"} onChange={handleFormInput} className='cursor-pointer' type="radio" id="Usage-based" name="pricing" value="Usage-based" />
                                    <label htmlFor="Usage-based">Usage-based</label>
                                </div>
                            </div>
                            <div className='flex w-full gap-2 flex-col justify-center items-start'>
                                <label htmlFor="visit-href">Link to the tool</label>
                                <input onChange={handleFormInput} value={formWithoutCategory['visit-href']} id='visit-href' name='visit-href' className='w-full px-3 py-1 outline outline-2' type="url" required />
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <div className='flex w-[47%] gap-2 flex-col justify-center items-start'>
                                    <label htmlFor="category">category</label>
                                    <input onChange={handleFormInput} value={category} id='category' name='category' className='w-full px-3 py-1 outline outline-2' type="text" required />
                                </div>
                                <div className='flex w-[47%] gap-2 flex-col justify-center items-start'>
                                    <label htmlFor="tag">tag (optional)</label>
                                    <input onChange={handleFormInput} value={tag} id='tag' name='tag' className='w-full px-3 py-1 outline outline-2' type="text" />
                                </div>
                            </div>
                            <div className='flex w-full gap-2 justify-center items-center'>
                                <input checked={featured} onChange={handleFormInput} value={featured} id='featured' name='featured' type="checkbox" />
                                <label htmlFor="featured">Add to featured tools section</label>
                            </div>
                            <button type='submit' className='bg-orange-400 w-full text-white hover:text-black uppercase mt-3 p-3 hover:bg-transparent hover:outline-dashed'>add tool</button>
                        </form>
                    </div>

                    <div className='md:w-5/12 flex items-center justify-center'>
                        <button onClick={handleSignOut} className='bg-orange-400 w-fit p-3 hover:bg-transparent hover:outline-dashed uppercase'>Sign Out</button>
                    </div>
                </div>}

            {!userIsOwner && <div className='min-h-[67vh] gap-5 flex flex-col justify-center items-center'>
                <p>Currently only Owner can access this page! Don&apos;t mind signing in if you&apos;re a user!</p>
                <button onClick={signIn} className='bg-orange-400 uppercase w-fit p-3 hover:bg-transparent hover:outline-dashed'>Sign In</button>
            </div>}
        </Fragment>
    )
}

export default AddTool
