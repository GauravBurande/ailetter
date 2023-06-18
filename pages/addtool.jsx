// import { useEffect } from 'react';
// import db from '../firebase'
// import { writeBatch, doc } from "firebase/firestore";
// import aitools from '../ailetter database'

const AddTool = () => {

    // const time = new Date()
    // const timestamp = time.getTime();
    // console.log(timestamp)

    // const batch = writeBatch(db);

    // before clicking addtool button, don't forget to add the tool in ailetter database.js file.

    // const addTools = async () => {
    //     for (const tool of aitools) {
    //         const laRef = doc(db, "tools", tool.title);
    //         batch.set(laRef, tool)
    //         console.log(tool)
    //     }

    //     await batch.commit();
    // }

    return (
        <div className='h-[50vh] flex items-center justify-center'>
            {/* <button onClick={addTools} className='bg-orange-400 p-3 hover:bg-transparent hover:outline-dashed'>add tool</button> */}
            YOU ARE NOT SUPPOSED TO BE HERE
        </div>
    )
}

export default AddTool
