import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import * as routes from "../../constants/routes";
import { FirebaseContext } from '../../data/firebase';

export const SignInPage = ({ history }) => {
  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    firebase.signInWithEmail(email, password)
      .then(authUser => {
        console.log(authUser);
        setEmail('');
        setPassword('');
        setError('');
        history.push(routes.index);
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  }

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col xs={{ span: 12 }} sm={{ span: 10, offset: 1}} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Card>
            <Card.Header className="bg-dark">
              <Card.Title className="text-center text-white my-1">Sign In</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={onSubmit}>
                <Form.Group>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control size="lg" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Email" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control size="lg" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Password" />
                </Form.Group>
                <Button size="lg" variant="primary" type="submit" block>Sign Into QualiC</Button>
                { error &&  <Form.Text as="h4" className="text-danger mt-4 text-center">{error}</Form.Text> }
                <Button block variant="outline-dark" className="mt-3" onClick={() => history.push(routes.signUp)}>Sign Up Instead</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}