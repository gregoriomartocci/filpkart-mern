import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { isUserLoggedIn, login } from "../../actions";
import Layout from "../../components/Layout";
import Input from "../../components/UI/input";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

// useState is DYNAMIC ( VA A IR CAMBIANDO ) a HOOK wich helps to create a state in functional COMPONENTS
// ESTO DEVUELVE UN ARREGLO,  UNO ES UN VALOR Y OTRO ES UNA FUNCION QUE LE PODEMOS SETEAR VALORES

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if(auth.authenticate){
      dispatch(isUserLoggedIn())
    }
  }, []);

  const userLogin = (e) => {
    e.preventDefault(); // no recargamos la pagina

    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };

  if (auth.authenticate) {
    return <Redirect />;
  }

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
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></Input>

                <Input
                  label="Password"
                  placeholder="Password"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
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
};

export default Signin;
