import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Slider from '../components/Slider'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <section className="portfolio" id="portfolio">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">A selection of recent renovation and general contracting projects across Winnipeg.</p>
        <Slider />
      </section>
      <WhyChooseUs />
      <Testimonials />
      <section className="cta-section">
        <h2>Ready to Start Your Renovation?</h2>
        <p>Get a free, no-obligation quote for your residential or commercial project in Winnipeg.</p>
        <Link to="/contact" className="cta-btn">Request a Free Quote</Link>
      </section>
    </>
  )
}
