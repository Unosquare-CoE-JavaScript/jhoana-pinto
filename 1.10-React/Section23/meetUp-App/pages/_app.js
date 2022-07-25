import '../styles/globals.css'
import Layout from '../components/layout/Layout'
//this is the root component

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
