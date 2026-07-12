import { useAdmin } from '../contexts/AdminContext'

export default function Testimonials() {
  const { adminData } = useAdmin()
  const testimonials = adminData.testimonials || [
    { quote: 'Debbs Renovations transformed our kitchen. Professional, on budget and ahead of schedule. Highly recommend.', client: 'Sarah M., Winnipeg' },
    { quote: 'They handled our basement development from start to finish. Great communication and quality workmanship.', client: 'James K., St. Vital' },
    { quote: 'Our commercial tenant improvement was completed with minimal disruption. True general contracting professionals.', client: 'Linda R., Osborne Village' }
  ]

  return (
    <section className="testimonials">
      <h2>What Winnipeg Homeowners Say</h2>
      <div className="carousel">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="stars">★★★★★</div>
            <p>"{t.quote}"</p>
            <span className="client">— {t.client}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
