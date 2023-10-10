import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom"
import "./Header.css"
import LinkComponent from '../../utils/Link/Link';
const Headers = () => {
    return (
        <>
            <Navbar className="HeaderContainer">
                <Container>
                    <Navbar.Brand href="#home" className='HeaderHeading'>Manager</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkComponent text="Home" />

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Headers