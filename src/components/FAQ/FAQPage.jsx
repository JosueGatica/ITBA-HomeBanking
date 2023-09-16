import React from 'react';
import FAQSection from './FaqSection';
import FAQItem from './FAQItem';
import Header from '../Header';


function FAQPage() {
  return (
    <div className="faq-page">
      <Header/>
      <FAQSection />
      <FAQItem />
    </div>
  );
}

export default FAQPage;
