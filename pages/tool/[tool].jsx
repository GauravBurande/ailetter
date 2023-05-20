import { useRouter } from 'next/router'

const Category = () => {
    const router = useRouter()
    const tool = router.query.tool

    return (
        <div>
            {tool}
        </div>
    )
}

export default Category
