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
      <section className="portfolio-content" id="portfolio-content">
        <h2>Our Portfolio</h2>
        <p className="section-subtitle">Recent projects across Winnipeg and surrounding communities.</p>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img src="/kitchen.jpg" alt="Kitchen renovation" />
            <div className="portfolio-overlay">
              <h3>Modern Kitchen Renovation</h3>
              <p>Custom cabinetry, quartz countertops and full remodel in West Winnipeg.</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="/bathroom.jpg" alt="Bathroom renovation" />
            <div className="portfolio-overlay">
              <h3>Luxury Bathroom Remodel</h3>
              <p>Spa-inspired bathroom with heated floors and custom tile work in Tuxedo.</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="/construction.jpg" alt="Home construction" />
            <div className="portfolio-overlay">
              <h3>New Home Construction</h3>
              <p>Full single-family home build from foundation to finish in South Winnipeg.</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="/exterior.jpg" alt="Exterior and deck" />
            <div className="portfolio-overlay">
              <h3>Exterior & Deck Project</h3>
              <p>Composite decking, railings and outdoor living space in St. Vital.</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="/basement.jpg" alt="Basement renovation" />
            <div className="portfolio-overlay">
              <h3>Basement Development</h3>
              <p>Lower level suite with entertainment area, home gym and bathroom in Charleswood.</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="/home-exterior.jpg" alt="Siding replacement" />
            <div className="portfolio-overlay">
              <h3>Siding Replacement</h3>
              <p>Full vinyl siding upgrade with improved insulation in St. Boniface.</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="/commercial.jpg" alt="Commercial renovation" />
            <div className="portfolio-overlay">
              <h3>Commercial Office Build-Out</h3>
              <p>Downtown Winnipeg tenant improvement with new partitions and lighting.</p>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="/deck.jpg" alt="Deck construction" />
            <div className="portfolio-overlay">
              <h3>Custom Deck Build</h3>
              <p>Outdoor deck and backyard expansion built for Manitoba weather.</p>
            </div>
          </div>
        </div>
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
