// import db from '../firebase'
// import { writeBatch, doc } from "firebase/firestore";
// import aitools from '../ailetter database'

import Head from "next/head"
import { Fragment } from "react"

const AddTool = () => {

    // const time = new Date()
    // const timestamp = time.getTime();
    // console.log(timestamp)

    // const batch = writeBatch(db);

    // const addTools = async () => {
    //     for (const tool of aitools) {
    //         const laRef = doc(db, "tools", tool.title);
    //         batch.set(laRef, tool)
    //         console.log(tool)
    //     }

    //     await batch.commit();
    // }

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
            <div className='h-[50vh] flex flex-col gap-5 items-center justify-center'>
                {/* <p>Before clicking addtool button, don&apos;t forget to add the tool in ailetter database.js file.</p>
            <button onClick={addTools} className='bg-orange-400 p-3 hover:bg-transparent hover:outline-dashed'>add tool</button> */}
                YOU ARE NOT SUPPOSED TO BE HERE
            </div>
        </Fragment>
    )
}

export default AddTool
