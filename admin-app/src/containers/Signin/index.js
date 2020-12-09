import React from "react";

import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { login } from "../../actions";
import Layout from "../../components/Layout";
import Input from "../../components/UI/input";
import { useDispatch } from "react-redux";


const Signin = (props)  => {

  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault(); // no recargamos la pagina
  
    const user = {
      email: "riz@gmail.com",
      password: "123456",
    };
  
    dispatch(login(user));

  };

  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={userLogin}>
                <Input
                  label="Email"
                  placeholder="Email"
                  value=""
                  type="email"
                  onChange={() => {}}
                ></Input>

                <Input
                  label="Password"
                  placeholder="Password"
                  value=""
                  type="password"
                  onChange={() => {}}
                ></Input>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}

export default Signin