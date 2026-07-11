import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import ServiceDetail from './pages/ServiceDetail'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    script.src = 'https://embed.tawk.to/6a52bfb39a72601d480b442a/1jt9jpmas'
    document.body.appendChild(script)
  }, [])

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
