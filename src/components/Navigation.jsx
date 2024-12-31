import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./../App.css";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => setExpanded(!expanded);

  return (
    <Navbar
      expanded={expanded}
      onToggle={handleToggle}
      collapseOnSelect
      className="nav-bar"
      expand="xl"
      variant="dark"
      bg="dark"
    >
      <Container>
        <Link className="logo-link" to="/">
          <Navbar.Brand className="logo-brand">
            <img
              className="logo-img"
              src="/assets/logo.png"
              alt="Junglebeauty logo"
            />
            <h1 className="logo-text">JungleBeauty Bengals</h1>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="nav-link" onClick={handleToggle} to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" onClick={handleToggle} to="/queens">
              Queens
            </NavLink>
            <NavLink className="nav-link" onClick={handleToggle} to="/kings">
              Kings
            </NavLink>
            <NavLink className="nav-link" onClick={handleToggle} to="/kittens">
              Kittens
            </NavLink>
            <NavLink className="nav-link" onClick={handleToggle} to="/news">
              News
            </NavLink>
            <NavLink className="nav-link" onClick={handleToggle} to="/about-us">
              About
            </NavLink>
            <NavLink className="nav-link" onClick={handleToggle} to="/contact">
              Contact
            </NavLink>
            <NavDropdown className="nav-dropdown" title="Info">
              <NavDropdown.Item as={Link} onClick={handleToggle} to="/faq">
                FAQ
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} onClick={handleToggle} to="/articles">
                Our Articles
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                onClick={handleToggle}
                to="/about-bengals"
              >
                About the Bengal Breed
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="nav-dropdown" title="How to buy">
              <NavDropdown.Item
                as={Link}
                onClick={handleToggle}
                to="/why-choose-junglebeauty"
              >
                Why choose JungleBeauty
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                onClick={handleToggle}
                to="/buy-sell-agreement"
              >
                Buy-Sell Agreement
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} onClick={handleToggle} to="/price">
                Price
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                onClick={handleToggle}
                to="/preparing-for-coming-kitten"
              >
                How to be ready for coming kitten
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                onClick={handleToggle}
                to="/visit-junglebeauty"
              >
                How to visit JungleBeauty
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
