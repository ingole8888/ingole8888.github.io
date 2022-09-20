import Contact from "./components/Contact";
import Experience from "./components/Techstack";
import { Showcase } from "./components/Git";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks"
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <SocialLinks/>
    <Experience/>
    <Projects/>
    <Showcase/>
    <Contact/>
    </>
  );
}

export default App;
