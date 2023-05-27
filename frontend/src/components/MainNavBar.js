import React, {useState} from "react";
import {Link} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export function MainNavBar() {
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">Teszt rendszer</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav className="me-auto">
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Termékek"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item><Link to={"/products_list"}>Lista</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown id="nav-dropdown-dark-example" title="Szállítólevelek" menuVariant="dark">
                            <NavDropdown.Item><Link to={"/products_list"}>Csigafej</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav>
                        <Nav.Link ><Link to={"/login"}>Bejelentkezés</Link></Nav.Link>
                    </Nav>



                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}



export function MainNavBar2() {
    return (
    <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Termékek
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
            <Dropdown.Item><Link to={"/products_list"}>Lista</Link></Dropdown.Item>
            <Dropdown.Item href="#/action-2">Valami 1</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Valami 2</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);
}
