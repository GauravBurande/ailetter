import Head from 'next/head'
import ProductsList from '../components/ProductsList'
import aitools from '../ailetter database'
import React from 'react'

export default function Home() {

  const toolsOnHomePage = aitools.filter(tool => tool.index < 21)

  // // Specify the collection to query
  // const collectionRef = db.collection('your-collection');

  // // Perform the query and retrieve the top 20 documents
  // const querySnapshot = await collectionRef
  //   .orderBy('timestamp', 'desc') // Sorting by timestamp field in descending order
  //   .limit(20) // Limiting the result to 20 documents
  //   .get();

  // // Access the documents from the query snapshot
  // const topDocuments = querySnapshot.docs.map((doc) => doc.data());


  return (
    <>
      <Head>
        <title>browserAI</title>
        <meta name="description" content="browserAI reads the website content, tells you everything about the site in short to save your precious time little by little and the headache to browse the whole website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <React.Fragment>
        <h2 className='md:pl-28 px-12 pt-8 text-3xl font-semibold'>Latest Tools</h2>
        <ProductsList products={toolsOnHomePage} />
      </React.Fragment>
    </>
  )
}