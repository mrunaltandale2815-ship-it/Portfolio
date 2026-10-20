import React, { lazy, Suspense } from "react";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Skills from "./component/Skills";
import Resume from "./component/Resume";
import Contact from "./component/Contact";

const Projects = lazy(() => import("./component/Projects"));

function App() {
  return (
    <>
      <Navbar />
      <header>
        <div className="hero" id="home">
        <p>Hello, I'm</p>
        <h1>Mrunal Tandale</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I create responsive and user-friendly websites
          using modern web technologies.
        </p>
        <a href="#projects" className="btn">
          View My Projects
        </a>
        </div>
        <div className="hero-image">
          <img src="public/WhatsApp_Image_2026-10-19_at_3.53.49_PM-removebg-preview.png" alt="My profile" />
        </div>
      </header>

      <About />

      <section id="projects" className="section">
       <Suspense fallback={<p>Loading projects...</p>}>
          <Projects />
        </Suspense>
      </section>

      <Skills />
      <Resume />
      <Contact />

      <footer>
        <p>© 2026 Mrunal Tandale | React Portfolio</p>
      </footer>
    </>
  );
}

export default App;