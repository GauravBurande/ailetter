import db, { googleAuthProvider } from '../firebase'
import { writeBatch, doc } from "firebase/firestore";
import aitools from '../ailetter database'
import { getAuth, signInWithPopup } from "firebase/auth";
import { Toaster, toast } from 'sonner'

import Head from "next/head"
import { Fragment, useEffect, useState } from "react"

const AddTool = () => {

    // const time = new Date()
    // const timestamp = time.getTime();
    // console.log(timestamp)

    useEffect(() => {
        const auth = getAuth();
        auth.onAuthStateChanged(async (user) => {
            if (user.email === owner) {
                setUserIsOwner(true);
            }
        })
    });

    const [userIsOwner, setUserIsOwner] = useState(false)

    const batch = writeBatch(db);

    const addTools = async () => {
        for (const tool of aitools) {
            const laRef = doc(db, "tools", tool.title);
            batch.set(laRef, tool)
            console.log(tool)
        }

        await batch.commit();
    }

    // const getProductImage = async () => {
    //     console.log("lol");
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

    const addOneTool = (e) => {
        e.preventDefault();
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
                <div className='flex min-h-[50vh] gap-20 flex-wrap justify-between p-10 items-center'>
                    <div className='md:w-5/12 pl-16 flex flex-col gap-5 justify-center'>
                        <p>Before clicking the button below, don&apos;t forget to add the tool in ailetter database.js file.</p>
                        <button onClick={addTools} className='bg-orange-400 w-fit p-3 hover:bg-transparent hover:outline-dashed'>add multiple tools</button>
                    </div>
                    <div className='md:w-5/12 pr-16'>
                        <button onClick={addOneTool} className='bg-orange-400 w-fit p-3 hover:bg-transparent hover:outline-dashed'>add tool</button>
                    </div>
                </div>}
            {!userIsOwner && <div className='min-h-[67vh] gap-5 flex flex-col justify-center items-center'>
                <p>Currently only Owner can access this page! Don&apos;t mind signing in if you&apos;re a user!</p>
                <button onClick={signIn} className='bg-orange-400 w-fit p-3 hover:bg-transparent hover:outline-dashed'>Sign In</button>
            </div>}
        </Fragment>
    )
}

export default AddTool
