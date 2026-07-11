import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Debbs Renovations</h4>
          <p>Renovations Built on Trust. Serving Winnipeg and surrounding communities.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
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
          <p>Winnipeg, Manitoba</p>
          <p>Email: info@debbsrenos.com</p>
          <p>Phone: 204-000-0000</p>
        </div>
      </div>
      <p className="copyright">© 2026 Debbs Renovations. All rights reserved.</p>
    </footer>
  )
}
