import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const TopParagraph = styled.div`
  text-align: center;
  font-size: large;
  width: 90%;
  margin: 20px auto;
`

const ClassWrapper = styled.div`
  width: 89%;
  margin: auto;
`

const Class = styled.div`
  padding: 10px;
`

const ClassTitle = styled.div`
  font-size: large;
  font-weight: bold;
`
const ClassSubTitle = styled.div`
  font-weight: bold;
  padding: 10px;
`
const ClassText = styled.div`
  margin-left: 30px;
`

const Announcment = styled.div`
  font-size: larger;
  text-align: center;
  margin: 50px 150px;
`

const ClassSchedule = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1 className="title">Class Schedule</h1>
      <TopParagraph>
        The School of the Natural Order offers four classes online. The classes
        are taught by students for students. If you are interested in joining a
        class, please fill out the{" "}
        <Link to="/contact" className="link">
          contact
        </Link>{" "}
        form and indicate which class you are interested in.
      </TopParagraph>
      
      <ClassWrapper>
        <Class>
          <ClassTitle>Monday Class:</ClassTitle>
          <ClassSubTitle className="ClassTitle">
            Begins on February 1, 2021 at 7:30 pm MTN.
          </ClassSubTitle>
          <ClassText>
            <strong>
              "The Natural Order Process, Volume II, The Yoga Sutras of Patanjali" 
            </strong>{" "}
              by Vitvan.
          </ClassText>
          <ClassText>The class will be hosted every other Monday</ClassText>
          
        </Class>
        <Class>
          <ClassTitle>Sunday Class:</ClassTitle>
          <ClassSubTitle>Begins on January 31st, 2021 at 11:30AM MTN.</ClassSubTitle>
          <ClassText>
            <strong>"Practice of the Way"</strong> by Vitvan. 
          </ClassText>
          <ClassText>The class will be
            hosted every Sunday.</ClassText>
        </Class>
        <Class>
          <ClassTitle>Sunday Class:</ClassTitle>
          <ClassSubTitle>Begins on February 7th, 2021 at 9:30AM MTN.</ClassSubTitle>

          <ClassText>
            <strong>"Steps in Self-Unfoldment"</strong> by Vitvan. The class
            will be hosted every other Sunday.
          </ClassText>
        </Class>
        <Class>
          <ClassTitle>Wednesday Class:</ClassTitle>
          <ClassSubTitle>
            Begins on March 10th, 2021 at 7:30PM MTN. The class will be hosted every other Wednesday.
          </ClassSubTitle>
          <ClassText>
            <strong>"Teachers' Manual"</strong> by Vitvan.
          </ClassText>
          <ClassText>This class is closed to new participants.</ClassText>
        </Class>
      </ClassWrapper>
      
      <p style={{ margin: "15px" }}>
        <strong>Please visit the contact page to sign up for classes!</strong>
      </p>
      <h3>
        <Link to="/contact" className="link">
          Contact Us!
        </Link>
      </h3>
    </Layout>
  )
}

export default ClassSchedule
