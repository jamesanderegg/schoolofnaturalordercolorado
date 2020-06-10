import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "reactstrap"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      
        <h1 style={{ marginTop: "190px" }}>Contact us</h1>
        <br />
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
            placeholder="Type your Message here"
            cols="50"
            rows="10"
          />
          <br />
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </form>
      
    </Layout>
  )
}

export default ContactPage
