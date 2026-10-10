import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import Project from "./components/Project/Project"
import Experience from "./components/Experience/Experience"

function App() {
  return (
    <div className="min-h-screen">
      <Nav></Nav>
      <main>
        <Home></Home>
        <About></About>
        <Experience></Experience>
        <Project></Project>
        <Contact></Contact>
      </main>
    </div>
  )
}

export default App
