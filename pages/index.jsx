import Head from 'next/head'
import ProductsList from '../components/ProductsList'
// import aitools from '../ailetter database'
import db from '../firebase'
import { Fragment } from 'react'
import { query, orderBy, limit, collection, getDocs, where } from "firebase/firestore";
import Hero from '../components/Hero';
import Category from '../components/Category';
import { useState } from 'react';
import jwt from 'jsonwebtoken';

export const getStaticProps = async () => {

  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
  const privateKey = process.env.FIREBASE_PRIVATE_KEY

  const jwtToken = jwt.sign(
    {
      iss: clientEmail,
      scope: 'https://www.googleapis.com/auth/cloud-platform',
      aud: 'https://www.googleapis.com/oauth2/v4/token',
      iat: parseInt(Date.now() / 1000),
      exp: parseInt(Date.now() / 1000) + 60 * 60, // 60 minutes
    },
    privateKey,
    {
      algorithm: 'RS256',
    }
  );
  // console.log("jwt token", jwtToken)

  // Exchange the JWT token for an access token
  const getAccessToken = async () => {
    try {
      const tokenResponse = await fetch('https://www.googleapis.com/oauth2/v4/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
          assertion: jwtToken,
        }),
      });

      const tokenData = await tokenResponse.json();
      return tokenData.access_token;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const accessToken = await getAccessToken();
  // console.log("accessToken: ", accessToken);

  const queryBody = {
    structuredQuery: {
      select: {
        fields: [
          { fieldPath: "index" },
          { fieldPath: "title" },
          { fieldPath: "slug" },
          { fieldPath: "image" },
          { fieldPath: "description" },
          { fieldPath: "pricing" },
          { fieldPath: "category" },
          { fieldPath: "visit" },
        ]
      },
      from: [
        { collectionId: "tools" }
      ],
      orderBy: [
        { field: { fieldPath: "index" }, direction: "DESCENDING" }
      ],
      limit: 20
    }
  };

  let toolz = []

  try {
    const response = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents:runQuery`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(queryBody)
    })

    const result = await response.json()

    result.forEach(doc => {
      const fields = doc.document.fields
      const docData = {
        "index": fields.index?.integerValue || 5000,
        "title": fields.title?.stringValue || "",
        "slug": fields.slug?.stringValue || "",
        "image": fields.image?.stringValue || "",
        "description": fields.description?.stringValue || "",
        "pricing": fields.pricing?.stringValue || "",
        "category": fields.category.arrayValue?.values.map((value) => value.stringValue) || [],
        "visit": fields.visit?.stringValue || "",
      }
      toolz = [...toolz, { ...docData }];
    });

  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: { toolz: toolz }
  }
}

export default function Home({ toolz, featuredTools }) {
  // const router = useRouter()
  // const pathname = router.pathname

  // const toolsOnHomePage = aitools.filter(tool => tool.index < 21)

  // useEffect(() => {
  //   const getLatestTools = async () => {
  //     const q = query(collection(db, "tools"), orderBy("index", "desc"), limit(20));

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

  const [latestTools, setLatestTools] = useState(toolz)
  const [loading, setLoading] = useState(false)
  const lastToolIndex = parseInt(latestTools[latestTools.length - 1]?.index);

  const loadMoreTools = async () => {
    setLoading(true);
    const q = query(collection(db, "tools"), orderBy("index", "desc"), where("index", "<", lastToolIndex), limit(20));

    const querySnapshot = await getDocs(q);
    querySnapshot && setLoading(false);

    let newLoadedTools = []
    querySnapshot.forEach((doc) => {
      newLoadedTools = [...newLoadedTools, { ...doc.data() }]
    });

    const newLatestTools = [...latestTools, ...newLoadedTools]
    setLatestTools(newLatestTools)
  }

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
        <meta property="twitter:url" content="https://www.ailetter.tech/" />
        <meta name="twitter:title" content="ailetter" />
        <meta name="twitter:description" content="AI tools directory to find the best tools to help you using ai with more 2000 than tools. Browse based on your favourite categories. 1000+ prompts for marketing, seo, and writing. Money making ideas by using new ai tools." />
        <meta name="twitter:image" content="https://www.ailetter.tech/images/ailetter.png" />
      </Head>

      <Fragment>
        <Hero />
        <Category />
        {featuredTools.length !== 0 && <div>
          <h2 className='md:pl-28 px-12 pt-8 text-3xl font-semibold'>Featured Tools</h2>
          <ProductsList products={featuredTools} />
        </div>}
        <h2 className='md:pl-28 px-12 pt-8 text-3xl font-semibold'>Latest Tools</h2>
        <ProductsList products={latestTools} />
        <div className='text-center'>
          <button disabled={loading} onClick={loadMoreTools} className='bg-orange-400 p-3 cursor-pointer hover:text-white'>{loading ? "loading" : "load more"}</button>
        </div>
        {/* <button className='p-4 absolute hover:bg-orange-500' onClick={getToolSlugs}>hello</button> */}
      </Fragment>
    </>
  )
}