import { AboutSection } from './components/AboutSection'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'
import { GallerySection } from './components/GallerySection'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { PortfolioOrPartnersSection } from './components/PortfolioOrPartnersSection'
import { ProcessSection } from './components/ProcessSection'
import { ServicesSection } from './components/ServicesSection'
import { WhyChooseUsSection } from './components/WhyChooseUsSection'

function App() {
  return (
    <div className="min-h-screen bg-[#f6f3ec] text-[#183f40]">
      <HeroSection nav={<Navbar />} />
      <main>
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <PortfolioOrPartnersSection />
        <GallerySection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
