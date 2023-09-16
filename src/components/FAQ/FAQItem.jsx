import React from 'react';
import '../styles/ayuda.css';


function FAQItem({ question, answer }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>{question}</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
        <div className="accordion-body">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;
