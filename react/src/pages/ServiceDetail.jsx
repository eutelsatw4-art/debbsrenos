import { useParams, Link } from 'react-router-dom'

const serviceData = {
  residential: {
    title: 'Residential Renovation',
    subtitle: 'Full-service home renovation in Winnipeg',
    description: 'From single-room updates to whole-home transformations, we bring craftsmanship and care to every square foot. Our residential team specializes in kitchen remodels, bathroom upgrades, basement developments, flooring installation, interior painting, and drywall finishing tailored to your lifestyle and budget.',
    features: ['Kitchen Remodels', 'Bathroom Upgrades', 'Basement Finishing', 'Flooring Installation', 'Interior Painting', 'Drywall Finishing'],
    gallery: [
      'https://placehold.co/800x500/EEE/999?text=Kitchen+Renovation',
      'https://placehold.co/800x500/EEE/999?text=Bathroom+Renovation',
      'https://placehold.co/800x500/EEE/999?text=Basement+Renovation'
    ]
  },
  commercial: {
    title: 'Commercial Renovation',
    subtitle: 'Office, retail and tenant improvements',
    description: 'Office renovations, retail build-outs, restaurant remodels, and medical clinic upgrades completed on time and on budget. We coordinate with municipal inspectors and minimize business downtime so you can keep running.',
    features: ['Office Build-Outs', 'Retail Renovations', 'Tenant Improvements', 'Medical Clinic Upgrades', 'Restaurant Remodels'],
    gallery: [
      'https://placehold.co/800x500/EEE/999?text=Office+Renovation',
      'https://placehold.co/800x500/EEE/999?text=Commercial+Build-Out',
      'https://placehold.co/800x500/EEE/999?text=Retail+Space'
    ]
  },
  municipal: {
    title: 'General Contracting',
    subtitle: 'Project management for every scale',
    description: 'Whether you have architectural plans or just a vision, we manage the entire build. Subcontractor scheduling, procurement, inspections, and daily site supervision are all handled by our experienced team.',
    features: ['Project Management', 'Subcontractor Coordination', 'Permit Handling', 'Site Supervision', 'Budget Management'],
    gallery: [
      'https://placehold.co/800x500/EEE/999?text=Construction+Site',
      'https://placehold.co/800x500/EEE/999?text=Framing',
      'https://placehold.co/800x500/EEE/999?text=Site+Supervision'
    ]
  },
  roofing: {
    title: 'Roofing & Siding',
    subtitle: 'Protect your home from Manitoba weather',
    description: 'Asphalt shingle roofs, metal roofing, flat roof repairs, vinyl siding, fibre cement siding, and full exterior envelope upgrades designed to withstand Manitoba climate extremes.',
    features: ['Roof Repairs', 'Roof Replacements', 'Vinyl Siding', 'Fibre Cement Siding', 'Soffit & Fascia', 'Gutter Upgrades'],
    gallery: [
      'https://placehold.co/800x500/EEE/999?text=Roofing',
      'https://placehold.co/800x500/EEE/999?text=Siding+Installation',
      'https://placehold.co/800x500/EEE/999?text=Exterior'
    ]
  },
  decks: {
    title: 'Decks & Outdoor Living',
    subtitle: 'Custom outdoor spaces for Manitoba summers',
    description: 'Custom deck design and construction, pergolas, fencing, and backyard transformations. We design outdoor spaces that stand up to cold prairie winters and provide years of enjoyment.',
    features: ['Custom Decks', 'Pergolas', 'Privacy Fencing', 'Composite Decking', 'Cedar Decks', 'Backyard Transformations'],
    gallery: [
      'https://placehold.co/800x500/EEE/999?text=Deck',
      'https://placehold.co/800x500/EEE/999?text=Pergola',
      'https://placehold.co/800x500/EEE/999?text=Backyard'
    ]
  },
  masonry: {
    title: 'Masonry & Concrete',
    subtitle: 'Durable foundations and hardscapes',
    description: 'Foundations, retaining walls, concrete patios, walkways, steps, and brick repairs. We use frost-resistant mixes and proven techniques suited for Winnipeg freeze-thaw cycles.',
    features: ['Foundation Repairs', 'Concrete Patios', 'Walkways', 'Retaining Walls', 'Brickwork', 'Steps'],
    gallery: [
      'https://placehold.co/800x500/EEE/999?text=Concrete+Patio',
      'https://placehold.co/800x500/EEE/999?text=Retaining+Wall',
      'https://placehold.co/800x500/EEE/999?text=Brickwork'
    ]
  },
  painting: {
    title: 'Painting & Finishing',
    subtitle: 'Flawless finishes inside and out',
    description: 'Interior and exterior painting, drywall finishing, texture work, and color consultations. We prep surfaces properly and use premium materials for a durable, beautiful finish.',
    features: ['Interior Painting', 'Exterior Painting', 'Drywall Finishing', 'Texture Work', 'Color Consultation', 'Cabinet Refinishing'],
    gallery: [
      'https://placehold.co/800x500/EEE/999?text=Painting',
      'https://placehold.co/800x500/EEE/999?text=Interior+Painting',
      'https://placehold.co/800x500/EEE/999?text=Finished+Wall'
    ]
  },
  windows: {
    title: 'Windows & Doors',
    subtitle: 'Energy efficiency and curb appeal',
    description: 'Window replacements, door installations, and trim work to improve energy efficiency, security, and curb appeal. We work with top manufacturers to fit your style and budget.',
    features: ['Window Replacement', 'Door Installation', 'Trim Work', 'Energy efficient Upgrades', 'Custom Millwork', 'Weatherstripping'],
    gallery: [
      'https://placehold.co/800x500/EEE/999?text=Windows',
      'https://placehold.co/800x500/EEE/999?text=Front+Door',
      'https://placehold.co/800x500/EEE/999?text=Exterior+Trim'
    ]
  }
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = serviceData[slug]

  if (!service) {
    return (
      <section className="page-hero">
        <div className="hero-content">
          <h1>Service Not Found</h1>
          <p>The service you are looking for does not exist.</p>
          <Link to="/services" className="hero-btn">Back to Services</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="page-hero">
        <div className="hero-content">
          <h1>{service.title}</h1>
          <h2>{service.subtitle}</h2>
        </div>
      </section>

      <section className="service-detail-page">
        <div className="container">
          <div className="service-overview">
            <p>{service.description}</p>
            <h3>What We Offer</h3>
            <ul className="feature-list">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <a href="/contact#quote" className="cta-btn">Request a Quote</a>
          </div>

          <div className="service-gallery">
            <h3>Project Gallery</h3>
            <div className="gallery-grid">
              {service.gallery.map((img, index) => (
                <div className="gallery-item" key={index}>
                  <img src={img} alt={`${service.title} project ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <h2>Ready to Start Your Project?</h2>
        <p>Contact us today for a free consultation and estimate.</p>
        <a href="/contact#quote" className="cta-btn">Get in Touch</a>
      </section>
    </>
  )
}
