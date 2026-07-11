import { useState, useEffect } from 'react'

export default function Slider() {
  const [current, setCurrent] = useState(0)

  const slides = [
    {
      src: 'https://placehold.co/1200x600/EEE/999?text=Modern+Kitchen+Renovation',
      alt: 'Modern kitchen renovation with white cabinets and island',
      title: 'Modern Kitchen Renovation',
      desc: 'West Winnipeg family home — full kitchen remodel with custom cabinetry and quartz countertops.'
    },
    {
      src: 'https://placehold.co/1200x600/EEE/999?text=Luxury+Bathroom+Remodel',
      alt: 'Luxury bathroom renovation with walk-in shower',
      title: 'Luxury Bathroom Remodel',
      desc: 'Tuxedo area residence — spa-inspired bathroom with heated floors and custom tile work.'
    },
    {
      src: 'https://placehold.co/1200x600/EEE/999?text=New+Home+Construction',
      alt: 'New home construction framing',
      title: 'New Home Construction',
      desc: 'Custom single-family home build in South Winnipeg — from foundation to finish carpentry.'
    },
    {
      src: 'https://placehold.co/1200x600/EEE/999?text=Exterior+%26+Deck+Project',
      alt: 'Beautiful house exterior with deck',
      title: 'Exterior & Deck Project',
      desc: 'Outdoor living space with composite decking, railings and integrated LED lighting in St. Vital.'
    },
    {
      src: 'https://placehold.co/1200x600/EEE/999?text=Basement+Development',
      alt: 'Basement renovation with gym area',
      title: 'Basement Development',
      desc: 'Lower level suite with entertainment area, home gym and full bathroom in Charleswood.'
    },
    {
      src: 'https://placehold.co/1200x600/EEE/999?text=Siding+Replacement',
      alt: 'House siding installation',
      title: 'Siding Replacement',
      desc: 'Full vinyl siding upgrade in St. Boniface — improved insulation and fresh curb appeal.'
    },
    {
      src: 'https://placehold.co/1200x600/EEE/999?text=Commercial+Office+Build-Out',
      alt: 'Commercial office renovation',
      title: 'Commercial Office Build-Out',
      desc: 'Tenant improvement for a downtown Winnipeg office — new partitions, flooring and lighting.'
    },
    {
      src: 'https://placehold.co/1200x600/EEE/999?text=Concrete+Patio+%26+Walkways',
      alt: 'Masonry concrete patio construction',
      title: 'Concrete Patio & Walkways',
      desc: 'New stamped concrete patio and front walkway in Bridgwater Lakes, designed for Manitoba winters.'
    }
  ]

  const next = () => setCurrent((current + 1) % slides.length)
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length)
  const goTo = (index) => setCurrent(index)

  useEffect(() => {
    const interval = setInterval(next, 4000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="slider">
      <div className="slides" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.src} alt={slide.alt} />
            <div className="slide-content">
              <h3>{slide.title}</h3>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="slider-btn prev" onClick={prev} aria-label="Previous slide">&#10094;</button>
      <button className="slider-btn next" onClick={next} aria-label="Next slide">&#10095;</button>
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
