import { useState } from 'react'
import   ButtonGradient from './assets/svg/ButtonGradient'
import './App.css'
import Header from './component/Header'
import Hero from './component/Hero'
import Benifit from './component/Benifit'
import Collebration from './component/collebration'
import Service from './component/Service'
import Pricing from './component/Pricing'
import Roadmap from './component/Roadmap'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'> 
    <Header />
    <Hero />
    <Benifit />
    <Collebration/>
    <Service />
    <Pricing />
    <Roadmap />
    <Footer />
    
   
    </div>
    <ButtonGradient />
  
    </>
     
  )
}

export default App
