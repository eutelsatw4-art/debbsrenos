import { Link } from 'react-router-dom'
import { useAdmin } from '../contexts/AdminContext'

export default function Footer() {
  const { footer } = useAdmin()
  const desc = footer.desc || 'Renovations Built on Trust. Serving Winnipeg and surrounding communities.'
  const email = footer.email || 'info@debbsrenos.com'
  const phone = footer.phone || '204-000-0000'
  const address = footer.address || 'Winnipeg, Manitoba'
  const copyright = footer.copyright || '© 2026 Debbs Renovations. All rights reserved.'
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Debbs Renovations</h4>
          <p>{desc}</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/contact#quote">Request a Quote</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Residential Renovation</li>
            <li>Commercial Renovation</li>
            <li>General Contracting</li>
            <li>Roofing & Siding</li>
            <li>Decks & Outdoor Living</li>
            <li>Masonry & Concrete</li>
            <li>Painting & Finishing</li>
            <li>Windows & Doors</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>{address}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
        </div>
      </div>
      <p className="copyright">{copyright}</p>
    </footer>
  )
}
