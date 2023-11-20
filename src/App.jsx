import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { Hero } from "./components/Hero";
import { First } from "./components/first-section/First";
import { Second } from "./components/second-section/Second";
import { Third } from "./components/third-section/Third";
import { Fourth } from "./components/fourth-section/Fourth";
import { Faq } from "./components/faq/Faq";

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
      <Third />
      <Fourth />
      <Faq />
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
