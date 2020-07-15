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
        <div className="coverOverlay-div">
          <div className="content-box">
            <h1>The School of The Natural Order of Colorado</h1>
            
            <h3 style={{ marginTop: "60px" }}>The Teachings of Vitvan</h3>
            
            

            
            
          </div>
          
          
        </div>
        
      </BackgroundImage>
      <NavbarCirles />
      {/* https://www.youtube.com/playlist?list=PLJ1-WavEHjzmhtMsK4Fi46FyWrzbiflJ_ */}
      <TextVideo url="https://www.youtube.com/embed/AX4VAUIWvUE?rel=0" title="Vitvan - The Power to be Conscious" />
      <Footer />
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "longs-peak1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
