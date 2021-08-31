import Head from 'next/head'
import ContactActions from '../sections/ContactActions'
import Header from '../sections/Header'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Footer from '../sections/Footer'
import Works from '../sections/Works'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lautaro Soffici</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-[100vh] mx-auto w-full max-w-[1600px] px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]">
        <Hero />
        <About />
        <ContactActions />
        <Works />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
