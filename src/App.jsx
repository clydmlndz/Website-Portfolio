import "./App.css";
import { useEffect } from "react";
import ProjectCard from "./components/ProjectCard";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

if (window.location.hash) {
  window.location.replace(window.location.pathname);
}

function App() {
  useEffect(() => {
    // Prevent browser from remembering scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Always scroll to top on page load
    window.scrollTo({ top: 0, behavior: "auto" });

    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);
  return (
    <main className="bg-gray-950 text-white">
      <Navbar />
      <div className="bg-gray-950 text-white">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Anthony Clyde P. Melendez
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-400">
            Aspiring Web Developer | Information Systems Graduate | Looking for
            Entry-Level Dev Role
          </p>
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
          >
            View Projects
          </a>

          <a
            href="/melendez-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-white text-gray-900 font-semibold px-5 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            View Resume
          </a>
        </div>

        {/* About Me Section */}
        <AboutMe />

        {/* Projects Section */}
        <motion.div
          id="projects"
          className="py-20 px-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Pub Express POS System"
              description="A custom-built point-of-sale system tailored for real-world retail workflows."
              tech={["Vue.js", "FastAPI", "Electron", "SQLite"]}
              highlights={[
                "Excel exports with styled sheets",
                "Supervisor & cashier modes",
                "Dynamic promo messaging",
                "Built from scratch in March 2025",
              ]}
              github="https://github.com/moonBSIS/Pub-Express-POS"
              images={[
                "/pos-screenshot1.png",
                "/pos-screenshot2.png",
                "/pos-screenshot3.png",
                "/pos-screenshot4.png",
                "/pos-screenshot5.png",
              ]}
            />

            <ProjectCard
              title="Malnutrition Monitoring & Intervention System (MMIS)"
              description="A role-based web system for monitoring child nutrition and supporting healthcare interventions."
              tech={["HTML", "CSS", "JavaScript", "Flask API", "PostgreSQL"]}
              highlights={[
                "Secure JWT login for RHUs, BHWs, and users",
                "Role-aware dashboards & modular backend",
                "Offline-ready and ML-expandable",
                "Clean Axios + FastAPI integration",
              ]}
              github="https://github.com/moonBSIS/MMIS-Thesis"
              images={[
                "/mmis-screenshot1.png",
                "/mmis-screenshot2.png",
                "/mmis-screenshot3.png",
                "/mmis-screenshot4.png",
                "/mmis-screenshot5.png",
              ]}
            />
          </div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}

export default App;
