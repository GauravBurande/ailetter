import Head from 'next/head'
import ProductsList from '../components/ProductsList'
// import aitools from '../ailetter database'
import db from '../firebase'
import { Fragment, useEffect, useState } from 'react'
import { query, orderBy, limit, collection, getDocs } from "firebase/firestore";

export default function Home() {

  const [latestTools, setLatestTools] = useState([])
  // const router = useRouter()
  // const pathname = router.pathname

  // const toolsOnHomePage = aitools.filter(tool => tool.index < 21)

  useEffect(() => {
    const getLatestTools = async () => {
      const q = query(collection(db, "tools"), orderBy("timestamp", "desc"), limit(20));

      const querySnapshot = await getDocs(q);

      let toolz = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        toolz = [...toolz, { ...doc.data() }]
      });
      setLatestTools(toolz)
      console.log("from state variable", latestTools)
    }
    getLatestTools()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
      <Head>
        <title>browserAI</title>
        <meta name="description" content="browserAI reads the website content, tells you everything about the site in short to save your precious time little by little and the headache to browse the whole website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fragment>
        <h2 className='md:pl-28 px-12 pt-8 text-3xl font-semibold'>Latest Tools</h2>
        <ProductsList products={latestTools} />
      </Fragment>
    </>
  )
}