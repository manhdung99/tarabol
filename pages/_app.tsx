import '../styles/index.css'
import dynamic from 'next/dynamic'

const Layout = dynamic(() =>
  import('../components/layout')
)

function MyApp({ Component, pageProps }) {
  return ( 
  <Layout>
  <Component {...pageProps} />
  </Layout>
  ) 
}

export default MyApp
