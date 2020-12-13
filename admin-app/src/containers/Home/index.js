import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import Layout from "../../components/Layout";
import { NavLink } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <Layout sidebar></Layout>
    </div>
  );
}

export default Home;

// eslint-disable-next-line no-lone-blocks
{
  /* <Jumbotron
          style={{ margin: "5rem", background: "white" }}
          className="text-center"
        >
          <h1>Welcome to Admin Dashboard</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </Jumbotron> */
}
