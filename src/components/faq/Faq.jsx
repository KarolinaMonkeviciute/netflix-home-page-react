import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Each } from "./Each";
import styles from "../Hero.module.css";

export function Faq() {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Netflix?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui natus, eius mollitia blanditiis reiciendis rem magni consectetur ea, voluptatum temporibus sed eum odio eos? Perspiciatis dolorum accusantium id eveniet quidem.",
      open: true,
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eaque, accusamus tempora dolorem inventore eos iusto ducimus sed ipsam vel labore laboriosam facilis expedita! Molestias rerum doloribus debitis beatae excepturi.",
      open: false,
    },
    {
      question: "Where can I watch?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, ex fugiat sequi, in id dignissimos iste iusto facilis quo autem perferendis numquam nemo alias maiores deserunt hic dolor aspernatur assumenda.",
      open: false,
    },
    {
      question: "How do I cancel?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cum incidunt tempore praesentium facere ut nam distinctio aperiam error numquam beatae adipisci fuga illo, iure at earum rerum perferendis excepturi.",
      open: false,
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit odio blanditiis officiis? Hic, possimus veritatis beatae iusto accusamus earum deserunt similique praesentium atque expedita inventore doloremque quaerat nemo obcaecati maxime.",
      open: false,
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, omnis quae explicabo facilis beatae quis? Tempora mollitia sequi adipisci, explicabo veritatis, illum assumenda est a reiciendis fuga inventore laborum? Nulla.",
      open: false,
    },
    {
      question: "Why am I seeing this language?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus corporis nemo labore quia voluptatibus doloremque perspiciatis? Maiores numquam non architecto laborum aliquam, veniam ullam corrupti totam vitae laboriosam labore amet!",
      open: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <Container fluid className="faq-container">
      <Row>
        <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <h2>Frequently Asked Questions</h2>
        </Col>
      </Row>
      <Row className="faq-row">
        <Col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="faqsCol">
            {faqs.map((faq, idx) => (
              <Each key={idx} faq={faq} idx={idx} toggleFaq={toggleFaq} />
            ))}
          </div>
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
