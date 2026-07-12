import { useState, useEffect } from 'react'
import { useAdmin } from '../contexts/AdminContext'

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'

const defaultSliderImages = [
  'images/kitchen.jpg',
  'images/bathroom.jpg',
  'images/construction.jpg',
  'images/exterior.jpg',
  'images/basement.jpg',
  'images/home-exterior.jpg',
  'images/commercial.jpg',
  'images/construction.jpg'
]

const defaultSliderContent = [
  { title: 'Modern Kitchen Renovation', desc: 'West Winnipeg family home — full kitchen remodel with custom cabinetry and quartz countertops.' },
  { title: 'Luxury Bathroom Remodel', desc: 'Tuxedo area residence — spa-inspired bathroom with heated floors and custom tile work.' },
  { title: 'New Home Construction', desc: 'Custom single-family home build in South Winnipeg — from foundation to finish carpentry.' },
  { title: 'Exterior & Deck Project', desc: 'Outdoor living space with composite decking, railings and integrated LED lighting in St. Vital.' },
  { title: 'Basement Development', desc: 'Lower level suite with entertainment area, home gym and full bathroom in Charleswood.' },
  { title: 'Siding Replacement', desc: 'Full vinyl siding upgrade in St. Boniface — improved insulation and fresh curb appeal.' },
  { title: 'Commercial Office Build-Out', desc: 'Tenant improvement for a downtown Winnipeg office — new partitions, flooring and lighting.' },
  { title: 'Concrete Patio & Walkways', desc: 'New stamped concrete patio and front walkway in Bridgwater Lakes, designed for Manitoba winters.' }
]

const defaultTestimonials = [
  { quote: 'Debbs Renovations transformed our kitchen. Professional, on budget and ahead of schedule. Highly recommend.', client: 'Sarah M., Winnipeg' },
  { quote: 'They handled our basement development from start to finish. Great communication and quality workmanship.', client: 'James K., St. Vital' },
  { quote: 'Our commercial tenant improvement was completed with minimal disruption. True general contracting professionals.', client: 'Linda R., Osborne Village' }
]

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')
  const [activeSection, setActiveSection] = useState('hero')
  const { adminData, setAdminData } = useAdmin()

  const hero = adminData.hero || {}
  const footer = adminData.footer || {}
  const contact = adminData.contact || {}
  const sliderImages = adminData.sliderImages || defaultSliderImages
  const sliderContent = adminData.sliderContent || defaultSliderContent
  const testimonials = adminData.testimonials || defaultTestimonials
  const servicesText = adminData.services || defaultServicesText()

  useEffect(() => {
    if (localStorage.getItem('admin_logged_in') === 'true') {
      setIsLoggedIn(true)
    }
  }, [])

  const login = () => {
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true)
      localStorage.setItem('admin_logged_in', 'true')
    } else {
      setStatus('Invalid password')
    }
  }

  const logout = () => {
    setIsLoggedIn(false)
    setPassword('')
    localStorage.removeItem('admin_logged_in')
  }

  const updateAdminData = (key, value) => {
    setAdminData({ ...adminData, [key]: value })
  }

  const showStatus = (message, type) => {
    setStatus(message)
    setTimeout(() => setStatus(''), 3000)
  }

  if (!isLoggedIn) {
    return (
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.8)', display: 'flex',
        alignItems: 'center', justifyContent: 'center', zIndex: 9999
      }}>
        <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', width: '100%', maxWidth: '400px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Admin Login</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && login()}
            placeholder="Enter admin password"
            style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '1rem' }}
          />
          <button onClick={login} style={{ width: '100%', background: '#f39c12', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            Login
          </button>
          <p style={{ textAlign: 'center', marginTop: '1rem', color: '#666', fontSize: '0.9rem' }}>Default: admin123</p>
          {status && <p style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>{status}</p>}
        </div>
      </div>
    )
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <div>
          <h1>Website Admin</h1>
          <p>Manage content, images, and site settings</p>
        </div>
        <div>
          <button className="btn btn-success" onClick={() => { exportContent(); showStatus('Exported!', 'success'); }}>Export Content</button>
          <button className="btn btn-secondary" onClick={importContent}>Import Content</button>
          <button className="btn btn-secondary" onClick={logout}>Logout</button>
        </div>
      </div>

      {status && <div className="status success">{status}</div>}

      <div className="admin-nav">
        <button className={activeSection === 'hero' ? 'active' : ''} onClick={() => setActiveSection('hero')}>Hero</button>
        <button className={activeSection === 'slider' ? 'active' : ''} onClick={() => setActiveSection('slider')}>Slider Images</button>
        <button className={activeSection === 'slider-content' ? 'active' : ''} onClick={() => setActiveSection('slider-content')}>Slider Content</button>
        <button className={activeSection === 'services' ? 'active' : ''} onClick={() => setActiveSection('services')}>Services</button>
        <button className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => setActiveSection('portfolio')}>Portfolio</button>
        <button className={activeSection === 'testimonials' ? 'active' : ''} onClick={() => setActiveSection('testimonials')}>Testimonials</button>
        <button className={activeSection === 'faqs' ? 'active' : ''} onClick={() => setActiveSection('faqs')}>FAQs</button>
        <button className={activeSection === 'footer' ? 'active' : ''} onClick={() => setActiveSection('footer')}>Footer</button>
        <button className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>Contact</button>
      </div>

      {activeSection === 'hero' && (
        <div className="admin-section active">
          <h2>Homepage Hero</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Hero Title</label>
              <input value={hero.heroTitle || 'Renovations Built on Trust.'} onChange={(e) => {
                updateAdminData('hero', { ...hero, heroTitle: e.target.value })
              }} />
            </div>
            <div className="form-group">
              <label>Hero Button Text</label>
              <input value={hero.heroBtnText || 'Explore Services'} onChange={(e) => {
                updateAdminData('hero', { ...hero, heroBtnText: e.target.value })
              }} />
            </div>
          </div>
          <div className="form-group">
            <label>Hero Subtitle</label>
            <input value={hero.heroSubtitle || ''} onChange={(e) => {
              updateAdminData('hero', { ...hero, heroSubtitle: e.target.value })
            }} />
          </div>
          <button className="btn" onClick={() => showStatus('Hero saved!', 'success')}>Save Hero</button>
        </div>
      )}

      {activeSection === 'slider' && (
        <div className="admin-section active">
          <h2>Slider Images</h2>
          <p style={{ marginBottom: '1rem', color: '#666' }}>Enter image paths for each slide. Use absolute paths or URLs.</p>
          {sliderImages.map((src, i) => (
            <div className="form-group" key={i}>
              <label>Slide {i + 1} Image Path</label>
              <input value={src} onChange={(e) => {
                const newImages = [...sliderImages]
                newImages[i] = e.target.value
                localStorage.setItem('admin_slider_images', JSON.stringify(newImages))
                updateAdminData('sliderImages', newImages)
              }} />
            </div>
          ))}
          <button className="btn" onClick={() => showStatus('Slider images saved!', 'success')}>Save Images</button>
        </div>
      )}

      {activeSection === 'slider-content' && (
        <div className="admin-section active">
          <h2>Slider Content</h2>
          <p style={{ marginBottom: '1rem', color: '#666' }}>Edit titles and descriptions for each slide.</p>
          {sliderContent.map((slide, i) => (
            <div className="form-group" key={i}>
              <label>Slide {i + 1} Title|Description</label>
              <input value={`${slide.title}|${slide.desc}`} onChange={(e) => {
                const parts = e.target.value.split('|')
                const newContent = [...sliderContent]
                newContent[i] = { title: parts[0]?.trim() || '', desc: parts[1]?.trim() || '' }
                localStorage.setItem('admin_slider_content', JSON.stringify(newContent))
                updateAdminData('sliderContent', newContent)
              }} />
            </div>
          ))}
          <button className="btn" onClick={() => showStatus('Slider content saved!', 'success')}>Save Slider Content</button>
        </div>
      )}

      {activeSection === 'services' && (
        <div className="admin-section active">
          <h2>Services Widget Content</h2>
          <p style={{ marginBottom: '1rem', color: '#666' }}>Edit service titles and descriptions. Use format: Title|Description (one per line)</p>
          <div className="form-group">
            <label>Services List</label>
            <textarea rows="12" value={servicesText} onChange={(e) => {
              localStorage.setItem('admin_services', e.target.value)
              updateAdminData('services', e.target.value)
            }} />
          </div>
          <button className="btn" onClick={() => showStatus('Services saved!', 'success')}>Save Services</button>
        </div>
      )}

      {activeSection === 'portfolio' && (
        <div className="admin-section active">
          <h2>Portfolio Section</h2>
          <p style={{ marginBottom: '1rem', color: '#666' }}>Edit the portfolio items shown on the home page. Use format: ImagePath|Title|Description</p>
          <div className="form-group">
            <label>Portfolio Items</label>
            <textarea rows="10" value={adminData.portfolio || defaultPortfolioText()} onChange={(e) => {
              localStorage.setItem('admin_portfolio', e.target.value)
              updateAdminData('portfolio', e.target.value)
            }} />
          </div>
          <button className="btn" onClick={() => showStatus('Portfolio saved!', 'success')}>Save Portfolio</button>
        </div>
      )}

      {activeSection === 'testimonials' && (
        <div className="admin-section active">
          <h2>Testimonials</h2>
          <p style={{ marginBottom: '1rem', color: '#666' }}>Edit testimonial quotes and client names.</p>
          {testimonials.map((t, i) => (
            <div key={i} style={{ marginBottom: '1.5rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <div className="form-group">
                <label>Testimonial {i + 1} Quote</label>
                <textarea rows="3" value={t.quote} onChange={(e) => {
                  const newTestimonials = [...testimonials]
                  newTestimonials[i] = { ...newTestimonials[i], quote: e.target.value }
                  localStorage.setItem('admin_testimonials', JSON.stringify(newTestimonials))
                  updateAdminData('testimonials', newTestimonials)
                }} />
              </div>
              <div className="form-group">
                <label>Client Name & Location</label>
                <input value={t.client} onChange={(e) => {
                  const newTestimonials = [...testimonials]
                  newTestimonials[i] = { ...newTestimonials[i], client: e.target.value }
                  localStorage.setItem('admin_testimonials', JSON.stringify(newTestimonials))
                  updateAdminData('testimonials', newTestimonials)
                }} />
              </div>
            </div>
          ))}
          <button className="btn" onClick={() => showStatus('Testimonials saved!', 'success')}>Save Testimonials</button>
        </div>
      )}

      {activeSection === 'faqs' && (
        <div className="admin-section active">
          <h2>FAQ Content</h2>
          <p style={{ marginBottom: '1rem', color: '#666' }}>Edit frequently asked questions. Use format: Question|Answer (one per line)</p>
          <div className="form-group">
            <label>FAQs List</label>
            <textarea rows="16" value={adminData.faqsText || defaultFaqsText()} onChange={(e) => {
              localStorage.setItem('admin_faqs', e.target.value)
              updateAdminData('faqsText', e.target.value)
            }} />
          </div>
          <button className="btn" onClick={() => showStatus('FAQs saved!', 'success')}>Save FAQs</button>
        </div>
      )}

      {activeSection === 'footer' && (
        <div className="admin-section active">
          <h2>Footer Content</h2>
          <div className="form-group">
            <label>Company Description</label>
            <textarea rows="3" value={footer.desc || ''} onChange={(e) => {
              updateAdminData('footer', { ...footer, desc: e.target.value })
            }} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input value={footer.email || 'info@debbsrenos.com'} onChange={(e) => {
                updateAdminData('footer', { ...footer, email: e.target.value })
              }} />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input value={footer.phone || '204-000-0000'} onChange={(e) => {
                updateAdminData('footer', { ...footer, phone: e.target.value })
              }} />
            </div>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input value={footer.address || 'Winnipeg, Manitoba'} onChange={(e) => {
              updateAdminData('footer', { ...footer, address: e.target.value })
            }} />
          </div>
          <div className="form-group">
            <label>Copyright Text</label>
            <input value={footer.copyright || '© 2026 Debbs Renovations. All rights reserved.'} onChange={(e) => {
              updateAdminData('footer', { ...footer, copyright: e.target.value })
            }} />
          </div>
          <button className="btn" onClick={() => showStatus('Footer saved!', 'success')}>Save Footer</button>
        </div>
      )}

      {activeSection === 'contact' && (
        <div className="admin-section active">
          <h2>Contact Information</h2>
          <div className="form-group">
            <label>Business Hours</label>
            <input value={contact.hours || 'Monday - Friday, 8am - 5pm'} onChange={(e) => {
              updateAdminData('contact', { ...contact, hours: e.target.value })
            }} />
          </div>
          <div className="form-group">
            <label>Contact Form Email (FormSubmit)</label>
            <input value={contact.formEmail || 'info@debbsrenos.com'} onChange={(e) => {
              updateAdminData('contact', { ...contact, formEmail: e.target.value })
            }} />
          </div>
          <div className="form-group">
            <label>Contact Form Subject</label>
            <input value={contact.contactSubject || 'New Contact Form Submission'} onChange={(e) => {
              updateAdminData('contact', { ...contact, contactSubject: e.target.value })
            }} />
          </div>
          <div className="form-group">
            <label>Quote Form Subject</label>
            <input value={contact.quoteSubject || 'New Quote Request'} onChange={(e) => {
              updateAdminData('contact', { ...contact, quoteSubject: e.target.value })
            }} />
          </div>
          <div className="form-group">
            <label>Office Address</label>
            <input value={contact.address || 'Winnipeg, Manitoba'} onChange={(e) => {
              updateAdminData('contact', { ...contact, address: e.target.value })
            }} />
          </div>
          <button className="btn" onClick={() => showStatus('Contact saved!', 'success')}>Save Contact</button>
        </div>
      )}
    </div>
  )
}

function defaultServicesText() {
  return [
    'Residential|Kitchen remodels, bathroom upgrades, basement finishing, flooring, painting and full home renovations tailored to your lifestyle and budget.',
    'Commercial|Office build-outs, retail renovations, tenant improvements and commercial property upgrades with minimal disruption to your business.',
    'Municipal|Project management, subcontractor coordination, permit handling and on-site supervision for renovations of any size.',
    'Roofing & Siding|Roof repairs and replacements, vinyl and fibre cement siding installations, soffit, fascia and gutter upgrades.',
    'Decks & Outdoor Living|Custom deck design and construction, pergolas, fencing and backyard transformations for Manitoba summers.',
    'Masonry & Concrete|Foundation repairs, concrete patios, walkways, retaining walls and brickwork built to withstand Winnipeg\'s freeze-thaw cycles.',
    'Painting & Finishing|Interior and exterior painting, drywall finishing, texture work and color consultations for a flawless, lasting finish.',
    'Windows & Doors|Window replacements, door installations, and trim work to improve energy efficiency, security and curb appeal.'
  ].join('\n')
}

function defaultPortfolioText() {
  return [
    '/kitchen.jpg|Modern Kitchen Renovation|Custom cabinetry, quartz countertops and full remodel in West Winnipeg.',
    '/bathroom.jpg|Luxury Bathroom Remodel|Spa-inspired bathroom with heated floors and custom tile work in Tuxedo.',
    '/construction.jpg|New Home Construction|Full single-family home build from foundation to finish in South Winnipeg.',
    '/exterior.jpg|Exterior & Deck Project|Composite decking, railings and outdoor living space in St. Vital.',
    '/basement.jpg|Basement Development|Lower level suite with entertainment area, home gym and bathroom in Charleswood.',
    '/home-exterior.jpg|Siding Replacement|Full vinyl siding upgrade with improved insulation in St. Boniface.',
    '/commercial.jpg|Commercial Office Build-Out|Downtown Winnipeg tenant improvement with new partitions and lighting.',
    '/deck.jpg|Custom Deck Build|Outdoor deck and backyard expansion built for Manitoba weather.'
  ].join('\n')
}

function defaultFaqsText() {
  const defaultFaqs = [
    { question: 'What areas do you serve?', answer: 'We serve Winnipeg and surrounding communities including St. Vital, Charleswood, Tuxedo, West Winnipeg, South Winnipeg, St. Boniface, Osborne Village, and Bridgwater Lakes.' },
    { question: 'Are you licensed and insured?', answer: 'Yes, Debbs Renovations is fully licensed, insured, and compliant with Manitoba building codes. We carry comprehensive liability insurance for every project.' },
    { question: 'Do you provide free estimates?', answer: 'Yes, we offer free, no-obligation consultations and estimates. Contact us to schedule a site visit and receive a detailed, itemized quote.' },
    { question: 'How long does a typical renovation take?', answer: 'Timelines vary by project. A kitchen remodel typically takes 4-6 weeks, a bathroom renovation 2-3 weeks, and larger projects like basement developments or whole-home renovations may take 2-4 months. We provide a detailed schedule during the planning phase.' },
    { question: 'Do you help with permits and inspections?', answer: 'Yes, we handle all permit applications and coordinate municipal inspections as part of our full-service contracting process.' },
    { question: 'What payment terms do you offer?', answer: 'We use transparent, milestone-based billing. You will receive itemized invoices at key project stages. Payment schedules are discussed and agreed upon before work begins.' },
    { question: 'Is there a warranty on your work?', answer: 'Yes, we provide a workmanship warranty on every project for your peace of mind. Specific warranty terms depend on the type of work and materials used, and will be outlined in your contract.' },
    { question: 'Can I make changes during the project?', answer: 'Yes. We understand that plans can evolve. We have a simple change-order process to review adjustments, update timelines, and confirm pricing before proceeding.' }
  ]
  return defaultFaqs.map(f => `${f.question}|${f.answer}`).join('\n')
}

function exportContent() {
  const data = {
    hero: JSON.parse(localStorage.getItem('admin_hero') || '{}'),
    services: localStorage.getItem('admin_services'),
    footer: JSON.parse(localStorage.getItem('admin_footer') || '{}'),
    contact: JSON.parse(localStorage.getItem('admin_contact') || '{}'),
    logo: localStorage.getItem('admin_logo'),
    sliderImages: JSON.parse(localStorage.getItem('admin_slider_images') || '[]'),
    sliderContent: JSON.parse(localStorage.getItem('admin_slider_content') || '[]'),
    testimonials: JSON.parse(localStorage.getItem('admin_testimonials') || '[]'),
    portfolio: localStorage.getItem('admin_portfolio'),
    faqs: localStorage.getItem('admin_faqs')
  }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'website-content-backup.json'
  a.click()
  URL.revokeObjectURL(url)
}

function importContent() {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'application/json'
  input.onchange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result)
        Object.keys(data).forEach(key => {
          if (data[key] !== undefined && data[key] !== null) {
            const storageKey = key === 'logo' ? key : 'admin_' + key
            localStorage.setItem(storageKey, JSON.stringify(data[key]))
          }
        })
        window.location.reload()
      } catch (err) {
        alert('Error importing file')
      }
    }
    reader.readAsText(file)
  }
  input.click()
}
