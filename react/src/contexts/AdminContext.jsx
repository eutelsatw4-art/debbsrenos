import { createContext, useContext, useEffect, useState } from 'react'

const AdminContext = createContext(null)

export function AdminProvider({ children }) {
  const [adminData, setAdminData] = useState({
    hero: {},
    services: null,
    footer: {},
    contact: {},
    logo: null,
    sliderImages: [],
    sliderContent: []
  })

  useEffect(() => {
    const hero = JSON.parse(localStorage.getItem('admin_hero') || '{}')
    const services = localStorage.getItem('admin_services')
    const footer = JSON.parse(localStorage.getItem('admin_footer') || '{}')
    const contact = JSON.parse(localStorage.getItem('admin_contact') || '{}')
    const logo = localStorage.getItem('admin_logo')
    const sliderImages = JSON.parse(localStorage.getItem('admin_slider_images') || '[]')
    const sliderContent = JSON.parse(localStorage.getItem('admin_slider_content') || '[]')

    setAdminData({
      hero,
      services,
      footer,
      contact,
      logo,
      sliderImages,
      sliderContent
    })
  }, [])

  return (
    <AdminContext.Provider value={adminData}>
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (!context) {
    return {
      hero: {},
      services: null,
      footer: {},
      contact: {},
      logo: null,
      sliderImages: [],
      sliderContent: []
    }
  }
  return context
}
