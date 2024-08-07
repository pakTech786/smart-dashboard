import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Container, Row, Col, Navbar, Nav,Button,Card } from 'react-bootstrap';
const Applications = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Button className="float-right">Create New Application</ Button>
        </Col>
        <Col md={12} className="mt-3">
            <Card>
              <Card.Body>List of appliations.</Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Applications;
