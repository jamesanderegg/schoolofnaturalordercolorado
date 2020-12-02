import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  CardDeck,
} from "reactstrap"



const ContactPage = () => {
  const [values, setValue] = useState({
    name: "",
    email: "",
    subject: "",
    mapleSyrup: "",
    message: "",
  })
  const [formSent, setFormSent] = useState(false);
  const [errors, setErrors] = useState([])
  
  
  function updateValue(e) {
    // check if its a number and convert
    let { value } = e.target
    if (e.target.type === "number") {
      value = parseInt(e.target.value)
    }

    setValue({
      ...values,
      [e.target.name]: value,
    })
  }

  async function handleSubmit(values) {
    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        name: values.name,
        email: values.email,
        message: values.message,
        subject: values.subject}),
    };
    fetch('https://www.jamesanderegg.com/snoc_form', requestOptions).then(response => {
      
      if(response.status === 200){
        //form successful
        //clear errors
        setErrors([])
        //clear form
        setValue({
          name: "",
          email: "",
          subject: "",
          mapleSyrup: "",
          message: "",
        });
        //set form sent to true and display Success
        setFormSent(true);
      }else{
        
        //clear form
        setValue({
          name: "",
          email: "",
          subject: "",
          mapleSyrup: "",
          message: "",
        });

      }
    })
  }

  const checkForm = e => {
    e.preventDefault()
    let errors = []
    // check if maple syrup is empty
    // check if other fields are empty

    Object.keys(values).map(value => {
      //catch the honey pot and check if it is empty. if not empty === bad
      if (value === "mapleSyrup") {
        if (values[value] !== "") {
          
          // Do Not submit form
          errors.push(value)
        }
        return
      } else {
        //check for empty values
        if (values[value] === "") {
          errors.push(value)
        }
      }
    })
    if (errors.length !== 0) {
      //if errors do not submit form
      setErrors(errors)
      
    } else {
      setErrors(errors)
      handleSubmit(values)
    }
  }

  return (
    <Layout>
      <SEO title="Contact" />

      <h1 style={{ marginTop: "190px" }}>Contact us</h1>
      <br />
      <Row style={{ margin: "0 10px" }}>
        <Col md={6}>
          <form
            onSubmit={e => checkForm(e)}
            style={{
              alignContent: "center",
              textAlign: "center",
              margin: "auto",
            }}
          >
            <h4>Send us an email</h4>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              placeholder="Enter your name"
              style={{ width: "100%" }}
              onChange={updateValue}
            />
            <br />
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={values.email}
              style={{ width: "100%" }}
              onChange={updateValue}
            />
            <br />
            <br />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter the subject"
              value={values.subject}
              style={{ width: "100%" }}
              onChange={updateValue}
            />
            <br />
            <input
              type="mapleSyrup"
              name="mapleSyrup"
              id="mapleSyrup"
              value={values.mapleSyrup}
              onChange={updateValue}
              className="mapleSyrup"
            />
            <br />
            <textarea
              name="message"
              id="message"
              placeholder="Type your Message here. If inquiring about a class, please include the title of the class in your message. "
              rows="10"
              value={values.message}
              style={{ width: "100%" }}
              onChange={updateValue}
            />
            <br />
            <button className="submit-button" type="submit">
              Send
            </button>
          </form>
          {formSent? (<h4>Thank you, your message has been sent!</h4>): (null)}
          {errors.length !== 0
            ? errors.map((error, i) => (
                <p key={i}>Please fill in the {error} field.</p>
              ))
            : null}
          <br />
        </Col>
        <Col md={6}>
          <h4 style={{ textAlign: "center" }}>Class List</h4>
          <CardDeck>
            <Card>
              <CardBody>
                <CardTitle className="cardtitle">
                  Nine Steps on the Ladder of Development
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted">
                  by Vitvan
                </CardSubtitle>
                <CardText>
                  Every second and fourth Monday of the month 6:00 pm (MST).
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle>Gnostic Foundations of the US Government</CardTitle>
                <CardSubtitle className="mb-2 text-muted">
                  by Vitvan
                </CardSubtitle>
                <CardText>
                  Sunday, June 21st, at 9:30 am (MST). This class will be every
                  other week (Sundays).
                </CardText>
              </CardBody>
            </Card>
            <Card>
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
            <Card>
              <CardBody>
                <CardTitle>A Treatise on Faith</CardTitle>
                <CardSubtitle className="mb-2 text-muted">
                  by Vitvan
                </CardSubtitle>
                <CardText>
                  Beginning June 17th at 8:00 pm (MST). This class will be every
                  other week (Wednesdays).
                </CardText>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle> Expanding States of Self Awareness</CardTitle>
                <CardSubtitle className="mb-2 text-muted">
                  by Vitvan
                </CardSubtitle>
                <CardText>Every Sunday at 12:00 pm (MST)</CardText>
              </CardBody>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Layout>
  )
}

export default ContactPage
