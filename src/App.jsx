import "./App.css";
import Home from "./home/Home";
import Navbar from './navbar/Navbar'
import Projects from './projects/Projects'
import Contact from './contact/Contact'
import About from "./about/About";

function App() {
  // const [count, setCount] = useState(0)

  return <>
  <Navbar/>
  <Home/>
  <About/>
  <Projects/>
  <Contact/>
  </>;
}

export default App;
