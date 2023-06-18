import Head from 'next/head'
import ProductsList from '../components/ProductsList'
// import aitools from '../ailetter database'
import db from '../firebase'
import { Fragment } from 'react'
import { query, orderBy, limit, collection, getDocs } from "firebase/firestore";

export const getStaticProps = async () => {

  const q = query(collection(db, "tools"), orderBy("timestamp", "desc"), limit(20));

  const querySnapshot = await getDocs(q);

  let toolz = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    toolz = [...toolz, { ...doc.data() }]
  });

  return {
    props: { latestTools: toolz }
  }
}

export default function Home({ latestTools }) {

  // const [latestTools, setLatestTools] = useState([])
  // const router = useRouter()
  // const pathname = router.pathname

  // const toolsOnHomePage = aitools.filter(tool => tool.index < 21)

  // useEffect(() => {
  //   const getLatestTools = async () => {
  //     const q = query(collection(db, "tools"), orderBy("timestamp", "desc"), limit(20));

  //     const querySnapshot = await getDocs(q);

  //     let toolz = []
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       // console.log(doc.id, " => ", doc.data());
  //       toolz = [...toolz, { ...doc.data() }]
  //     });
  //     setLatestTools(toolz)
  //   }
  //   getLatestTools()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // const getToolSlugs = async () => {

  // }

  return (
    <>
      <Head>
        <title>ailetter - Browse more than 2000 AI Tools</title>
        <meta name="description" content="AI tools directory to find the best tools to help you using ai with more 2000 than tools. Browse based on your favourite categories. 1000+ prompts for marketing, seo, and writing. Money making ideas by using new ai tools." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* open graph social meta tag */}
        <meta property="og:title" content="ailetter" />
        <meta property="og:description" content="AI tools directory to find the best tools to help you using ai with more 2000 than tools. Browse based on your favourite categories. 1000+ prompts for marketing, seo, and writing. Money making ideas by using new ai tools." />
        <meta property="og:url" content="https://www.ailetter.tech/" />
        <meta property="og:image" content="https://www.ailetter.tech/images/ailetter.png" />
        <meta property="og:type" content="website" />

        {/* twitter card social meta tag */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ailetter" />
        <meta name="twitter:description" content="AI tools directory to find the best tools to help you using ai with more 2000 than tools. Browse based on your favourite categories. 1000+ prompts for marketing, seo, and writing. Money making ideas by using new ai tools." />
        <meta name="twitter:image" content="https://www.ailetter.tech/images/ailetter.png" />
      </Head>

      <Fragment>
        <h2 className='md:pl-28 px-12 pt-8 text-3xl font-semibold'>Latest Tools</h2>
        <ProductsList products={latestTools} />
        {/* <button className='p-4 absolute hover:bg-orange-500' onClick={getToolSlugs}>hello</button> */}
      </Fragment>
    </>
  )
}