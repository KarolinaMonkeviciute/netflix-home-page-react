import { Container, Row, Col } from "react-bootstrap";
import styles from "./First.module.css";
import tv from "../../images/tv.png";

export function First() {
  return (
    <Container fluid className={styles.firstSection}>
      <Row className={styles.rowComponents}>
        <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <h2 className={styles.heading}>Enjoy on your TV</h2>
          <p className={styles.text}>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </Col>
        <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <img className={styles.image} src={tv} alt="TV" />
        </Col>
      </Row>
    </Container>
  );
}
