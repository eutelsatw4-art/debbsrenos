import { useAdmin } from '../contexts/AdminContext'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const { logo } = useAdmin()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const logoSrc = logo || '/logo.png'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={scrolled ? 'header scrolled' : 'header'}>
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
