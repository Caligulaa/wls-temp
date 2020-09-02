import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Gallery from "../components/Gallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Gallery />
    <h2 className="floatCenter">COMING SOON</h2>
  </Layout>
)

export default IndexPage
