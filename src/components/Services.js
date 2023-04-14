import React from 'react'
import {Col, Row, Container} from 'react-bootstrap'

const Services = () => {
  return (
    <Container>
        <Row>
            <Col xs={4} >
                <h1>New Construction</h1>
            </Col>
            <Col xs={4} >
                <h1>Remodeling</h1>
            </Col>
            <Col xs={4} >
                <h1>Property Management</h1>
            </Col>
        </Row>
    </Container>
  )
}

export default Services