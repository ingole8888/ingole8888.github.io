import Contact from "./components/Contact";
import Experience from "./components/Techstack";
import { Showcase } from "./components/Git";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks"
import Tools from "./components/Tools";
import WorkingExp from "./components/WorkingExp";
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <WorkingExp/>
    <SocialLinks/>
    <Experience/>
    <Tools/>
    <Projects/>
    <Showcase/>
    <Contact/>
    </>
  );
}

export default App;
