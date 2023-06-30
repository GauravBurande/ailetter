import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import db from '../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";

export default function App({ Component, pageProps }) {

  const router = useRouter();

  const pathName = router.pathname;
  const is404Page = pathName === '/_error'

  const [featuredTools, setFeaturedTools] = useState([])
  const doNotReRender = true;

  useEffect(() => {
    const getFeaturedTools = async () => {
      const q = query(collection(db, "tools"), where("featured", "==", true));

      const querySnapshot = await getDocs(q);

      let featuredTools = []
      querySnapshot.forEach((doc) => {
        featuredTools = [...featuredTools, { ...doc.data() }]
      });
      setFeaturedTools(featuredTools);
    }

    getFeaturedTools()
  }, [doNotReRender])

  return (
    <>
      <section className='relative'>
        <div className="absolute -z-10 inset-0 bg-[url(/images/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,255))]"></div>
        {!is404Page && <Navbar />}
        <Component {...pageProps} featuredTools={featuredTools} />
        {!is404Page && <Footer />}
      </section>
    </>
  )
}