import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function initImageFallbacks() {
  const fallbackSrc = 'https://placehold.co/1200x600/EEE/999?text=Image+unavailable'
  document.querySelectorAll('img').forEach((img) => {
    let triedFallback = false
    img.addEventListener('error', () => {
      if (!triedFallback) {
        triedFallback = true
        img.src = fallbackSrc
        img.alt = 'Project image'
      } else {
        img.style.display = 'none'
        const parent = img.parentElement
        if (parent) {
          const fallback = document.createElement('div')
          fallback.className = 'img-fallback'
          fallback.textContent = img.alt || 'Image unavailable'
          parent.insertBefore(fallback, img)
        }
      }
    })
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initImageFallbacks)
} else {
  initImageFallbacks()
}
