import './App.css'
import { About } from './presentation/About'
import { BannerHero } from './presentation/BannerHero'
import { Contact } from './presentation/Contact'
import { Experiences } from './presentation/Experiences'
import { Footer } from './presentation/Footer'
import { Header } from './presentation/Header'
import { Portfolio } from './presentation/Portfolio'
import { Recommendation } from './presentation/Recommendation'
import { Services } from './presentation/Services'

function App() {

  return (
    <>
      <Header />
      <BannerHero />
      <About />
      <Services />
      <Portfolio />
      <Experiences />
      <Recommendation />
      <Contact />
      <Footer />
    </>
  )
}

export default App
