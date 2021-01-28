import React, { useState } from "react"

import { Link } from "gatsby"
import RoundImage from "../components/roundImage"
import SmallRoundImage from "../components/smallRoundImage"
import "../styles/navbarCircles.scss"
import FrontLogo from "./frontLogo"

const NavbarCircles = () => {
  const [mediaOpen, setMediaOpen] = useState(false)

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

      <div className="item about">
        <Link to="/about">
          <h5 className="link-item">About</h5>
        </Link>
        <Link to="/about">
          <FrontLogo filename="black-logo.png" />
        </Link>
      </div>

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
          <div className="dd-list">
            <ul>
              <Link to="#" onClick={toggleMedia}>
                <h5 className="media-title-item">Media</h5>
              </Link>
              <div className="media-grid">
                <div className="media-item">
                  <Link to="/media">
                    <h5 className="link-item">Colorado</h5>
                  </Link>
                  <Link to="/media">
                    <SmallRoundImage filename="colorado.png" />
                  </Link>
                  <h6>snoc.org</h6>
                </div>
                <div className="media-item">
                  <a href="https://www.sno.org/books-and-mp3s">
                    <h5 className="link-item">Nevada</h5>
                    <SmallRoundImage filename="rainbow.png" />
                    <h6>sno.org</h6>
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
