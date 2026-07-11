import { useParams, Link } from 'react-router-dom'

const serviceData = {
  residential: {
    title: 'Residential Renovation',
    subtitle: 'Full-service home renovation in Winnipeg',
    description: 'From single-room updates to whole-home transformations, we bring craftsmanship and care to every square foot. Our residential team specializes in kitchen remodels, bathroom upgrades, basement developments, flooring installation, interior painting, and drywall finishing tailored to your lifestyle and budget.',
    features: ['Kitchen Remodels', 'Bathroom Upgrades', 'Basement Finishing', 'Flooring Installation', 'Interior Painting', 'Drywall Finishing'],
    gallery: [
      'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=500&fit=crop'
    ]
  },
  commercial: {
    title: 'Commercial Renovation',
    subtitle: 'Office, retail and tenant improvements',
    description: 'Office renovations, retail build-outs, restaurant remodels, and medical clinic upgrades completed on time and on budget. We coordinate with municipal inspectors and minimize business downtime so you can keep running.',
    features: ['Office Build-Outs', 'Retail Renovations', 'Tenant Improvements', 'Medical Clinic Upgrades', 'Restaurant Remodels'],
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=500&fit=crop'
    ]
  },
  municipal: {
    title: 'General Contracting',
    subtitle: 'Project management for every scale',
    description: 'Whether you have architectural plans or just a vision, we manage the entire build. Subcontractor scheduling, procurement, inspections, and daily site supervision are all handled by our experienced team.',
    features: ['Project Management', 'Subcontractor Coordination', 'Permit Handling', 'Site Supervision', 'Budget Management'],
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=800&h=500&fit=crop'
    ]
  },
  roofing: {
    title: 'Roofing & Siding',
    subtitle: 'Protect your home from Manitoba weather',
    description: 'Asphalt shingle roofs, metal roofing, flat roof repairs, vinyl siding, fibre cement siding, and full exterior envelope upgrades designed to withstand Manitoba climate extremes.',
    features: ['Roof Repairs', 'Roof Replacements', 'Vinyl Siding', 'Fibre Cement Siding', 'Soffit & Fascia', 'Gutter Upgrades'],
    gallery: [
      'https://images.unsplash.com/photo-1632759145351-1d592926f59d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1562259929-b4e1edb0f5a7?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=500&fit=crop'
    ]
  },
  decks: {
    title: 'Decks & Outdoor Living',
    subtitle: 'Custom outdoor spaces for Manitoba summers',
    description: 'Custom deck design and construction, pergolas, fencing, and backyard transformations. We design outdoor spaces that stand up to cold prairie winters and provide years of enjoyment.',
    features: ['Custom Decks', 'Pergolas', 'Privacy Fencing', 'Composite Decking', 'Cedar Decks', 'Backyard Transformations'],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop'
    ]
  },
  masonry: {
    title: 'Masonry & Concrete',
    subtitle: 'Durable foundations and hardscapes',
    description: 'Foundations, retaining walls, concrete patios, walkways, steps, and brick repairs. We use frost-resistant mixes and proven techniques suited for Winnipeg freeze-thaw cycles.',
    features: ['Foundation Repairs', 'Concrete Patios', 'Walkways', 'Retaining Walls', 'Brickwork', 'Steps'],
    gallery: [
      'https://images.unsplash.com/photo-1531834685032-c34bf0d84f77?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=800&h=500&fit=crop'
    ]
  },
  painting: {
    title: 'Painting & Finishing',
    subtitle: 'Flawless finishes inside and out',
    description: 'Interior and exterior painting, drywall finishing, texture work, and color consultations. We prep surfaces properly and use premium materials for a durable, beautiful finish.',
    features: ['Interior Painting', 'Exterior Painting', 'Drywall Finishing', 'Texture Work', 'Color Consultation', 'Cabinet Refinishing'],
    gallery: [
      'https://images.unsplash.com/photo-1562259929-b4e1edb0f5a7?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&h=500&fit=crop'
    ]
  },
  windows: {
    title: 'Windows & Doors',
    subtitle: 'Energy efficiency and curb appeal',
    description: 'Window replacements, door installations, and trim work to improve energy efficiency, security, and curb appeal. We work with top manufacturers to fit your style and budget.',
    features: ['Window Replacement', 'Door Installation', 'Trim Work', 'Energy efficient Upgrades', 'Custom Millwork', 'Weatherstripping'],
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=500&fit=crop'
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

  const galleryOverrides = JSON.parse(localStorage.getItem('admin_service_gallery_' + slug) || 'null')
  const gallery = galleryOverrides || service.gallery

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
              {gallery.map((img, index) => (
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
