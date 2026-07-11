import { useState, useEffect } from 'react'
import { useAdmin } from '../contexts/AdminContext'

const ADMIN_PASSWORD = 'admin123'

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(true)
  const [password, setPassword] = useState('')
  const { adminData, setAdminData } = useAdmin()
  const [status, setStatus] = useState('')

  useEffect(() => {
    if (localStorage.getItem('admin_logged_in') === 'true') {
      setIsLoggedIn(true)
      setShowPassword(false)
    }
  }, [])

  const login = () => {
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true)
      setShowPassword(false)
      localStorage.setItem('admin_logged_in', 'true')
    } else {
      setStatus('Invalid password')
    }
  }

  const logout = () => {
    setIsLoggedIn(false)
    setShowPassword(true)
    setPassword('')
    localStorage.removeItem('admin_logged_in')
  }

  const saveField = (key, value) => {
    localStorage.setItem('admin_' + key, value)
    setStatus('Saved!')
    setTimeout(() => setStatus(''), 2000)
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
          <button className="btn btn-success" onClick={() => { exportContent(); setStatus('Exported!'); setTimeout(() => setStatus(''), 2000); }}>Export Content</button>
          <button className="btn btn-secondary" onClick={importContent}>Import Content</button>
          <button className="btn btn-secondary" onClick={logout}>Logout</button>
        </div>
      </div>

      {status && <div className="status success">{status}</div>}

      <div className="admin-nav">
        <button className="active">Content Editor</button>
        <span style={{ marginLeft: 'auto', color: '#666' }}>Changes save automatically to browser storage</span>
      </div>

      <div className="admin-section active">
        <h2>Site Content</h2>
        <div className="form-row">
          <div className="form-group">
            <label>Hero Title</label>
            <input value={adminData.hero?.heroTitle || 'Renovations Built on Trust.'} onChange={(e) => {
              const newHero = { ...adminData.hero, heroTitle: e.target.value }
              localStorage.setItem('admin_hero', JSON.stringify(newHero))
              setAdminData({ ...adminData, hero: newHero })
            }} />
          </div>
          <div className="form-group">
            <label>Hero Subtitle</label>
            <input value={adminData.hero?.heroSubtitle || ''} onChange={(e) => {
              const newHero = { ...adminData.hero, heroSubtitle: e.target.value }
              localStorage.setItem('admin_hero', JSON.stringify(newHero))
              setAdminData({ ...adminData, hero: newHero })
            }} />
          </div>
        </div>

        <div className="form-group">
          <label>Services (Title|Description per line)</label>
          <textarea rows="10" value={adminData.services || ''} onChange={(e) => {
            localStorage.setItem('admin_services', e.target.value)
            setAdminData({ ...adminData, services: e.target.value })
          }} />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Footer Email</label>
            <input value={adminData.footer?.email || 'info@debbsrenos.com'} onChange={(e) => {
              const newFooter = { ...adminData.footer, email: e.target.value }
              localStorage.setItem('admin_footer', JSON.stringify(newFooter))
              setAdminData({ ...adminData, footer: newFooter })
            }} />
          </div>
          <div className="form-group">
            <label>Footer Phone</label>
            <input value={adminData.footer?.phone || '204-000-0000'} onChange={(e) => {
              const newFooter = { ...adminData.footer, phone: e.target.value }
              localStorage.setItem('admin_footer', JSON.stringify(newFooter))
              setAdminData({ ...adminData, footer: newFooter })
            }} />
          </div>
        </div>

        <div className="form-group">
          <label>Copyright Text</label>
          <input value={adminData.footer?.copyright || '© 2026 Debbs Renovations. All rights reserved.'} onChange={(e) => {
            const newFooter = { ...adminData.footer, copyright: e.target.value }
            localStorage.setItem('admin_footer', JSON.stringify(newFooter))
            setAdminData({ ...adminData, footer: newFooter })
          }} />
        </div>
      </div>
    </div>
  )
}

function exportContent() {
  const data = {
    hero: JSON.parse(localStorage.getItem('admin_hero') || '{}'),
    services: localStorage.getItem('admin_services'),
    footer: JSON.parse(localStorage.getItem('admin_footer') || '{}'),
    contact: JSON.parse(localStorage.getItem('admin_contact') || '{}'),
    logo: localStorage.getItem('admin_logo'),
    sliderImages: JSON.parse(localStorage.getItem('admin_slider_images') || '[]'),
    sliderContent: JSON.parse(localStorage.getItem('admin_slider_content') || '[]')
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
