import React from "react"
// import { Link } from "gatsby"
import '../styles/styles.scss'
import Header from '../components/header'
import Banner from '../components/banner'
import AboutBlurb from '../components/aboutBlurb'




const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  //   <Link to="/page-3/">Go to page 3</Link>
  //   <Link to="/page-4/">Go to page 4</Link>

  // </Layout>
  <div>
    <Header />
    <Banner />
    <AboutBlurb />
  </div>
)

export default IndexPage

