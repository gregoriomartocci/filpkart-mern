import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../Layout";
import Input from "../UI/input";

export default function Signup() {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Input
                      label="First Name"
                      placeholder="Fist Name"
                      value=""
                      type="text"
                      onChange={() => {}}
                    ></Input>
                  </Col>
                  <Col md={6}>
                    <Input
                      label="Last Name"
                      placeholder="Last Name"
                      value=""
                      type="text"
                      onChange={() => {}}
                    ></Input>
                  </Col>
                </Row>

                <Input
                  label="Email"
                  placeholder="Email"
                  value=""
                  type="text"
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
