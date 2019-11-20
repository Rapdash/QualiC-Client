import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import * as routes from "../../constants/routes";
import { FirebaseContext } from '../../data/firebase';

const SignUpPageBase = ({ history }) => {
  const firebase = useContext(FirebaseContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    firebase.createUserWithEmail(email, password)
      .then(authUser => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
        history.push(routes.index);
      })
      .catch(error => {
        setError(error.message);
      });
  }

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1}} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Card>
            <Card.Header className="bg-primary">
              <Card.Title className="text-center text-white my-1">Create Account</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={onSubmit}>
                <Form.Group controlId="emailForm">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control size="large" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Email" autoComplete="new-email"/>
                </Form.Group>
                <Form.Group controlId="passwordForm">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control size="large" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Password" autoComplete="new-password"/>
                </Form.Group>
                <Form.Group controlId="confirmPasswordForm">
                  <Form.Label>Confirm Password:</Form.Label>
                  <Form.Control size="large" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Enter Password Again" autoComplete="new-password"/>
                </Form.Group>
                <Button variant="primary" block size="large" type="submit">
                  Sign In
                </Button>
                { error &&  <Form.Text as="h4" className="text-danger mt-4 text-center">{error}</Form.Text> }
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export const SignUpPage = SignUpPageBase