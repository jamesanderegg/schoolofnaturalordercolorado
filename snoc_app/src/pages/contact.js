import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import SmallImage from "../components/smallImage"

const GridWrapper = styled.div`
  margin: 0 40px;
  display: grid;

  grid-template-columns: 1fr 1fr;
`
const HeaderStyle = styled.h1`
  margin: 170px 0 10px;
`
const LeftWrapper = styled.div`
  display: grid;
  
`
const ClassList = styled.div`
  
`
const Class = styled.div``
const ClassHeader = styled.h4``
const ClassTitle = styled.p`
  margin: 0 20px;
  text-align: start;
  font-weight: bold;
  font-size: small;
`
const ClassSubTitle = styled.p`
  font-size: smaller;
`

const PayPal = styled.div`
  width: 100%;
  align-items: center;
  margin: auto;
`;
const PayPalImage = styled.div`
  max-width: 300px;
  margin:auto;
`;
const FormWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`

const ContactPage = () => {
  const [values, setValue] = useState({
    name: "",
    email: "",
    subject: "",
    mapleSyrup: "",
    message: "",
  })
  const [formSent, setFormSent] = useState(false)
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
        subject: values.subject,
      }),
    }
    fetch("https://www.jamesanderegg.com/snoc_form", requestOptions).then(
      response => {
        if (response.status === 200) {
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
          })
          //set form sent to true and display Success
          setFormSent(true)
        } else {
          //clear form
          setValue({
            name: "",
            email: "",
            subject: "",
            mapleSyrup: "",
            message: "",
          })
        }
      }
    )
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
      <HeaderStyle>Contact us</HeaderStyle>
      <GridWrapper>
        <LeftWrapper>
          <ClassList>
            <ClassHeader>Class List:</ClassHeader>
            <Class>
              <ClassTitle>
                The Natural Order Process". The Yoga Sutras of Patanjali
              </ClassTitle>
              <ClassSubTitle>
                {" "}
                - Classes will resume Monday on February 1, 2021 at 8:30 pm MTN.
              </ClassSubTitle>
            </Class>
            <Class>
              <ClassTitle>"Practice of the Way" by Vitvan.</ClassTitle>
              <ClassSubTitle>
                {" "}
                - Begins Sunday on January 31st at 12:30 am MTN.
              </ClassSubTitle>
            </Class>
            <Class>
              <ClassTitle>"Steps in Self-Unfoldment" by Vitvan.</ClassTitle>
              <ClassSubTitle>
                {" "}
                - Begins Sunday on February 7th at 10:30 am MTN.
              </ClassSubTitle>
            </Class>
            <Class>
              <ClassTitle>"A Treatise of Faith" by Vitvan.</ClassTitle>
              <ClassSubTitle>
                {" "}
                - Presented every Wednesday at 8:30 pm MTN.
              </ClassSubTitle>
            </Class>
          </ClassList>
          <PayPal>
            <PayPalImage>
              <a href="https://www.paypal.com/paypalme/SNOofColorado">
                <SmallImage filename="paypal.png" />
              </a>
            </PayPalImage>
          </PayPal>
        </LeftWrapper>
        <FormWrapper>
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
          {formSent ? <h4>Thank you, your message has been sent!</h4> : null}
          {errors.length !== 0
            ? errors.map((error, i) => (
                <p key={i}>Please fill in the {error} field.</p>
              ))
            : null}
        </FormWrapper>
      </GridWrapper>
    </Layout>
  )
}

export default ContactPage
