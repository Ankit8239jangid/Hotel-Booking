import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'



const Layout = ({ children }) => {
  return (
    <div className = "flex flex-col gap-4 min-h-screen">
      <Header />
      <Hero/>

      {children}
     
      <Footer/>
    </div>
  )
}

export default Layout
