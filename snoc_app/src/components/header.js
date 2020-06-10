import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Row,
  Col,
} from "reactstrap"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <div>
      <Navbar fixed="top" light expand="sm">
        <Row>
        <Col
            xs={9}
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignSelf: "center",
              
            }}>
            <NavbarText>{siteTitle}</NavbarText>
          </Col>
          <Col style={{
              textAlign: "center",
              justifyContent: "center",
              alignSelf: "center",}}>
            <NavbarToggler onClick={toggle} />
          </Col>
        </Row>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/meditation">Meditation</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/schedule">Class Schedule</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
