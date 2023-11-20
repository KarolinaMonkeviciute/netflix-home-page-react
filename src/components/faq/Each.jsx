import React from "react";
export function Each({ faq, idx, toggleFaq }) {
  return (
    <div
      className={`faq ${faq.open ? "open" : ""}`}
      key={idx}
      onClick={() => {
        toggleFaq(idx);
      }}>
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
}
