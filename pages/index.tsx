import type { NextPage } from "next"
import Head from "next/head"
import About from "../components/About"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Skills from "../components/Skills"

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(0,0,0)] text-[rgb(255,255,255)] h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth scrollbar-hide">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="https://i.postimg.cc/fydX6Kbq/va.jpg" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
          <Hero />
      </section>

      <section id="about" className="snap-center">
          <About />
      </section>

      <section id="experience" className="snap-center">
          <Experience />
      </section>

      <section id="skills" className="snap-center">
          <Skills />
      </section>

      <section id="contact" className="snap-center">
          <Contact />
      </section>
    </div>
  )
}

export default Home