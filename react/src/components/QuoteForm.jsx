export default function QuoteForm() {
  return (
    <section className="quote-section" id="quote">
      <h2>Request a Quote</h2>
      <p>Fill out the form below and our team will get back to you with a detailed estimate.</p>
      <form className="quote-form" action="https://formsubmit.co/info@debbsrenos.com" method="POST">
        <div className="form-row">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
        </div>
        <div className="form-row">
          <input type="tel" name="phone" placeholder="Phone Number" />
          <select name="service" required>
            <option value="">Service Type</option>
            <option value="Residential">Residential Renovation</option>
            <option value="Commercial">Commercial Renovation</option>
            <option value="General Contracting">General Contracting</option>
            <option value="Roofing & Siding">Roofing & Siding</option>
            <option value="Decks">Decks & Outdoor Living</option>
            <option value="Masonry">Masonry & Concrete</option>
            <option value="Painting">Painting & Finishing</option>
            <option value="Windows">Windows & Doors</option>
          </select>
        </div>
        <textarea name="details" rows="6" placeholder="Please describe your project, preferred timeline and any budget considerations..." required />
        <input type="hidden" name="_subject" value="New Quote Request" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="/quote-thank-you" />
        <button className="cta-btn" type="submit">Submit Quote Request</button>
      </form>
    </section>
  )
}
