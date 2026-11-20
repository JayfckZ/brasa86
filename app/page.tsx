import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Experience from '@/components/Experience'
import Drinks from '@/components/Drinks'
import Gallery from '@/components/Gallery'
import Reservation from '@/components/Reservation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Experience />
        <Drinks />
        <Gallery />
        <Reservation />
      </main>
      <Footer />
    </>
  )
}
