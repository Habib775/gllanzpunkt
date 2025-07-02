import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Offers from '@/components/Offers'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Offers />
      <Gallery />
      <Footer />
    </main>
  )
}

