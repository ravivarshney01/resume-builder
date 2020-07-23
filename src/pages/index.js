import React, { useRef } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactToPrint from "react-to-print"
import Resume from "../components/Resume"
import "../styles/index.css"

const IndexPage = () => {
  const componentRef = useRef()

  return (
    <Layout>
      <SEO title="Home" />
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <div
        style={{
          border: `black solid`,
        }}
      >
        <Resume ref={componentRef} />
      </div>
    </Layout>
  )
}
export default IndexPage
