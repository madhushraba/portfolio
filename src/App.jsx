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
    <>
      <Navbar />
      <Home />
      {/* <div className="img1"> </div> */}
      <About />
      {/* <div className="img1"></div> */}
      <Projects />
      <div className="img1">
        {" "}
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
