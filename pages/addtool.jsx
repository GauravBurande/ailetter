// import db from '../firebase'
// import { writeBatch, doc } from "firebase/firestore";
// import aitools from '../ailetter database'

// const batch = writeBatch(db);

// const add2000tools = async () => {
//     for (const tool of aitools) {
//         const docRef = doc(db, "tools", tool.title);
//         batch.set(docRef, tool);
//         console.log(tool.index)
//     }

//     await batch.commit();
// }

const AddTool = () => {
    return (
        <div className='h-[50vh] flex items-center justify-center'>
            <button className='bg-orange-400 p-3 hover:bg-transparent hover:outline-dashed'>add tool</button>
        </div>
    )
}

export default AddTool
