import React from "react"

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTwitter, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center">The School of The Natural Order</h4>
    <p className="text-center"> Follow us on Social Media</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://www.facebook.com/School-of-the-Natural-Order-Colorado-499911493409876/"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} className="fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCHKIeVeZA3O9Zmnm27Ywddg"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube"
          >
            <FontAwesomeIcon icon={faYoutube} className="fa-2x" />
          </a>
        </li>
        
        
      </ul>
    </div>
    <p className="text-center"> &#x00A9; 2020 The School of Natural Order</p>
  </div>
)
export default Footer
