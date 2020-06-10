import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"

import SEO from "../components/seo"

import NavbarCirles from "../components/navbarCircles"

import Footer from "../components/footer"
import TextVideo from "../components/textVideo"


const IndexPage = props => {
  return (
    <>
      <SEO title="Home" />
      <BackgroundImage
        className="masthead"
        fluid={props.data.indexImage.childImageSharp.fluid}
      >
        <div className="black-overlay">
          <div className="content-box">
            <h1>The School of The Natural Order</h1>
            <h2>of Colorado</h2>
            <h3>The Teachings of Vitvan</h3>
            <h4 style={{ marginTop: "30px" }}>
              Changing Attitudes Towards Everything
            </h4>
            
            
            
            {/* <div className="arrow-down"></div>
            <h7>Scroll Down</h7> */}
          </div>
          
          
        </div>
        
      </BackgroundImage>
      <NavbarCirles />
      
      <TextVideo url="https://www.youtube.com/embed/AX4VAUIWvUE" title="Vitvan - The Power to be Conscious" />
      <Footer />
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "longs-peak.png" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
