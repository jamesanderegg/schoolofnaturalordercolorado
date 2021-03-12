import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
  Row,
  Col,
} from "reactstrap"
import styled from 'styled-components';
const StyledLink = styled(props => <Link {...props} />)`
  color:  rgb(252, 221, 155);
`;
const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  

 
  const toggle = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <div>
      <Navbar fixed="top" light expand="lg">
        <Row style={{ width: "100%" }}>
          <Col
            xs={9}
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <StyledLink className="site-title" to="/">{siteTitle}</StyledLink>
          </Col>
          <Col
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <NavbarToggler onClick={toggle} />
          </Col>
        </Row>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <StyledLink to="/">Home</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/about">About</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/schedule">Class Schedule</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/media">Media</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/meditation">Meditation</StyledLink>
            </NavItem>
              
            
            <NavItem>
              <StyledLink to="/contact">Contact</StyledLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
