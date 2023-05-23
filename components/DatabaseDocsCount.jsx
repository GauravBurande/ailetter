import { collection, getCountFromServer } from 'firebase/firestore';
import React, { Fragment, useEffect, useState } from 'react'
import db from '../firebase'

const DatabaseDocsCount = () => {

    const [totoalTools, setTotalTools] = useState()

    useEffect(() => {
        const countDocs = async () => {
            const coll = collection(db, "tools");
            const snapshot = await getCountFromServer(coll);
            setTotalTools(snapshot.data().count)
            console.log('count:', snapshot.data().count)
        }
        countDocs()
    })

    return (
        <Fragment>
            <div className='p-10 flex items-center justify-center'>
                <button className='bg-orange-400 p-3 hover:bg-transparent hover:outline-dashed'>Explore {totoalTools} Tools</button>
            </div>
        </Fragment>
    )
}

export default DatabaseDocsCount
