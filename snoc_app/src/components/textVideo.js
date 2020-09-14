import React from "react"
import Video from "../components/video"
import { Row, Col, Container } from "reactstrap"


const TextVideo = ({ url, title }) => (
  <Container>
  <Row>
          <Col md={6} style={{ textAlign: "center", justifyContent:"center", alignSelf: "center"}}>
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
          <Col md={6} style={{ textAlign: "center", justifyContent:"center", alignSelf: "center"}}>
            <Video
              videoSrcURL={url}
              videoTitle={title}
            />
          </Col>
        </Row>
        </Container>
)
export default TextVideo

