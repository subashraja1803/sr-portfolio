import React from "react";
import styles from "./NavBar.module.scss";
import { Container, Nav, NavItem, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const navBarItems = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "Experience",
      route: "/experience",
    },
    {
      label: "Projects",
      route: "/projects",
    },
    {
      label: "Acheivements",
      route: "/acheivements",
    },
    {
      label: "Contact",
      route: "/contact",
    },
  ];
  return (
    <div>
      <Navbar
        fixed="top"
        expand="lg"
        className={`bg-body-tertiary ${styles.navBar}`}
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/")}
            className={styles.navTitle}
          >
            Subash Raja S
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={styles.navBarItems}>
            <Nav class="me-auto"></Nav>
            <Nav>
              {navBarItems.map(({ label, route }, index) => (
                <NavItem className={styles.navItem}>
                  <Nav.Link eventKey={index} onClick={() => navigate(route)}>
                    {label}
                  </Nav.Link>
                </NavItem>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
