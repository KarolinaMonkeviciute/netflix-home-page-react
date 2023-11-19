import { Container, Row, Col } from "react-bootstrap";
import styles from "./Fourth.module.css";
import kids from "../../images/kids.png";

export function Fourth() {
  return (
    <Container fluid className={styles.firstSection}>
      <Row className={styles.rowComponents}>
        <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <img className={styles.image} src={kids} alt="mobile phone" />
        </Col>
        <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <h2 className={styles.heading}>Create profiles for kids</h2>
          <p className={styles.text}>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
