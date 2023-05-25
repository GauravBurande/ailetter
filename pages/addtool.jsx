// import { useEffect } from 'react';
// import db from '../firebase'
// import { writeBatch, doc } from "firebase/firestore";
// import aitools from '../ailetter database'

const AddTool = () => {

    // const batch = writeBatch(db);

    // const add2000tools = async () => {
    //     for (const tool of aitools) {
    //         const docRef = doc(db, "tools", tool.title);
    //         batch.update(docRef, { "timestamp": 1684914083949 });
    //         console.log(tool.index)
    //     }

    //     await batch.commit();
    // }

    return (
        <div className='h-[50vh] flex items-center justify-center'>
            {/* <button onClick={add2000tools} className='bg-orange-400 p-3 hover:bg-transparent hover:outline-dashed'>add tool</button> */}
            YOU ARE NOT SUPPOSED TO BE HERE
        </div>
    )
}

export default AddTool
