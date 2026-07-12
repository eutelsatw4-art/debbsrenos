import { Link } from 'react-router-dom'
import { useAdmin } from '../contexts/AdminContext'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Slider from '../components/Slider'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'

const defaultPortfolio = [
  { img: '/kitchen.jpg', title: 'Modern Kitchen Renovation', desc: 'Custom cabinetry, quartz countertops and full remodel in West Winnipeg.' },
  { img: '/bathroom.jpg', title: 'Luxury Bathroom Remodel', desc: 'Spa-inspired bathroom with heated floors and custom tile work in Tuxedo.' },
  { img: '/construction.jpg', title: 'New Home Construction', desc: 'Full single-family home build from foundation to finish in South Winnipeg.' },
  { img: '/exterior.jpg', title: 'Exterior & Deck Project', desc: 'Composite decking, railings and outdoor living space in St. Vital.' },
  { img: '/basement.jpg', title: 'Basement Development', desc: 'Lower level suite with entertainment area, home gym and bathroom in Charleswood.' },
  { img: '/home-exterior.jpg', title: 'Siding Replacement', desc: 'Full vinyl siding upgrade with improved insulation in St. Boniface.' },
  { img: '/commercial.jpg', title: 'Commercial Office Build-Out', desc: 'Downtown Winnipeg tenant improvement with new partitions and lighting.' },
  { img: '/deck.jpg', title: 'Custom Deck Build', desc: 'Outdoor deck and backyard expansion built for Manitoba weather.' }
]

function parsePortfolio(text) {
  if (!text) return null
  const lines = text.split('\n').filter(line => line.trim())
  return lines.map(line => {
    const parts = line.split('|')
    return {
      img: (parts[0] || '').trim(),
      title: (parts[1] || '').trim(),
      desc: (parts[2] || '').trim()
    }
  }).filter(item => item.title)
}

export default function Home() {
  const { adminData } = useAdmin()
  const savedPortfolio = adminData.portfolio
  const parsed = savedPortfolio ? parsePortfolio(savedPortfolio) : null
  const portfolio = parsed && parsed.length > 0 ? parsed : defaultPortfolio

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
          {portfolio.map((item, index) => (
            <div className="portfolio-item" key={index}>
              <img src={item.img} alt={item.title} />
              <div className="portfolio-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
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
