import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  Container,
  
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  CardDeck,
} from "reactstrap"
import "../styles/page_content.scss"

import LargeImage from "../components/largeImage"

const ClassSchedule = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1 className="title">Class Schedule</h1>
      <p style={{ textAlign: "center" }}>
        The School of the Natural Order offers three classes online. The
        classes are taught by students for students. If you are interested in
        joining a class, please fill out the{" "}
        <Link to="/contact" className="link">
          contact
        </Link>{" "}
        form and indicate which class you are interested in.
      </p>
      <CardDeck style={{ padding: "30px" }}>
        <Card >
          <CardBody>
            <CardTitle className="cardtitle">Nine Steps on the Ladder of Development</CardTitle>
            <CardSubtitle className="mb-2 text-muted">by Vitvan</CardSubtitle>
            <CardText>
              Every second and fourth Monday of the month 6:00 pm (MST)
            </CardText>
          </CardBody>
        </Card>
        <Card >
          <CardBody>
            <CardTitle>Gnostic Foundations of the US Government</CardTitle>
            <CardSubtitle className="mb-2 text-muted">by Vitvan</CardSubtitle>
            <CardText>
              Sunday, June 21st, at 9:30 am (MST) This class will be every other
              week (Sundays)
            </CardText>
          </CardBody>
        </Card>
        <Card >
          <CardBody>
            <CardTitle>Practicing "The Work"</CardTitle>
            <CardSubtitle className="mb-2 text-muted">
              by Byron Katie
            </CardSubtitle>
            <CardText>
              Beginning June 10th at 8:00 pm (MST). This class will be every
              other week (Wednesdays)
            </CardText>
          </CardBody>
        </Card>
        <Card >
          <CardBody>
            <CardTitle>A Treatise on Faith</CardTitle>
            <CardSubtitle className="mb-2 text-muted">by Vitvan</CardSubtitle>
            <CardText>
              Beginning June 17th at 8:00 pm (MST). This class will be every
              other week (Wednesdays)
            </CardText>
          </CardBody>
        </Card>
        <Card >
          <CardBody>
            <CardTitle> Expanding States of Self Awareness</CardTitle>
            <CardSubtitle className="mb-2 text-muted">by Vitvan</CardSubtitle>
            <CardText>
            Every Sunday at 12:00 pm (MST)
            </CardText>
          </CardBody>
        </Card>
      </CardDeck>
      <p>Please visit the contact page to sign up for classes </p>
      <h3><Link to="/contact" className="link">
          Contact Us!
        </Link></h3>
      <Container style={{ marginTop: "180px" }}></Container>
    </Layout>
  )
}

export default ClassSchedule
