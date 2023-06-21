import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  const pathName = router.pathname;
  const is404Page = pathName === '/_error'
  const noNeedOfHeader = pathName === '/tools/[tool]' || pathName === '/submit'

  return (
    <>
      <section className='relative'>
        <div className="absolute -z-10 inset-0 bg-[url(/images/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,255))]"></div>
        {!is404Page && <Navbar />}
        <Component {...pageProps} />
        {!is404Page && <Footer />}
      </section>
    </>
  )
}