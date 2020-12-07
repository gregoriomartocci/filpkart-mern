import React from "react";
import Layout from "../Layout";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Input from "../UI/input";

export default function Signin() {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
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
