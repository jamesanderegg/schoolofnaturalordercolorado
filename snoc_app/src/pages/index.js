import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link } from "react-router-dom"
import Video from "../components/video"
import { Container, Row, Col } from "reactstrap"

import RoundImage from "../components/roundImage"

import "../styles/home.scss"

const IndexPage = props => {
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
            <p style={{ marginTop: "15px" }}>
              Changing Attitudes Towards Everything
            </p>
          </div>
        </div>
      </BackgroundImage>
      <Container fluid="md">
        <Row>
          <Col
            md={3}
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <a href="https://www.sno.org/" target="_blank">
              <RoundImage filename="sno-baker.png" />
            </a>
            <a href="https://www.sno.org/" target="_blank">
              <h5>SNO - Baker</h5>
            </a>

            <a href="https://www.sno.org/meditation-practices" target="_blank">
              <RoundImage filename="meditation.png" />
            </a>
            <a href="https://www.sno.org/meditation-practices" target="_blank">
              <h5>Meditation Practices</h5>
            </a>
          </Col>
          <Col
            md={6}
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <h2>Living in an Energy World</h2>
            <Video
              videoSrcURL={"https://www.youtube.com/embed/QmphXFF8JGg"}
              videoTitle={"Vitvan - The Power to be Conscious"}
            />
          </Col>
          <Col
            md={3}
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >

          <a href="https://www.sno.org/single-audio-lessons" target="_blank">
              <RoundImage filename="vitvan-media.png" />
            </a>
            <a href="https://www.sno.org/single-audio-lessons" target="_blank">
              <h5>Media Files</h5>
            </a>
            <a href="https://www.insighttimer.com" target="_blank">
              <RoundImage filename="insighttimer.png" />
            </a>
            <a href="https://www.insighttimer.com" target="_blank">
              <h5>Insight Timer</h5>
            </a>
            
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
