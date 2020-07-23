import React, { useState } from "react"

import { NavLink } from "reactstrap"
import RoundImage from "../components/roundImage"
import SmallRoundImage from "../components/smallRoundImage"

import "../styles/navbarCircles.scss"
import SmallImage from "./smallImage"

const NavbarCircles = () => {
  const [mediaOpen, setMediaOpen] = useState(false)

  const toggleMedia = () => {
    setMediaOpen(isOpen => !isOpen)
    
  }
  return (
    <ul className="circle-links">
      <li>
        <NavLink href="/schedule">
          <h5>Class Schedule</h5>
        </NavLink>
        <NavLink href="/schedule">
          <RoundImage filename="vitvan-portrait.png" />
        </NavLink>
        
      </li>
      <li>
        <NavLink href="/contact">
          <h5>Contact</h5>
        </NavLink>
        <NavLink href="/contact">
          <RoundImage filename="snow-peaks.png" />
        </NavLink>
      </li>

      <li>
        <NavLink href="/about">
          <h5>About</h5>
        </NavLink>
        <NavLink href="/about">
          <SmallImage filename="black-logo.png" />
        </NavLink>
      </li>

      <li>
        
        {!mediaOpen ? <div className="dd-wrapper">
          <NavLink href="#" onClick={toggleMedia}>
            <h5>SNO Media</h5>
          </NavLink>
          <NavLink href="#" onClick={toggleMedia}>
            <RoundImage filename="rainbow.png" />
          </NavLink>
        </div> : (<div className="dd-list">
          <ul>
          <NavLink href="#" onClick={toggleMedia}><h5>Media</h5></NavLink>
            <li>
              <NavLink href="/media">
                <h5>Colorado</h5>
              </NavLink>
              <NavLink href="/media">
              <SmallRoundImage filename="colorado.png" />
              </NavLink>
              <h6>snoc.org</h6>
            </li>
            <li>
              <NavLink href="https://www.sno.org/books-and-mp3s">
                <h5>Nevada</h5>
              </NavLink>
              <NavLink href="https://www.sno.org/books-and-mp3s">
              <SmallRoundImage filename="rainbow.png" />
              </NavLink>
              <h6>sno.org</h6>
            </li>
          </ul>
        </div>)}
        
      </li>
      <li>
        <NavLink href="/meditation">
          <h5>Meditation</h5>
        </NavLink>
        <NavLink href="/meditation">
          <RoundImage filename="lightning.png" />
        </NavLink>
      </li>
    </ul>
  )
}
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
