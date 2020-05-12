import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => {
  console.log(props.data)
  return(
  <Layout>
    <SEO title="Home" />
    <BackgroundImage 
      className="masthead"
      fluid={ props.data.indexImage.childImageSharp.fluid }
    >
      <div className="black-overlay">
        
        <div className="content-box">
          <h1>Hello</h1>
          <h2>Website under construction. Come back soon!</h2>
        </div>
      </div>
    </BackgroundImage>
  </Layout>
)}

export default IndexPage


export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "longspeak.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;