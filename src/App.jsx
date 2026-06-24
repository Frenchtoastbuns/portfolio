import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Modules from "./components/Modules.jsx";
import Navbar from "./components/Navbar.jsx";
import OutsideLab from "./components/OutsideLab.jsx";
import Projects from "./components/Projects.jsx";
import Publications from "./components/Publications.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <div className="site-bg min-h-screen text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Modules />
        <Skills />
        <Publications />
        <OutsideLab />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
