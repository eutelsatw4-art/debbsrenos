import { useState, useEffect } from 'react'

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const slides = [
    {
      src: '/kitchen.jpg',
      title: 'Renovations Built on Trust.',
      desc: 'Serving Winnipeg and surrounding communities with expert residential, commercial, and general contracting services.',
      btnText: 'Explore Services',
      btnLink: '/services'
    },
    {
      src: '/bathroom.jpg',
      title: 'Expert Craftsmanship.',
      desc: 'From kitchen remodels to full home transformations, we bring care to every square foot.',
      btnText: 'Our Services',
      btnLink: '/services'
    },
    {
      src: '/commercial.jpg',
      title: 'General Contracting You Can Rely On.',
      desc: 'Project management, permits, and supervision handled by our experienced team.',
      btnText: 'Request a Quote',
      btnLink: '/contact'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="hero-slider">
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div className={`hero-slide ${index === current ? 'active' : ''}`} key={index}>
            <img src={slide.src} alt={slide.title} />
            <div className="hero-overlay">
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <a href={slide.btnLink} className="hero-btn">{slide.btnText}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
