export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Winnipeg Homeowners Say</h2>
      <div className="carousel">
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p>"Debbs Renovations transformed our kitchen. Professional, on budget and ahead of schedule. Highly recommend."</p>
          <span className="client">— Sarah M., Winnipeg</span>
        </div>
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p>"They handled our basement development from start to finish. Great communication and quality workmanship."</p>
          <span className="client">— James K., St. Vital</span>
        </div>
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p>"Our commercial tenant improvement was completed with minimal disruption. True general contracting professionals."</p>
          <span className="client">— Linda R., Osborne Village</span>
        </div>
      </div>
    </section>
  )
}
