import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  CardDeck } from "reactstrap"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      
        <h1 style={{ marginTop: "190px" }}>Contact us</h1>
        <br />
        <Row style={{margin: "0 100px"}}>
        <Col
            md={7}
            
          >
        <form
          action="https://getform.io/f/f2fb2543-fe30-40bd-9fa6-357da4ab8707"
          method="POST"
          style={{ alignContent:'center',textAlign: "center",
              margin: 'auto'}}
        >
        <h4 >Send us an email</h4>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            size="50"
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            size="50"
          />
          <br />
          <br />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter the subject"
            size="50"
          />
          <br />
          <br />
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Type your Message here. If inquiring about a class, please include the title of the class in your message. "
            cols="50"
            rows="10"
          />
          <br />
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </form>
        <br />
        </Col>
        <Col
            md={5}
            
          >
        
          <h4 style={{textAlign:"center"}}>Class List</h4>
          <CardDeck >
        <Card style={{ width: "18rem" }}>
          <CardBody>
            <CardTitle className="cardtitle">Nine Steps on the Ladder of Development</CardTitle>
            <CardSubtitle className="mb-2 text-muted">by Vitvan</CardSubtitle>
            <CardText>
              Every second and fourth Monday of the month 6:00 pm (MST).
            </CardText>
          </CardBody>
        </Card>
        <Card style={{ width: "18rem" }}>
          <CardBody>
            <CardTitle>Gnostic Foundations of the US Government</CardTitle>
            <CardSubtitle className="mb-2 text-muted">by Vitvan</CardSubtitle>
            <CardText>
              Sunday, June 21st, at 9:30 am (MST). This class will be every other
              week (Sundays).
            </CardText>
          </CardBody>
        </Card>
        <Card style={{ width: "18rem" }}>
          <CardBody>
            <CardTitle>Practicing "The Work"</CardTitle>
            <CardSubtitle className="mb-2 text-muted">
              by Byron Katie
            </CardSubtitle>
            <CardText>
              Beginning June 10th at 8:00 pm (MST). This class will be every
              other week (Wednesdays).
            </CardText>
          </CardBody>
        </Card>
        <Card style={{ width: "18rem" }}>
          <CardBody>
            <CardTitle>A Treatise on Faith</CardTitle>
            <CardSubtitle className="mb-2 text-muted">by Vitvan</CardSubtitle>
            <CardText>
              Beginning June 17th at 8:00 pm (MST). This class will be every
              other week (Wednesdays).
            </CardText>
          </CardBody>
        </Card>
        <Card style={{ width: "18rem" }}>
          <CardBody>
            <CardTitle> Expanding States of Self Awareness</CardTitle>
            <CardSubtitle className="mb-2 text-muted">by Vitvan</CardSubtitle>
            <CardText>
            Every Sunday at 12:00 pm (MST)
            </CardText>
          </CardBody>
        </Card>
      </CardDeck>
        </Col>
        </Row>
    </Layout>
  )
}

export default ContactPage
