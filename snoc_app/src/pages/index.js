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
              
            </h4>
            
            
            
            <div className="arrow-down"></div>
            <h7 className="scroll-text">Scroll Down</h7>
            
          </div>
          
          
        </div>
        
      </BackgroundImage>
      <NavbarCirles />
      {/* https://www.youtube.com/playlist?list=PLJ1-WavEHjzmhtMsK4Fi46FyWrzbiflJ_ */}
      <TextVideo url="https://www.youtube.com/embed/AX4VAUIWvUE?rel=0&listType=user_uploads&list=School of the Natural Order of Colorado" title="Vitvan - The Power to be Conscious" />
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
