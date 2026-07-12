import { useState } from 'react'
import { useAdmin } from '../contexts/AdminContext'

const defaultFaqs = [
  {
    question: 'What areas do you serve?',
    answer: 'We serve Winnipeg and surrounding communities including St. Vital, Charleswood, Tuxedo, West Winnipeg, South Winnipeg, St. Boniface, Osborne Village, and Bridgwater Lakes.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, Debbs Renovations is fully licensed, insured, and compliant with Manitoba building codes. We carry comprehensive liability insurance for every project.'
  },
  {
    question: 'Do you provide free estimates?',
    answer: 'Yes, we offer free, no-obligation consultations and estimates. Contact us to schedule a site visit and receive a detailed, itemized quote.'
  },
  {
    question: 'How long does a typical renovation take?',
    answer: 'Timelines vary by project. A kitchen remodel typically takes 4-6 weeks, a bathroom renovation 2-3 weeks, and larger projects like basement developments or whole-home renovations may take 2-4 months. We provide a detailed schedule during the planning phase.'
  },
  {
    question: 'Do you help with permits and inspections?',
    answer: 'Yes, we handle all permit applications and coordinate municipal inspections as part of our full-service contracting process.'
  },
  {
    question: 'What payment terms do you offer?',
    answer: 'We use transparent, milestone-based billing. You will receive itemized invoices at key project stages. Payment schedules are discussed and agreed upon before work begins.'
  },
  {
    question: 'Is there a warranty on your work?',
    answer: 'Yes, we provide a workmanship warranty on every project for your peace of mind. Specific warranty terms depend on the type of work and materials used, and will be outlined in your contract.'
  },
  {
    question: 'Can I make changes during the project?',
    answer: 'Yes. We understand that plans can evolve. We have a simple change-order process to review adjustments, update timelines, and confirm pricing before proceeding.'
  }
]

function parseFaqs(text) {
  if (!text) return null
  const lines = text.split('\n').filter(line => line.trim())
  return lines.map(line => {
    const parts = line.split('|')
    return {
      question: (parts[0] || '').trim(),
      answer: (parts[1] || '').trim()
    }
  }).filter(item => item.question && item.answer)
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const { adminData } = useAdmin()
  const savedFaqs = adminData.faqsText
  const parsedFaqs = savedFaqs ? parseFaqs(savedFaqs) : null
  const faqs = parsedFaqs && parsedFaqs.length > 0 ? parsedFaqs : defaultFaqs

  return (
    <>
      <section className="page-hero">
        <div className="hero-content">
          <h1>Frequently Asked Questions</h1>
          <h2>Everything you need to know about working with Debbs Renovations.</h2>
        </div>
      </section>

      <section className="faq">
        <div className="faq-container">
          {faqs.map((item, index) => (
            <div className="faq-item" key={index}>
              <button
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {item.question}
              </button>
              <div className="faq-answer" style={{ maxHeight: openIndex === index ? item.answer.length * 20 + 'px' : '0px' }}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="service-cta">
        <h2>Still have questions?</h2>
        <p>Contact us today for a free consultation and we will answer any questions you have about your project.</p>
        <a href="/contact" className="cta-btn">Get in Touch</a>
      </section>
    </>
  )
}

