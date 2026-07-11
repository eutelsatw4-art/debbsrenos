import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      title: 'Residential Renovation',
      desc: 'From single-room updates to whole-home transformations, we bring craftsmanship and care to every square foot. Popular projects include kitchen remodels, bathroom upgrades, basement developments, flooring installation, interior painting and drywall finishing.',
      slug: 'residential'
    },
    {
      title: 'Commercial Renovation',
      desc: 'Office renovations, retail build-outs, restaurant remodels and medical clinic upgrades completed on time and on budget. We coordinate with municipal inspectors and minimize business downtime.',
      slug: 'commercial'
    },
    {
      title: 'General Contracting',
      desc: 'Whether you have architectural plans or just a vision, we manage the entire build. Subcontractor scheduling, procurement, inspections and daily site supervision are all handled by our team.',
      slug: 'municipal'
    },
    {
      title: 'Roofing & Siding',
      desc: 'Asphalt shingle roofs, metal roofing, flat roof repairs, vinyl siding, fibre cement siding and full exterior envelope upgrades designed for Manitoba weather.',
      slug: 'roofing'
    },
    {
      title: 'Masonry & Concrete',
      desc: 'Foundations, retaining walls, concrete patios, walkways, steps and brick repairs. We use frost-resistant mixes suited for Winnipeg winters.',
      slug: 'masonry'
    },
    {
      title: 'Decks, Fencing & Exteriors',
      desc: 'Custom decks with composite or cedar, pergolas, privacy fences and yard expansions. We design outdoor spaces that stand up to cold prairie winters.',
      slug: 'decks'
    },
    {
      title: 'Painting & Finishing',
      desc: 'Interior and exterior painting, drywall finishing, texture work and color consultations for a flawless, lasting finish.',
      slug: 'painting'
    },
    {
      title: 'Windows & Doors',
      desc: 'Window replacements, door installations, and trim work to improve energy efficiency, security and curb appeal.',
      slug: 'windows'
    }
  ]

  return (
    <>
      <section className="page-hero">
        <div className="hero-content">
          <h1>Our Services</h1>
          <h2>Full-service renovation and general contracting in Winnipeg.</h2>
        </div>
      </section>

      <section className="services">
        <div className="services-list">
          {services.map((service, index) => (
            <div className="service-detail" key={index}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link to={`/services/${service.slug}`} className="more-link">More →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="process">
        <h2>How We Work</h2>
        <div className="process-grid">
          <div className="process-step">
            <span className="step-num">1</span>
            <h4>Consultation</h4>
            <p>We visit your property, discuss goals, timelines and budget.</p>
          </div>
          <div className="process-step">
            <span className="step-num">2</span>
            <h4>Proposal</h4>
            <p>You receive a detailed, itemized quote with transparent pricing.</p>
          </div>
          <div className="process-step">
            <span className="step-num">3</span>
            <h4>Project Plan</h4>
            <p>We set milestones, order materials and schedule trades.</p>
          </div>
          <div className="process-step">
            <span className="step-num">4</span>
            <h4>Construction</h4>
            <p>Our crew completes the work with daily progress updates.</p>
          </div>
          <div className="process-step">
            <span className="step-num">5</span>
            <h4>Final Walkthrough</h4>
            <p>We inspect together, address punch items and clean up the site.</p>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <h2>Planning a Renovation Project?</h2>
        <p>Tell us about your project and we will provide a free consultation and estimate.</p>
        <a href="/contact" className="cta-btn">Get in Touch</a>
      </section>
    </>
  )
}
