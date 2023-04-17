import React, {useState, useEffect} from 'react'
import {Container, Nav, Navbar,Offcanvas, Image, Button} from 'react-bootstrap'


const Navigation = () => {

  const [currentSection, setCurrentSection] = useState('home')

  

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 }); // The threshold determines how much of the section needs to be in view to trigger the intersection
  
    // Observe each section
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  
    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
    <Navbar className='navigation' >
      <Container fluid className='navigation-container' >
        <Image className='navbar-logo' src='https://i.imgur.com/UKU5YjC.jpg' />
              <Nav.Link className={currentSection === 'home' ? 'nav-active' : 'nav-text'} href="#home">Home</Nav.Link>
              <Nav.Link className={currentSection === 'services' ? 'nav-active' : 'nav-text'} href="#services">Services</Nav.Link>
              <Nav.Link className={currentSection === 'contact' ? 'nav-active' : 'nav-text'} href="#contact">Contact</Nav.Link>
        <Navbar.Toggle />
        <h1 className='nav-title' >
          {currentSection === 'home' ? 'Builder King' : null}
          {currentSection === 'services' ? 'Services' : null}
          {currentSection === 'contact' ? 'Contact Us' : null}
        </h1>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="phone-num">
            Call Us:<a href="tel:7708260035">770-826-0035</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Navigation




