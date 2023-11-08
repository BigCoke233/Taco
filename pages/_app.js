import '@/styles/globals.css'
import '@/styles/yue.css'

import Layout from './layout.js'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
