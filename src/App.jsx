import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience'
import Volunteering from "./components/volunteer/Volunteering";

function App() {

  return (
    <>
      <Nav />
      <Home />
      <Projects />
      <Experience />
      <Volunteering />
      <Contact />
      <Footer />
    </>
  )
}

export default App
