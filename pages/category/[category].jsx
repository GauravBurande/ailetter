import { useRouter } from 'next/router'
import React, { useEffect, useState, Fragment } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import db from '../../firebase'
import ProductsList from '../../components/ProductsList'

const Category = () => {

    const [categoryTools, setCategoryTools] = useState([])
    const router = useRouter()
    const categorySlug = router.query.category

    const slugToCategory = {
        "social-media": "Social Media",
    }
    const category = slugToCategory[categorySlug]

    useEffect(() => {
        const fetchCategory = async () => {
            const q = query(collection(db, "tools"), where("category", "array-contains", category));

            const querySnapshot = await getDocs(q);
            if (!querySnapshot) {
                console.log("no such document")
            }

            let categoryTools = []
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                categoryTools = [...categoryTools, { ...doc.data() }]
            });
            setCategoryTools(categoryTools)
            // console.log(categoryTools)
        }
        category && fetchCategory()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categorySlug])

    return (
        <Fragment>
            <h1 className='md:pl-28 px-12 pt-8 text-3xl font-semibold'>{categoryTools.length !== 0 && <span>Top</span>} {categoryTools.length} {category} AI Tools</h1>
            {
                categoryTools.length !== 0
                    ? <ProductsList products={categoryTools} />
                    : <h3 className='text-center mx-auto py-10 mb-10 font-bold text-4xl w-2/3 h-[20vh]'>No Tools to show here, check out other categories!</h3>
            }
        </Fragment>
    )
}

export default Category
