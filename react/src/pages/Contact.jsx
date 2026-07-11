import Contact from '../components/Contact'
import QuoteForm from '../components/QuoteForm'

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <h2>Tell us about your project and we will provide a free estimate.</h2>
        </div>
      </section>
      <Contact />
      <QuoteForm />
    </>
  )
}
