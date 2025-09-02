import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
// import CursorFollower from "./components/CursorFollower";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SplashCursor from "./components/SplashCursor";
import { useTheme } from "./hooks/use-theme";

function App() {
  useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-dark-100 dark:via-black dark:to-dark-200 relative text-gray-800 dark:text-gray-200">
{/*       <CursorFollower /> */}
      <SplashCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
