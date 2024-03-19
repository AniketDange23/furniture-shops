import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Blogs from './components/Blogs'
import HeroSection from './components/HeroSection'
import Carts from './components/Carts'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Products from './components/Products'


const App = () => {

  return (
<div>
  <HeroSection/>
  <Carts/>
  <AboutUs/>
  <Services/>
  <Products/>
  <Testimonials />
  <Blogs/>
  <Footer/>
</div>  )
}

export default App
