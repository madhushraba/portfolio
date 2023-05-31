import "./App.css";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import About from "./about/About";
import Footer from "./footer/Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main id="home">
      <Navbar />
      <section className="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>

      <div className="img1">
      <section id="contact">
      <Contact/>
      </section>
      </div>
      <Footer />
    </main>
  );
}

export default App;
