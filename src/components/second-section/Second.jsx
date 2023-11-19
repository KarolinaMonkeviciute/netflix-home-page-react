import { Container, Row, Col } from "react-bootstrap";
import styles from "./Second.module.css";
import mobile from "../../images/mobile.png";

export function Second() {
  return (
    <Container fluid className={styles.firstSection}>
      <Row className={styles.rowComponents}>
        <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <img className={styles.image} src={mobile} alt="mobile phone" />
        </Col>
        <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <h2 className={styles.heading}>
            Download your shows to watch offline
          </h2>
          <p className={styles.text}>
            Save your favorites easily and always have something to watch.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
