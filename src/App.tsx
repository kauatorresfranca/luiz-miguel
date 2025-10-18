import AboutMe from "./components/sections/about-me"
import FAQ from "./components/sections/faq"
import Footer from "./components/sections/footer"
import Header from "./components/sections/header"
import Hero from "./components/sections/hero"
import Services from "./components/sections/services"

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <AboutMe />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
