import { useRouter } from 'next/router'
import React, { useEffect, useState, Fragment } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import db from '../firebase'
import ProductsList from '../components/ProductsList'

const Category = () => {

    useEffect(() => {
        const fetchCategory = async () => {
            const q = query(collection(db, "tools"), where("category", "array-contains", slugToCategory[categorySlug]),);

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
            console.log(categoryTools)
        }
        fetchCategory()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categorySlug])

    const [categoryTools, setCategoryTools] = useState()
    const router = useRouter()
    const categorySlug = router.query.category

    const slugToCategory = {
        "social-media": "Social Media",
    }

    return (
        <Fragment>
            {categoryTools && <ProductsList products={categoryTools} />}
        </Fragment>
    )
}

export default Category
