import React from "react"

import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
} from "reactstrap"
import RoundImage from "../components/roundImage"

import "../styles/navbarCircles.scss"
import SmallImage from "./smallImage"

const NavbarCircles = () => (
 
 <>
    <Row className="circle-links">
        <ul>
            <li>
            
            <NavLink href="/meditation"><RoundImage filename="sno-baker.png" /></NavLink>
            <NavLink href="/meditation"><h6>Meditation</h6></NavLink>
            </li>
            <li>
            <NavLink href="/contact"><RoundImage filename="meditation.png" /></NavLink>
            <NavLink href="/contact"><h6>Contact</h6></NavLink>
            </li>
            </ul>
            
            
            
            <ul>
            <li>
            <a href="https://www.sno.org/books-and-mp3s" target="_blank" rel="noopener noreferrer"><RoundImage filename="young-vitvan.png" /></a>
            <NavLink href="/meditation"><h6>SNO Media</h6></NavLink>
            </li>
            <li>
            <NavLink href="/about"><RoundImage filename="color-logo.png" /></NavLink>
            <NavLink href="/about"><h6>About</h6></NavLink>
            </li>
        </ul>
        
    </Row>
    
    
 
 </>
)
export default NavbarCircles

{
  /* <Container fluid="md">
        <Row className="topic">
          <Col
            md={3}
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <a href="https://www.sno.org/" target="_blank" rel="noopener noreferrer">
              <RoundImage filename="sno-baker.png" />
            </a>
            <a href="https://www.sno.org/" target="_blank"rel="noopener noreferrer">
              <h5>SNO - Baker</h5>
            </a>

            <a href="https://www.sno.org/meditation-practices" target="_blank" rel="noopener noreferrer">
              <RoundImage filename="meditation.png" />
            </a>
            <a href="https://www.sno.org/meditation-practices" target="_blank" rel="noopener noreferrer">
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

          <a href="https://www.sno.org/single-audio-lessons" target="_blank" rel="noopener noreferrer">
              <RoundImage filename="young-vitvan.png" />
            </a>
            <a href="https://www.sno.org/single-audio-lessons" target="_blank" rel="noopener noreferrer">
              <h5>Media Files</h5>
            </a>
            <a href="https://www.insighttimer.com" target="_blank" rel="noopener noreferrer">
              <RoundImage filename="insighttimer.png" />
            </a>
            <a href="https://www.insighttimer.com" target="_blank" rel="noopener noreferrer">
              <h5>Insight Timer</h5>
            </a>
            
          </Col>
        </Row>
      </Container> */
}
