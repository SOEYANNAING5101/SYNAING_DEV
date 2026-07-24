import { useState, useEffect } from "react";
import banking_preview from "../assets/banking_preview.png";
import school_cca_preview from "../assets/school_cca_preview.png";
import hdb_resale_preview from "../assets/hdb_resale_preview.png";
import edulift_preview from "../assets/edulift_preview.png";
import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import ParticleNetwork from "../ParticleNetwork";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
const LandingPage = () => {
  const skills = [
    { name: "JavaScript" },
    { name: "React.js" },
    { name: "Node.js / Express" },
    { name: "Python" },
    { name: "PostgreSQL / SQL" },
    { name: "Docker / CI/CD" },
    { name: "Tailwind CSS" },
    { name: "Jest/Cypress" },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  // The clean data array updated with your resume details
  const projectData = [
    {
      id: 1,
      permission: "drwx r-- r--",
      title: "Full-Stack Financial Dashboard & Banking App",
      shortDesc:
        "Engineered a secure, full-stack banking platform featuring interactive financial dashboards, dynamic transaction ledgering, and real-time data visualization.",
      detailedDesc:
        "Designed a complex PostgreSQL relational schema to handle robust transaction mapping, utilizing multi-table SQL joins and transaction-safe queries to ensure ledger integrity. Enforced strict business logic gatekeepers for transaction limit validations and account status checks, ensuring professional-grade security and financial compliance.",
      image: banking_preview,
      features: [
        "High-integrity backend with Clerk-based authentication and idempotency logic to prevent duplicate transactions",
        "Complex PostgreSQL relational schema for transaction-safe queries and ledger integrity",
        "Highly responsive UI leveraging TanStack Query for efficient server-state management and infinite scrolling",
      ],
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/SOEYANNAING5101/united_bank",
      liveLink: "https://united-bank-five.vercel.app/",
    },
    {
      id: 2,
      permission: "-rwx r-x r-x",
      title: "HDB Resale Price Prediction Application",
      shortDesc:
        "Developed and deployed a machine learning web application to predict HDB resale prices using Singapore housing transaction datasets.",
      detailedDesc:
        "Performed extensive data preprocessing and feature engineering. A standout technical feature was deriving a custom 'risk_score' column, demonstrating a deep understanding of the original dataset columns to improve prediction accuracy. Achieved model optimization using MSE and R² metrics.",
      image: hdb_resale_preview,
      features: [
        "Feature engineering including custom data derivations like 'risk_score'",
        "Hyperparameter tuning using RandomForestRegressor and GradientBoostingRegressor",
        "Deployed on Streamlit Cloud with GitHub integration and Git LFS for large model management",
      ],
      tech: ["Python", "Scikit-learn", "Streamlit", "Machine Learning"],
      github: "",
      liveLink: "",
    },

    {
      id: 3,
      permission: "drwx r-x r-x",
      title: "AI-Powered Slide Generation System (Edulift V2)",
      shortDesc:
        "Developed an AI-powered slide generation system that converts teaching notes into PowerPoint presentations.",
      detailedDesc:
        "Implemented a dynamic template scanner to analyze uploaded PowerPoint layouts and placeholders using python-pptx. Designed a JSON-based template registry system to support flexible slide generation workflows.",
      image: edulift_preview,
      features: [
        "Dynamic template scanner to analyze PowerPoint layouts using python-pptx",
        "Integrated Gemini API for content generation and Pexels API for automated image sourcing",
        "JSON-based template registry system to support flexible workflows",
      ],
      tech: ["Python", "Streamlit", "Gemini API", "Pexels API", "python-pptx"],
      github: "https://github.com/SOEYANNAING5101/edulift",
      liveLink: "",
    },
    {
      id: 4,
      permission: "drwx r-x r-x",
      title: "Football CCA Management System",
      shortDesc:
        "Full-stack application engineered to manage club activities. Features comprehensive player analytics, tracking match statistics such as goals, assists, and dribbling.",
      detailedDesc:
        "Developed a centralized platform for managing football club activities. Includes deep-dive analytics modeling to track individual player statistics like goals, assists, and dribbling metrics over multiple matches and seasons.",
      image: school_cca_preview,
      features: [
        "Comprehensive player analytics tracking (goals, assists, dribbling metrics)",
        "Club activity and match schedule management dashboard",
        "RESTful API architecture for scalable data retrieval",
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "",
      liveLink: "",
    },
  ];

  // 3. Helper function to apply dynamic underline styling
  const navStyle =
    "font-mono text-sm font-bold text-gray-300 hover:text-white hover:underline underline-offset-8 decoration-2 cursor-pointer transition-all duration-200";
  return (
    <div className="min-h-screen bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,#e5e7eb_3px,#e5e7eb_4px)]">
      {/* Navbar */}
      <div className="bg-neutral-900 w-full px-6 py-4 flex items-center justify-between fixed top-0 left-0 z-50 shrink-0">
        <p className="text-lg font-black text-green-400 font-sans">
          SYNAING.DEV
        </p>
        <div className="hidden md:flex gap-5 lg:gap-10">
          <a href="#home" className={navStyle}>
            Home
          </a>
          <a href="#about" className={navStyle}>
            About
          </a>
          <a href="#experience" className={navStyle}>
            Experience
          </a>
          <a href="#projects" className={navStyle}>
            Projects
          </a>
          <a href="#skills" className={navStyle}>
            Skills
          </a>
          <a href="#hobbies" className={navStyle}>
            Hobbies
          </a>
          <a href="#contact" className={navStyle}>
            Contact
          </a>
        </div>
        <a
          href="Soe_Yan_Naing_Resume_FullStack.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm border border-green-400 px-4 py-1.5 text-green-400 transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 cursor-pointer"
        >
          Resume
        </a>
      </div>
      {/* Home */}
      <motion.div
        id="home"
        className="min-h-screen  flex flex-col justify-center p-5 md:p-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Left side */}
        <div className="z-10 flex flex-col justify-center max-w-2xl">
          <span className="font-mono text-green-400 font-sm font-bold mb-4">
            {"> ./initialize_profile.sh"}
          </span>
          <span className="font-sans text-7xl text-gray-300 font-bold mb-2">
            SOE YAN NAING
          </span>
          <span className="font-sans text-4xl text-neutral-700 font-semibold tracking-wider mb-4">
            ENGINEERED FOR PERFORMANCE
            <span className="animate-blink">_</span>
          </span>
          <p className="font-sans text-sm text-green-400 max-w-lg mb-4">
            Executing high-fidelity web applications. Specializing in robust
            architectures and seamless user experiences. System ready
          </p>
          <button className="w-full max-w-[150px] font-mono text-sm  text-green-400 transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 cursor-pointer">
            [ VIEW_MODULES ]
          </button>
        </div>

        {/* RIGHT SIDE: The 3D Animation */}
        <div className="absolute top-0 right-0 w-full md:w-3/4 h-full pointer-events-none opacity-50 md:opacity-100">
          <Canvas camera={{ position: [0, 0, 5], fov: 90 }}>
            <ParticleNetwork />
          </Canvas>
        </div>
      </motion.div>
      {/* About */}
      <motion.div
        id="about"
        className=" p-5 md:p-10 scroll-mt-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="font-mono text-green-400 font-sm font-bold mb-4 md:mb-8">
          {"> cat /var/log/system_status.log"}
        </p>
        <div className="w-full bg-[repeating-linear-gradient(0deg,#2d2d2d,#2d2d2d_2px,#252525_2px,#252525_4px)] p-6 sm:p-8.">
          <p className="font-mono text-sm font-bold text-gray-400">
            root@synaing:~
          </p>
          <p className="font-mono text-sm font-bold text-cyan-400 ml-2 mt-4">
            STATUS:{" "}
            <span className="font-mono text-sm text-gray-400 ml-3">ONLINE</span>
          </p>
          <p className="font-mono text-sm font-bold text-cyan-400 ml-2 mt-4">
            EDUCATION:{" "}
            <span className="font-mono text-sm text-gray-400 ml-3">
              Temasek Polytechnic - Diploma In IT (May 2026)
            </span>
          </p>
          <p className="font-mono text-sm font-bold text-cyan-400 ml-2 mt-4">
            ROLE:{" "}
            <span className="font-mono text-sm text-gray-400 ml-3">
              Fullstack Developer / Software Engineer
            </span>
          </p>
          <p className="hidden md:block ml-2 mt-4 font-mono text-xs text-gray-400">
            <span>Loading bio ...</span>
            <span className="max-w-lg">
              A highly motivated software engineer dedicated to building
              scalable and performant web applications. Proficient in modern
              JavaScript ecosystems and back-end architectures. Committed to
              clean code and continuous integration.
            </span>
          </p>
        </div>
      </motion.div>
      {/* Experience */}
      <motion.div
        id="experience"
        className="p-5 md:p-10 scroll-mt-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="font-mono text-green-400 font-sm font-bold mb-4 md:mb-8">
          {"> history | grep 'experience'"}
        </p>
        <div className="w-full bg-[repeating-linear-gradient(0deg,#2d2d2d,#2d2d2d_2px,#252525_2px,#252525_4px)] p-6 sm:p-8">
          <p className="font-mono text-sm font-bold text-gray-400">
            root@synaing:~
          </p>
          <div className="font-mono ml-2 mt-4  border-l-3 border-green-400 px-2 flex flex-col">
            <span className="font-mono text-sm font-bold text-cyan-400">
              Digital Ambassador Intern
            </span>
            <span className="font-mono text-xs font-bold text-gray-200 mb-3">
              Temasek Polytechnic ITSM | May 2025 - Aug 2025
            </span>
            <span className="font-mono text-xs  text-gray-400 ml-3 mb-2">
              - Automated compliance workflows utilizing Power Automate
            </span>
            <span className="font-mono text-xs  text-gray-400 ml-3 mb-2">
              - Managed device configuration via ServiceNow and Microsoft Intune
            </span>
            <span className="font-mono text-xs  text-gray-400 ml-3 mb-2">
              - Collaborated on technical documentaion and supported
              cross-funcional Team calls.
            </span>
          </div>
        </div>
      </motion.div>
      {/* Projects */}
      <div id="projects" className="p-5 md:p-10 scroll-mt-24">
        <p className="font-mono text-green-400 font-sm font-bold mb-4 md:mb-8">
          {"> ls -ls ./projects"}
        </p>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
          {projectData.map((project, index) => (
            <motion.div
              className="w-full bg-[repeating-linear-gradient(0deg,#2d2d2d,#2d2d2d_2px,#252525_2px,#252525_4px)] p-6 sm:p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <h1 className="text-white font-bold font-mono font-bold text-xl md:text-2xl mb-5">
                {project.permission}
              </h1>
              <p className="font-mono text-sm font-bold text-cyan-400 mb-2">
                {project.title}
              </p>
              <p className="font-mono text-sm font-bold text-gray-400 mb-6">
                {project.shortDesc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tool, index) => (
                  <div
                    key={index}
                    className="border border-gray-400 font-mono md:text-sm text-xs text-gray-400 px-2 py-1 whitespace-wrap"
                  >
                    {tool}
                  </div>
                ))}
              </div>
              <button
                onClick={() => setSelectedProject(project)}
                className="font-mono text-sm  text-green-400 transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 cursor-pointer"
              >
                [ VIEW DETAILS ]
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Skills */}
      <motion.div
        id="skills"
        className="p-5 md:p-10 scroll-mt-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="font-mono text-green-400 font-sm font-bold mb-4 md:mb-8">
          {"> cat /var/log/system_status.log"}
        </p>
        <div className="w-full bg-[repeating-linear-gradient(0deg,#2d2d2d,#2d2d2d_2px,#252525_2px,#252525_4px)] p-6 sm:p-8">
          <div className="ml-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
            {skills.map((skill, index) => (
              <div key={index} className=" flex items-center gap-2 text-xs">
                <span className="text-green-400">├──</span>
                <span className="font-mono  font-bold text-gray-400">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      {/* Hobbies */}
      <motion.div
        id="hobbies"
        className="p-5 md:p-10 scroll-mt-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="font-mono text-green-400 font-sm font-bold mb-4 md:mb-8">
          {"> npm list --depth=0"}
        </p>
        <div className="w-full bg-[repeating-linear-gradient(0deg,#2d2d2d,#2d2d2d_2px,#252525_2px,#252525_4px)] p-6 sm:p-8">
          <p className="font-mono text-sm font-bold text-cyan-400 ml-2 mt-4">
            #Interest & Extracurriculars
          </p>
          <p className="font-mono text-xs font-bold text-gray-400 ml-2 mt-4">
            Deep dive into football analytics and player stats modeling
          </p>
          <p className="font-mono text-xs font-bold text-gray-400 ml-2 mt-4">
            High appreciation for cinematography and storytelling in TV Series
            and Films
          </p>
        </div>
      </motion.div>
      {/* View resume button */}
      <motion.div
        id="hobbies"
        className="p-5 md:p-10 scroll-mt-24 flex items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a
          href="Soe_Yan_Naing_Resume_FullStack.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm border hover:border-green-400 hover:bg-transparent px-4 py-1.5 hover:text-green-400 transition-all duration-300 bg-green-400 text-black border-green-400 cursor-pointer"
        >
          Resume
        </a>
      </motion.div>

      {/* Contact */}
      <motion.div
        id="contact"
        className="bg-neutral-900 w-full p-5 md:p-10 flex flex-col md:flex-row items-center gap-4 w-full justify-between scroll-mt-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="font-mono text-base font-bold text-gray-200">
          SYNAING.DEV
        </span>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            href="https://github.com/SOEYANNAING5101"
            className="font-mono text-xs font-bold text-gray-300 hover:text-gray-100 cursor-pointer transition-all duration-200"
          >
            GitHub
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            href="https://www.linkedin.com/in/soe-yan-naing-9899a7272/"
            className="font-mono text-xs font-bold text-gray-300 hover:text-gray-100 cursor-pointer transition-all duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:soeyannaing5101@gmail.com"
            className="font-mono text-xs font-bold text-gray-300 hover:text-gray-100 cursor-pointer transition-all duration-200"
          >
            soeyannaing5101@gmail.com
          </a>
          <a
            href="tel:+6584019084"
            className="font-mono text-xs font-bold text-gray-300 hover:text-gray-100 cursor-pointer transition-all duration-200"
          >
            +65 8401 9084
          </a>
        </div>
        <p className="text-center font-mono text-sm font-bold text-cyan-400">
          2024 SOE YAN NAING. ENGINEERED FOR PERFORMANCE
        </p>
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="bg-black/60 fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl  border border-gray-200 p-4 md:p-8 max-h-[90vh] overflow-y-auto custom-scrollbar animate-pop-in bg-[repeating-linear-gradient(0deg,#2d2d2d,#2d2d2d_2px,#252525_2px,#252525_4px)]"
          >
            {/* Header & Exit Button */}
            <div className="flex items-center justify-between ">
              <span className="font-mono text-green-400 font-sm font-bold">
                {"> ./execute showcase.sh"}
              </span>
              <button
                className="text-red-700 hover:bg-red-700 hover:text-black transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(null)}
              >
                [ X ]
              </button>
            </div>
            {/* Title */}
            <h1 className="text-lg md:text-xl text-gray-200 font-sans font-bold py-6">
              {selectedProject.title}
            </h1>
            {/* Body */}
            <div className="border-b-2 border-t-2 border-gray-500 py-6">
              {/* Preview picture */}
              {selectedProject.image && (
                <div className="w-full mb-6">
                  <Zoom>
                    <img
                      alt={`${selectedProject.title} preview`}
                      src={selectedProject.image}
                      className="w-full h-full"
                    />
                  </Zoom>
                </div>
              )}
              {/* Description */}
              <p className="font-mono text-sm font-bold text-cyan-400 mb-2">
                # DESCRIPTION
              </p>
              <p className="font-mono text-sm font-bold text-gray-400 mb-6">
                {selectedProject.detailedDesc}
              </p>
              {/* Key Features */}
              <p className="font-mono text-sm font-bold text-cyan-400 mb-2">
                # KEY_FEATURES
              </p>
              {selectedProject.features.map((feature) => (
                <p className="font-mono text-sm font-bold text-gray-400 mb-2 flex gap-2">
                  <p className="text-green-700">{">"}</p>
                  <p>{feature}</p>
                </p>
              ))}
              {/* Tech Stack */}
              <p className="font-mono text-sm font-bold text-cyan-400 mb-2">
                # TECH_STACK
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((tech, index) => (
                  <div
                    key={index}
                    className="border border-gray-400 font-mono md:text-sm text-xs text-gray-400 px-2 py-1 whitespace-wrap"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            {/* Deployment & GitHub Repo */}
            <div className="mt-4 flex gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Trust Bank"
                href={selectedProject.liveLink}
                className="font-mono text-sm  text-green-400 transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 cursor-pointer"
              >
                [ VIEW PAGE ]
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repo"
                href={selectedProject.github}
                className="font-mono text-sm  text-green-400 transition-all duration-300 hover:bg-green-400 hover:text-black hover:border-green-400 cursor-pointer"
              >
                [ GITHUB_REPO ]
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default LandingPage;
