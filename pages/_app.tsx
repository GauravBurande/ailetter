import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  const pathName = router.pathname;
  const is404Page = pathName === '/_error'
  return (
    <>
      <div className='relative'>
        <div className="absolute -z-10 inset-0 bg-[url(/images/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,255))]"></div>
        {!is404Page && <Header />}
        <Component {...pageProps} />
      </div>
    </>
  )
}
