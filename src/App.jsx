import "./styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectOne from "./components/ProjectOne";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import ReturnTopButton from "./components/ReturnTopButton";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <ProjectOne/>
      <Contacts/>
      <Footer/>
      <ReturnTopButton/>
    </div>
  );
}

export default App;
