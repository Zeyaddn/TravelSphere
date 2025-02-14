import Navbar from './components/Navbar'
import Section from './components/Section'
import HeroSection from './components/HeroSection'
import Slide from './components/Slide'
import Choose from './components/Choose'
import Card from './components/Card'
import Carousell from './components/Carousell'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import Reviews from './components/Reviews'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Section/>
      <HeroSection/>
      <Slide/>
      <Card/>
      <Choose/>
      <Carousell/>
      <Reviews/>
      <BlogSection/>
      <Footer/>
    </div>
  )
}

export default App