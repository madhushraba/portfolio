import "./App.css";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
// import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import About from "./about/About";
import Footer from "./footer/Footer";
import Project from "./projects/Project";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./projects/Projects";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}

          <Route path="allpro" element={<Projects />} />
        </Routes>

        <main id="home">
          <Navbar />
          <section className="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            {/* < Projects /> */}
            <Project />
          </section>

          <div className="img1">
            <section id="contact">
              <Contact />
            </section>
          </div>
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
