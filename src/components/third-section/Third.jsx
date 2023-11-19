import { Container, Row, Col } from "react-bootstrap";
import styles from "./Third.module.css";
import devices from "../../images/device-pile.png";

export function Third() {
  return (
    <Container fluid className={styles.firstSection}>
      <Row className={styles.rowComponents}>
        <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <h2 className={styles.heading}>Watch everywhere</h2>
          <p className={styles.text}>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </Col>
        <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <img className={styles.image} src={devices} alt="TV" />
        </Col>
      </Row>
    </Container>
  );
}
