import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreateLoginForm from "../components/CreateLoginForm";


const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
        <CreateLoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
