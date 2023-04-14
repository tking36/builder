import React, {useState} from 'react'
import {Container, Nav, Navbar,Offcanvas, Image} from 'react-bootstrap'


const Navigation = () => {
  const [expand, updateExpanded] = useState(false)
  

  

  return (
    <>
      
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 navigation">
          <Container fluid>
            <div>
              <Image className='navbar-logo' src='https://i.imgur.com/UKU5YjC.jpg' ></Image>
              <Navbar.Brand href="#">Builder King</Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
    </>
  )
}

export default Navigation