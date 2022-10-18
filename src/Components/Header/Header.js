import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../image/logo.png'

const Header = () => {
  return (
    <Navbar className='bg-dark' expand="lg">
      <Container fluid>

        <Navbar.Brand className='text-light' href="#">
          <img src={logo} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/' className='text-light fw-bold text-decoration-none me-4'>Home</Link>
            <Link to='/review' className='text-light fw-bold text-decoration-none me-4'>Review</Link>
            <Link to='/about' className='text-light fw-bold text-decoration-none me-4'>About</Link>
            <Link to='/dashbord' className='text-light fw-bold text-decoration-none me-4'>DashBord</Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;