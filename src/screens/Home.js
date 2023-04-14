import React from 'react'
import { Container} from 'react-bootstrap'
import Nav from '../components/Navigation'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import Contact from '../components/Contact'


const Home = () => {

return (
  <Container fluid className='cont'>
    <Nav/>
  <section className='section-1' >
    <h1 className='home-title-nav' >Builder King</h1>
    <h1>Building your dreams</h1>
    <p className='home-about'>
      At Builder King we specializes in building custom homes and custom features for existing homes. We work with clients to understand their unique needs and preferences, and then design and builds homes and features to meet those specifications. Builder King also offers a range of customization options, including architectural design, interior design, and landscape design. Our goal is to create homes that are both functional and beautiful, and that reflect the individual style and personality of each client.
    </p>
    <Carousel/>
  </section>

  <section className='section-2' >
    <h1 className='service-title-nav' >Services</h1>
    <Services/>
  </section>

  <section>
    <Contact/>
  </section>
</Container>
  )
}

export default Home