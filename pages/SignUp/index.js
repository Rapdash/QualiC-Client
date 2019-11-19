import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Firebase } from '../../data/firebase';

export const SignUpPage = () => {
  const firebase = useContext(Firebase)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = () => {
    firebase.createUserWithEmail(email, password).then()
  }

  return (
    <Container fluid>
      <h2 className="text-center">test</h2>
      <Row>
        <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1}} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="emailForm">
              <Form.Label>Email:</Form.Label>
              <Form.Control size="large" type="email" value={email} onChange={setEmail} placeholder="Enter Email"/>
            </Form.Group>
            <Form.Group controlId="passwordForm">
              <Form.Label>Password:</Form.Label>
              <Form.Control size="large" type="password" value={password} onChange={setPassword} placeholder="Enter Password"/>
            </Form.Group>
            <Form.Group controlId="confirmPasswordForm">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control size="large" type="password" value={confirmPassword} onChange={setConfirmPassword} placeholder="Enter Password Again"/>
            </Form.Group>
            <Button variant="primary" size="large" type="submit">
              Sign In
            </Button>
            { error &&  <Form.Text color="danger">{error}</Form.Text> }
          </Form>
        </Col>
      </Row>
    </Container>
  );
};