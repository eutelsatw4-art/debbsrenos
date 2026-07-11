import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Renovations Built on Trust.</h1>
        <h2>Trusted residential, commercial and municipal renovation experts serving Winnipeg and surrounding communities since 2015.</h2>
        <Link to="/services" className="hero-btn">Explore Services</Link>
      </div>
    </section>
  )
}
