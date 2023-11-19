import { Container, Row, Col } from "react-bootstrap";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <Container fluid className={styles.heroSection}>
      <Row>
        <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <h1 className={styles.heading}>
            Unlimited movies, TV shows, and more
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <p className={styles.textOne}>Watch anywhere. Cancel anytime.</p>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <p className={styles.textTwo}>
            Ready to watch? Enter your email or restart your membership.
          </p>
        </Col>
      </Row>
      <Row className={styles.inputRow}>
        <Col className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <form>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email adress"></input>
          </form>
        </Col>
        <Col
          className={`col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ${styles.buttonDiv}`}>
          <button className={styles.start} type="submit">
            Get Started{" "}
          </button>
        </Col>
      </Row>
    </Container>
  );
}
