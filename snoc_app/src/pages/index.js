import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
import { Container, Row, Col } from "reactstrap"

import "../styles/home.scss"

const IndexPage = props => {
  console.log(props.data)
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage
        className="masthead"
        fluid={props.data.indexImage.childImageSharp.fluid}
      >
        <div className="black-overlay">
          <div className="content-box">
            <h1>The Teachings of Vitvan</h1>
            <h3>The Power to be Conscious</h3>

            <h3>WEBSITE UNDERCONSTRUCTION</h3>
          </div>
        </div>
      </BackgroundImage>
      <Container fluid="md" >
        <Row>
          <Col md={5} style={{ textAlign: "center" }}>
            <h3>The Power to Be Conscious</h3>
            <p>
              “Do you know that the most important, fundamental, basic Fact
              about yourself is the Power to be Conscious?
            </p>
            <p>
              {" "}
              With what power do you imagine? With what power do you conceive?
              With what power do you formulate the neural responses of stimuli
              received or registered into images, pictures, etc.? With what
              power do you give values, meanings (and react thereto) etc.?
            </p>
            <p>
              {" "}
              Call that Power as you wish, label it as you like…with what power
              do you reflect, ruminate, contemplate, etc.? For the sake of
              communication we refer to That….. by whatever name you call it
              …..as the Power to Be Conscious’
            </p>
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
            <Video
              videoSrcURL={"https://www.youtube.com/embed/AX4VAUIWvUE"}
              videoTitle={"Vitvan - The Power to be Conscious"}
            />
          </Col>
        </Row>
        
      </Container>
    </Layout>
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
