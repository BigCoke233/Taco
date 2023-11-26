import '@/styles/globals.css'
import '@/styles/yue.css'

//use framer motion to do page transition
import Transition from '../components/Transition';
import '../styles/transition.css'; 

//nprogress
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';

import Head from 'next/head'
import Layout from './layout.js'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div id="tailwindClassInitializer" className="md:px-16" />
      <Transition>
        <Component {...pageProps} />
        <ProgressBar
          height="4px"
          color="#444"
          shallowRouting
        />
      </Transition>
    </Layout>
  )
}