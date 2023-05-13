import Head from 'next/head'
import Header from '../components/Header'
import ProductsList from '../components/ProductsList'
import aitools from '../ai_tools'

export default function Home() {

  return (
    <>
      <Head>
        <title>browserAI</title>
        <meta name="description" content="browserAI reads the website content, tells you everything about the site in short to save your precious time little by little and the headache to browse the whole website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header />

        <ProductsList products={aitools} />
      </div>
    </>
  )
}