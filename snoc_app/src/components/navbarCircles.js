import React, { useState } from "react"

import { Link } from "gatsby"
import RoundImage from "../components/roundImage"
import SmallRoundImage from "../components/smallRoundImage"
import "../styles/navbarCircles.scss"
import FrontLogo from "./frontLogo"

const NavbarCircles = () => {
  const [mediaOpen, setMediaOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  const toggleAbout = e => {
    e.preventDefault()
    console.log("about")
    setAboutOpen(isOpen => !isOpen)
  }

  const toggleMedia = e => {
    e.preventDefault()
    setMediaOpen(isOpen => !isOpen)
  }
  return (
    <div className="circles-grid">
      <div className="item schedule">
        <Link to="/schedule">
          <h5 className="link-item">Class Schedule</h5>
        </Link>
        <Link to="/schedule">
          <RoundImage filename="vitvan-portrait.png" />
        </Link>
      </div>
      <div className="item contact">
        <Link to="/contact">
          <h5 className="link-item">Contact</h5>
        </Link>
        <Link to="/contact">
          <RoundImage filename="snow-peaks.png" />
        </Link>
      </div>

      {!aboutOpen ? (
        <div className="item aboutItems">
          <Link to="#" onClick={toggleAbout}>
            <h5 className="link-item">About</h5>
          </Link>
          <Link to="#" onClick={toggleAbout}>
            <FrontLogo filename="black-logo.png" />
          </Link>
        </div>
      ) : (
        <div>
        <Link to="#" onClick={toggleAbout}>
                <h5 className="item">About</h5>
              </Link>
          <ul className="aboutList">
          
            <li className="aboutItem">
              <Link className="item" to="/introduction">Introduction</Link>
            </li>
            <li className="aboutItem">
              <Link className="item" to="/about">About</Link></li>
            <li className="aboutItem">
              <Link className="item" to="/journal">CATE Journal</Link></li>
          </ul>
        </div>
      )}

      <div className="item mediaItems">
        {!mediaOpen ? (
          <div className="media-title-item">
            <Link to="#" onClick={toggleMedia}>
              <h5 className="link-item">SNO Media</h5>
            </Link>
            <Link to="#" onClick={toggleMedia}>
              <RoundImage filename="rainbow.png" />
            </Link>
          </div>
        ) : (
          <div>
              <Link to="#" onClick={toggleMedia}>
                <h5 className="media-title-item">Media</h5>
              </Link>
            <ul>
              <div className="media-grid">
                <div className="media-item">
                  <Link to="/media">
                    <h5 className="link-item">Colorado</h5>
                  </Link>
                  <Link to="/media">
                    <SmallRoundImage filename="colorado.png" />
                  <h6>snoc.org</h6>
                  </Link>
                </div>
                <div className="media-item">
                  <a href="https://www.sno.org/books-and-mp3s">
                    <h5 className="link-item">Nevada</h5>
                    <SmallRoundImage filename="rainbow.png" />
                    <h6 className="item">sno.org</h6>
                  </a>
                </div>
              </div>
            </ul>
          </div>
        )}
      </div>
      <div className="item meditation">
        <Link to="/meditation">
          <h5 className="link-item">Meditation</h5>
        </Link>
        <Link to="/meditation">
          <RoundImage filename="lightning.png" />
        </Link>
      </div>
    </div>
  )
}
export default NavbarCircles
