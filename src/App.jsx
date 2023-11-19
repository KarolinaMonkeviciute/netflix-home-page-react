import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { Hero } from "./components/Hero";
import { First } from "./components/first-section/First";
import { Second } from "./components/second-section/Second";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div>HEADER</div>
          </Col>
        </Row>
      </Container>
      <Hero />
      <First />
      <Second />
      <Container>
        <Row>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            TEXT
          </Col>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            IMAGE
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            IMAGE
          </Col>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            TEXT
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            TEXT
          </Col>
        </Row>
        <Row>
          <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            MODAL
          </Col>
        </Row>
        <Row>
          <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            TEXT
          </Col>
          <Col className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            INPUT
          </Col>
          <Col className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            BUTTON
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            LINK
          </Col>
        </Row>
        <Row>
          <Col className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            LINKS
          </Col>
          <Col className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            LINKS
          </Col>
          <Col className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            LINKS
          </Col>
          <Col className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            LINKS
          </Col>
        </Row>
        <Row>
          <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            LOGO
          </Col>
        </Row>
        <Row>
          <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            TEXT
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
