import { Link } from 'react-router-dom'
import { useAdmin } from '../contexts/AdminContext'

const defaultServices = [
  { title: 'Residential', desc: 'Kitchen remodels, bathroom upgrades, basement finishing, flooring, painting and full home renovations tailored to your lifestyle and budget.', slug: 'residential' },
  { title: 'Commercial', desc: 'Office build-outs, retail renovations, tenant improvements and commercial property upgrades with minimal disruption to your business.', slug: 'commercial' },
  { title: 'Municipal', desc: 'Project management, subcontractor coordination, permit handling and on-site supervision for renovations of any size.', slug: 'municipal' },
  { title: 'Roofing & Siding', desc: 'Roof repairs and replacements, vinyl and fibre cement siding installations, soffit, fascia and gutter upgrades.', slug: 'roofing' },
  { title: 'Decks & Outdoor Living', desc: 'Custom deck design and construction, pergolas, fencing and backyard transformations for Manitoba summers.', slug: 'decks' },
  { title: 'Masonry & Concrete', desc: 'Foundation repairs, concrete patios, walkways, retaining walls and brickwork built to withstand Winnipeg\'s freeze-thaw cycles.', slug: 'masonry' },
  { title: 'Painting & Finishing', desc: 'Interior and exterior painting, drywall finishing, texture work and color consultations for a flawless, lasting finish.', slug: 'painting' },
  { title: 'Windows & Doors', desc: 'Window replacements, door installations, and trim work to improve energy efficiency, security and curb appeal.', slug: 'windows' }
]

export default function Services() {
  const { services: adminServices } = useAdmin()
  
  let services = defaultServices
  if (adminServices) {
    const lines = adminServices.split('\n').filter(line => line.trim())
    services = lines.map((line, index) => {
      const [title, desc] = line.split('|')
      return {
        title: (title || '').trim(),
        desc: (desc || '').trim(),
        slug: defaultServices[index]?.slug || 'service-' + index
      }
    })
  }

  return (
    <section className="services">
      <h2>Our Services</h2>
      <p className="section-subtitle">Complete renovation and general contracting solutions for homes and businesses across Manitoba.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <Link to={`/services/${service.slug}`} className="more-link">More →</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
