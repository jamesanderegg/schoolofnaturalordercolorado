import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const TopParagraph = styled.div`
  text-align:center;
  font-size: large;
  width: 80%;
  margin: 20px auto;
`;

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
    
    margin: 50px 100px;
`;

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
          <ClassTitle>Monday night Class:</ClassTitle>
          <ClassSubTitle className="ClassTitle">
            Classes will resume on February 1, 2021 at 8:30 pm MTN.
          </ClassSubTitle>
          <ClassText>
            We will be studying Volume II of{" "}
            <strong>
              "The Natural Order Process". The Yoga Sutras of Patanjali.
            </strong>{" "}
            The class will start and be hosted every other Monday.
          </ClassText>
        </Class>
        <Class>
          <ClassTitle>Sunday Class:</ClassTitle>
          <ClassSubTitle>Begins on January 31st at 12:30 am MTN.</ClassSubTitle>
          <ClassText>
            <strong>"Practice of the Way"</strong> by Vitvan. The class will be
            hosted every Sunday.
          </ClassText>
        </Class>
        <Class>
          <ClassTitle>Sunday Class:</ClassTitle>
          <ClassSubTitle>Begins on February 7th at 10:30 am MTN.</ClassSubTitle>

          <ClassText>
            <strong>"Steps in Self-Unfoldment"</strong> by Vitvan. The class
            will be hosted every other Sunday.
          </ClassText>
        </Class>
        <Class>
          <ClassTitle>Wednesday Class:</ClassTitle>
          <ClassSubTitle>
            Presented every Wednesday at 8:30 pm MTN.
          </ClassSubTitle>
          <ClassText>
            <strong>"A Treatise of Faith"</strong> by Vitvan.
          </ClassText>
        </Class>
      </ClassWrapper>
      <Announcment><strong>** Special Class Announcement:</strong> Beginning Sunday, 2/07/2021, the SNOC will be offering "Steps in Self-Unfoldment".
This class is considered a "beginner's" course and particularly appropriate as an introduction to the SNO teachings/"Gnosis"</Announcment>
      <p style={{ margin: "15px" }}>
        Please visit the contact page to sign up for classes{" "}
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
