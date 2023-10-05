import db, { googleAuthProvider, userAuth } from '../firebase'
// import { writeBatch } from "firebase/firestore";
// import aitools from '../ailetter database'
import { getAuth, signInWithPopup } from "firebase/auth";
import { doc, updateDoc, setDoc, query, orderBy, limit, collection, getDocs } from "firebase/firestore";
import { Toaster, toast } from 'sonner'
import { RiDeleteBinLine } from 'react-icons/ri'
import Category from '../components/Category';

import Head from "next/head"
import { Fragment, useEffect, useState } from "react"
import nookies from "nookies"

const AddTool = ({ featuredTools }) => {

    const time = new Date()
    const timestamp = time.getTime();

    useEffect(() => {
        const auth = getAuth();
        auth.onAuthStateChanged(async (user) => {
            if (user && user.email === owner) {
                const token = await user.getIdToken()
                nookies.set(undefined, "token", token, {});
                setUserIsOwner(true);
            }
        })
    });

    // const batch = writeBatch(db);
    // const batching = async () => {
    //     for (const tool of aitools) {
    //         const toolRef = doc(db, "tools", tool.title);
    //         batch.set(toolRef, tool)
    //         // batch.update(toolRef, { "visit": tool["visit-href"] });
    //         console.log(tool.index);
    //     }

    //     await batch.commit();
    // }

    const [userIsOwner, setUserIsOwner] = useState(false)
    const emptyForm = { "title": "", "image": "", "description": "", "pricing": "", "visit-href": "" }
    const [formWithoutCategory, setFormWithoutCategory] = useState(emptyForm)
    const [category, setCategory] = useState('')
    const [tag, setTag] = useState('')
    const [featured, setFeatured] = useState(false)
    const [featureInput, setFeatureInput] = useState('')
    const [webpImageInfo, setWebImageInfo] = useState({})

    const owner = "ailetter.substack@gmail.com" || "njr795453@gmail.com";

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

        const addTool = confirm("Are you sure you want to add this tool to ailetter?")

        if (addTool) {

            // Replace non-alphanumeric characters with a hyphen
            const slug = formWithoutCategory.title.replace(/[^a-zA-Z0-9]+/g, '-');

            // Convert to lowercase
            const lowercaseSlug = slug.toLowerCase();

            // Remove leading and trailing hyphens
            const finalSlug = lowercaseSlug.replace(/^-+|-+$/g, '');

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
            toast.success("Tool added successfully to the database!");

            setFormWithoutCategory(emptyForm)
            setCategory('')
            setTag('')
            setFeatured(false)
        }
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
        if (e.target.files.length > 0) {
            let image = await createImageBitmap(e.target.files[0]);

            // converting image to webp format

            let canvas = new OffscreenCanvas(image.width, image.height);
            let context = canvas.getContext("2d");
            context.drawImage(image, 0, 0);

            let webpImageBlob = await canvas.convertToBlob({ type: "image/webp", quality: 0.7 });

            // converting blob back to file format
            // let webpImageFile = new File([webpImageBlob], e.target.files[0].name.split(".")[0] + '.webp', { type: "image/webp", lastModified: Date.now() })

            // converting the blob to base64 format
            const reader = new FileReader();
            reader.readAsDataURL(webpImageBlob);
            reader.onloadend = function () {
                const webpImageBase64 = reader.result;
                setWebImageInfo({ webpImageBase64, fileName: e.target.files[0].name.split(".")[0] + '.webp' });
                // console.log("webpfile info: ", webpImageInfo)
                // console.log("pure base64: ", webpImageBase64.split(",")[1])
            }
        }
    }

    const toGithubRepo = async () => {
        if (Object.keys(webpImageInfo).length > 0) {

            const data = JSON.stringify({
                "message": `added image file ${webpImageInfo.fileName}`,
                "content": `${webpImageInfo.webpImageBase64.split(",")[1]}`
            });

            const token = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN
            var requestOptions = {
                method: 'put',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: data,
            };

            const url = `https://api.github.com/repos/ailetter/ailetter-img-database/contents/${webpImageInfo.fileName}`

            try {
                const response = await fetch(url, requestOptions)
                const result = await response.json()

                if (result.commit) {
                    toast.success(result.commit.message)
                    setFormWithoutCategory({ ...formWithoutCategory, "image": result.content.download_url })
                } else if (result.message === `Invalid request.\n\n"sha" wasn't supplied.`) {
                    toast.error("Image already exists on the server!\n\n" + result.message)
                    setFormWithoutCategory({ ...formWithoutCategory, "image": `https://raw.githubusercontent.com/ailetter/ailetter-img-database/main/${webpImageInfo.fileName}` })
                } else {
                    toast.error(result.message)
                    console.log(result)
                }
            } catch (error) {
                toast.error(error.message)
                console.error(error)
            }
        } else {
            toast.error("Failed to process the image input, please try again!")
        }
    }

    const removeFromFeatured = async (tool) => {
        const remove = confirm("Are you sure you want to remove this tool from featured section?")

        if (remove) {
            const toolRef = doc(db, "tools", tool);

            await updateDoc(toolRef, {
                featured: false
            });

            toast.success("The tool has been removed from the featured tools section.")
        }
    }

    const hanldeFeatureInput = (e) => {
        setFeatureInput(e.target.value)
    }

    const addToFeatured = async (e) => {
        e.preventDefault()
        const add = confirm("Are you sure you want to add this tool to featured section?")

        if (add) {
            const toolRef = doc(db, "tools", featureInput);

            try {
                await updateDoc(toolRef, {
                    featured: true
                });

                toast.success("The tool has been added to the featured tools section.")
                setFeatureInput('')
            } catch (error) {
                toast.error(error.message)
                console.log(error)
            }
        }
    }

    const runBuild = async () => {
        const deployHookIdentifier = process.env.NEXT_PUBLIC_DEPLOY_HOOK_IDENTIFIER
        const run = confirm("Do you really want to run build command?")

        if (run) {
            try {
                const response = await fetch(`https://api.vercel.com/v1/integrations/deploy/${deployHookIdentifier}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                const result = await response.json()
                console.info("Starting the build process..." + " id: " + result.job.id + ", state: " + result.job.state)
                toast.message("Starting the build process...", {
                    description: `id: ${result.job.id},\n  state: ${result.job.state}`
                })
            } catch (error) {
                console.error("Error: " + error)
            }
        }
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
                                    <input type="file" accept='image/*' name='convert' id="toolImage" onChange={handleImageInput} />
                                    <button onClick={toGithubRepo} className='px-2 py-1 rounded-[1px] bg-gray-100 hover:bg-gray-200 outline outline-1' type='button'>upload</button>
                                </div>
                                <input readOnly={formWithoutCategory.image.includes("https://raw.githubusercontent.com/ailetter/ailetter-img-database/main/")} onChange={handleFormInput} value={formWithoutCategory.image} id='image' name='image' className='w-full px-3 py-1 outline outline-2' type="url" required />
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
                                    <input checked={formWithoutCategory.pricing === "Subscription"} onChange={handleFormInput} className='cursor-pointer' type="radio" id="Subscription" name="pricing" value="Subscription" />
                                    <label htmlFor="Subscription">Subscription</label>
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
                            <button type='submit' className='bg-orange-400 w-full text-white hover:text-black uppercase p-3 hover:bg-transparent hover:outline-dashed'>add tool</button>
                        </form>
                    </div>

                    <div className='md:w-5/12 w-full flex flex-col md:min-h-[87vh] items-center gap-8 justify-between'>
                        <div className='flex w-full items-center justify-between'>
                            <button onClick={runBuild} className='bg-orange-400 mt-auto w-fit p-3 hover:bg-transparent hover:outline-dashed uppercase'>Trigger Build</button>
                            <button onClick={handleSignOut} className='bg-orange-400 mt-auto w-fit p-3 hover:bg-transparent hover:outline-dashed uppercase'>Sign Out</button>
                        </div>
                        <div className='w-full h-full'>
                            <p className='text-2xl py-10 font-semibold'>Featured Tools</p>
                            {
                                featuredTools.length > 0
                                    ? <div className='w-full'>
                                        {featuredTools.map((tool) => {
                                            return (
                                                <div className='flex w-full py-3 flex-col items-center justify-center' key={tool.title}>
                                                    <div className='flex w-full flex-wrap justify-between items-center'>
                                                        <p>{tool.title}</p>
                                                        <button onClick={() => { removeFromFeatured(tool.title) }} className='bg-gray-100 flex items-center hover:bg-gray-200 px-2 py-1 outline outline-1 rounded-[1px]'>remove <span className='text-orange-500'><RiDeleteBinLine /></span></button>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    : <div className='flex items-center justify-center md:h-[10vh]'>
                                        <p className='text-xl text-center'>Currently there are no tools in featured section.</p>
                                    </div>
                            }
                        </div>
                        <div className='w-full'>
                            <p className='text-2xl py-10 font-semibold'>Add a tool to featured section</p>
                            <form className='flex gap-3 w-full' onSubmit={addToFeatured} method="post">
                                <input onChange={hanldeFeatureInput} value={featureInput} placeholder="enter the tool's title" className='px-2 py-1 outline outline-2 w-[88%]' type="text" name="toolTitle" id="toolTitle" />
                                <button disabled={featureInput === ''} className='bg-gray-100 flex items-center hover:bg-gray-200 px-4 py-1 outline outline-1 rounded-[1px]' type="submit">add</button>
                            </form>
                        </div>
                    </div>
                </div>}

            {!userIsOwner && <div className='min-h-[67vh] gap-5 flex flex-col justify-center items-center'>
                <p>Currently only Owner can access this page! Don&apos;t mind signing in if you&apos;re a user!</p>
                <button onClick={signIn} className='bg-orange-400 uppercase w-fit p-3 hover:bg-transparent hover:outline-dashed'>Sign In</button>
            </div>}
            <Category />
        </Fragment>
    )
}

export default AddTool
