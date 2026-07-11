import { Link } from 'react-router-dom'
import { useAdmin } from '../contexts/AdminContext'

export default function Hero() {
  const { hero } = useAdmin()
  const title = hero.heroTitle || 'Renovations Built on Trust.'
  const subtitle = hero.heroSubtitle || 'Trusted residential, commercial and municipal renovation experts serving Winnipeg and surrounding communities since 2015.'
  const btnText = hero.heroBtnText || 'Explore Services'

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <Link to="/services" className="hero-btn">{btnText}</Link>
      </div>
    </section>
  )
}
