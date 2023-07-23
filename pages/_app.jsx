import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import db from '../firebase'
import { collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

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

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid);
        getFeaturedTools()
        // ...
      } else {
        signInAnonymously(auth)
          .then(() => {
            console.log("signed In Anonymously!")
            // Signed in..
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode + ': ' + errorMessage)
          });
      }
    });

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