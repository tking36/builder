import React, {useState} from 'react'
import {Container, Nav, Navbar,Offcanvas, Image, Button} from 'react-bootstrap'


const Navigation = () => {

  return (
    <>
    <Navbar className='navigation' >
      <Container fluid>
        <Image className='navbar-logo' src='https://i.imgur.com/UKU5YjC.jpg' />
              <Nav.Link className='nav-text' href="#home">Home</Nav.Link>
              <Nav.Link className='nav-text' href="#services">Services</Nav.Link>
              <Nav.Link className='nav-text' href="#contact">Contact</Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="phone-num">
            call us<a href="#login">770-123-4567</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Navigation



      // <Navbar className='navigation' bg="transparent" variant="dark" expand="lg" fixed="top">
      //   <Navbar.Brand className='nav-text' href="#">My Website</Navbar.Brand>
      //   <Navbar.Toggle aria-controls="navbar-nav" />
      //   <Navbar.Collapse id="navbar-nav">
      //     <Nav className="ml-auto">
      //     {/* <div className='nav-link-container'> */}
      //       {/* <div className='nav-links-child'> */}
      //         <Nav.Link className='nav-text' href="#home">Home</Nav.Link>
      //         <Nav.Link className='nav-text' href="#services">Services</Nav.Link>
      //         <Nav.Link className='nav-text' href="#contact">Contact</Nav.Link>
      //       {/* </div> */}
      //       <Navbar.Collapse className='phone-num'>
      //         <Nav.Link className='nav-text justify-content-end' href="#contact">770-123-4567</Nav.Link>
      //       </Navbar.Collapse>
      //     {/* </div> */}

      //     </Nav>
      //   </Navbar.Collapse>
      // </Navbar>

