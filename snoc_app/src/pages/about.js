import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Col, Row } from "reactstrap"
import Members from '../components/Members'
import "../styles/page_content.scss"

import LargeImage from "../components/largeImage"
import SmallImage from "../components/smallImage"
const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <Row style={{ marginTop: "120px" }}>
          <Col
            md={5}
            style={{
              padding: "40px 0px",
              textAlign: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <LargeImage filename="black-logo.png" />

            <br />

            <h4 style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {" "}
              Sortem Suam Quisque Amet
            </h4>
            <h6 style={{ fontStyle: "italic" }}>
              ("Let each one love his own destiny")
            </h6>
          </Col>
          <Col
            md={7}
            style={{
              padding: "40px 0px",
              textAlign: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <p>
              The eagle, with a serpent coiled around its neck has been the
              school’s logo since its inception as the School of the Sacred
              Science in the 1920’s.
            </p>
            <ul>
              <p style={{ fontWeight: "bold" }}>
                The serpent and eagle are ancient symbols:
              </p>
              <li>
                --The serpent representative of wisdom; its coiled form
                suggestive of the power latent in the sacral center (the Greeks
                called it the Power of the Christos).
              </li>
              <li>
                --The eagle represents ‘spiritual’ vision. It was supposed to be
                the only creature that could look directly into the sun.
              </li>
            </ul>
            <p style={{fontStyle: "italic"}}>
              We use these symbols as our logo: the eagle (‘spiritual’ vision)
              carrying the serpent (Christos Power) to “great heights”, the
              ascent of the force to the crown center.
            </p>
          </Col>
        </Row>
        <br />
        
        <div className="wrapper-right">
          <LargeImage filename="vitvan-at-table.png" />
          <h4 style={{ fontWeight: "bold" }}>Vitvan</h4>

        </div>
        <h3 style={{ fontWeight: "bold", marginBottom: "20px" }}>
          The Schools Beginning
        </h3>
        <p
          style={{
            margin: "30px 0",
            textAlign: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          The School began in Los Angeles in 1922 and at that time was called
          the School of the Sacred Science... It was founded by Ralph M. deBit
          who was born in Kansas in 1883. He was raised in a Methodist family
          with the Christian bible as his early religious training, and later as
          a young man, he studied Christian Science and various metaphysical
          teachings. He became a forest ranger in Idaho and said that it was
          there, in 1907, that he began to seriously undertake his self
          development with the study and practice of Eastern philosophy. It was
          not long afterwards, in Seattle, that deBit met a man named A.K.
          Mozumdar who became his teacher. He spent seven years of work and
          study with him.
        </p>
        <p>
          Toward the last half of the 19th century, there was a reappearance of
          the pre-Christian gnosis and the Wisdom Teaching as it had been
          presented in the Occident. It was upon this tradition that the School
          was based. It was also correlated with deBit's perception and insight
          of Eastern teachings as he learned from Mozumdar, The School of the
          Sacred Science continued throughout the 1920s and '30s, and during
          this time, deBit came to be known as Vitvan, which in Sanskrit means
          "one who knows." He traveled extensively, lecturing from coast to
          coast and became well known among metaphysical circles of the time.
          The School moved to various locations, and during the '30s established
          in Colorado. It was near the mountain town of Bailey that the School
          built a retreat called the Ashrama from which Vitvan would leave
          during the winter to travel and lecture, and return to in the summer
          to teach seminars and classes.
        </p>
        <div className="wrapper-left">
          <LargeImage filename="dr-john.png" />
          <div className="break">
          <h4 style={{ fontWeight: "bold" }}>Dr. John Gozzi</h4>
            <h6 style={{fontStyle: "italic"}}>
              The Colorado Chapter of the School of the Natural Order was
              founded by Dr. John Gozzi in 1978, one of Vitvan's longtime and
              closest students.
            </h6>
          </div>
        </div>
        <p>
          During this period of his life, Vitvan was growing increasingly
          dissatisfied with the presentation of the Wisdom Teachings in the
          older metaphysical, occult and mystical framework that he felt did not
          fit the emerging consciousness of the new cycle now dawning. He felt
          it had to be empirically correlated with findings of modern science,
          and that this would be the foundation for a new presentation of the
          ancient gnosis.
        </p>
        <p>
          After reading "Science and Sanity" by Alfred Korzybski, the creator of
          general semantics, he felt he had found the key he had been looking
          for----a method for rearticulating the Wisdom Teachings in language
          and perception suitable for and acceptable to modern man. In 1938, he
          went to Chicago and studied with Korzybski. He subsequently
          reorganized the School as the School of the Natural Order, and began
          to completely rewrite everything he had previously written to conform
          with the new structure he perceived.
        </p>

        <p>
          The current literature of the School of the Natural Order was either
          written as lessons in the 1940s, or transcribed from lectures that
          were recorded from 1952 until 1963. The School also moved to
          California and finally to Nevada. Having been a teacher of the ancient
          gnosis for over 50 years and completing his life's work of presenting
          it in a scientific framework, Vitvan passed on in 1964 at the age of
          80.
        </p>
        <br />
        <h6 style={{fontStyle: "italic", textAlign: 'center', margin: '20px', padding: "20px"}}>
          The School of the Natural Order presently has two established
          locations: one in Baker, Nevada, and one in Denver, Colorado. There
          are also study groups in California and around the country.
        </h6>
      <Members />
      <div className="paypal">
      <a href="https://www.paypal.com/paypalme/SNOofColorado">
      <SmallImage filename="paypal.png" />
      </a>
      </div>
      </Container>
      
    </Layout>
  )
}

export default AboutPage
