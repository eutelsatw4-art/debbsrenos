import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-grid">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>Have a question or want to discuss a project? Send us a message and we will reply within one business day.</p>
          <form action="https://formsubmit.co/info@debbsrenos.com" method="POST">
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="tel" name="phone" placeholder="Phone Number" />
            <textarea name="message" rows="5" placeholder="How can we help?" required />
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
            <input type="hidden" name="_captcha" value="false" />
            <button className="cta-btn" type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Our Office</h3>
          <p>Winnipeg, Manitoba</p>
          <p>Email: info@debbsrenos.com</p>
          <p>Phone: 204-000-0000</p>
          <p>Business Hours: Monday - Friday, 8am - 5pm</p>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44665.46678056214!2d-97.19047457363279!3d49.8951776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea73c8e4a9f3d5%3A0x5a3d9a3d3a3a3a3a!2sWinnipeg%2C%20MB!5e0!3m2!1sen!2sca!4v1680000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
