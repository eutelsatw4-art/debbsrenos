import { useAdmin } from '../contexts/AdminContext'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const { logo } = useAdmin()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const logoSrc = logo || '/logo.jpg.jpeg'

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logoSrc} alt="Debbs Renovations" />
      </Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to={isHome ? '#portfolio' : '/#portfolio'}>Portfolio</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Link to="/contact" className="cta-btn">Request a Quote</Link>
    </header>
  )
}
