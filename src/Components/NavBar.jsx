import React, { useState } from "react";
import { Container, Form, Nav, Navbar, Row } from "react-bootstrap";

const NavBar = ({ search }) => {
  const [wordInput, setWordInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    search(wordInput);
    setWordInput("");
  };

  return (
    <Row>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="text"
                placeholder="ابحث.."
                className="mx-2"
                value={wordInput}
                onChange={(e) => setWordInput(e.target.value)}
              />
              <button type="submit" className="btn-search">
                بحث
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
