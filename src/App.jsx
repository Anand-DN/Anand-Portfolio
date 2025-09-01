import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseBusiness, ChevronRight, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Medal, Phone, Rocket } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import anandImage from "./assets/anand.png";
import busImage from "./assets/bus.png";
import cnnImage from "./assets/cnn.png";
import DemoImage from "./assets/Demo1.png";
import realImage from "./assets/real.jpg";
import BlurText from "./BlurText";
import ElectricBorder from './ElectricBorder';
import FloatingParticles from './FloatingParticles';
import FlowingMenu from "./FlowingMenu";
import GlowingOrb from './GlowingOrb';
import HolographicCard from './HolographicCard';
import MagicBento from "./MagicBento";
import Magnet from './Magnet';
import PixelTransition from "./PixelTransition";
import Prism from "./Prism";
import SplashCursor from "./SplashCursor";
import TextType from './TextType';
import { useTheme } from "./hooks/useTheme";
import ThemeToggle from "./components/ThemeToggle";
import ScrollProgress from "./components/ScrollProgress";

// ====== DATA (Edit here to update your portfolio) ======
const DATA = {
  name: "Anand DN",
  role: "Backend & AI/ML Engineer",
  location: "Bengaluru, India",
  about:
    "Motivated CSE student with a passion for backend engineering, AI/ML and robust data systems. I love shipping clean, scalable software and learning by building.",
  links: {
    github: "https://github.com/Anand-DN",
    linkedin: "https://www.linkedin.com/in/anand-dn-42954a2b3/",
    email: "mailto:ananddn04@gmail.com",
    phone: "tel:+919148166544",
    portfolio: "https://ananddn-portfolio.netlify.app/",
  },

  // ====== SKILLS ======
  skills: [
    {
      title: "Backend",
      items: ["Python", "Java", "Django", "SQL", "MongoDB"],
      color: "from-blue-500 to-purple-600"
    },
    { 
      title: "Frontend", 
      items: ["HTML", "CSS", "JavaScript", "React (basic)"],
      color: "from-green-500 to-teal-600"
    },
    { 
      title: "Cloud & DevOps", 
      items: ["AWS", "Docker", "Jenkins", "GitLab CI"],
      color: "from-orange-500 to-red-600"
    },
    { 
      title: "AI/ML", 
      items: ["NumPy", "Pandas", "Matplotlib", "CNN", "Scikit-learn"],
      color: "from-pink-500 to-rose-600"
    },
    { 
      title: "Soft Skills", 
      items: ["Analytical Thinking", "Stakeholder Mgmt", "Communication"],
      color: "from-indigo-500 to-blue-600"
    },
  ],
  // ====== EXPERIENCE ======
  experience: [
    {
      role: "AIML Intern",
      org: "Karunadu Technologies Pvt Ltd",
      period: "Oct 2023 – Dec 2023",
      points: [
        "Worked on real-world ML problems using Python, NumPy, Pandas, Matplotlib",
        "Built a Decision-Tree model to detect fake bills",
        "Created a CNN model for COVID-19 prediction from X-ray images",
      ],
    },
    {
      role: "AI_DevOps Engineer",
      org: "Rooman Technologies",
      period: "Sep 2024 – Mar 2025",
      points: [
        "Designed and deployed cloud-native solutions on IBM Cloud, integrating scalable infrastructure with automation best practices.",
        "Implemented CI/CD pipelines using Jenkins, Docker, and Kubernetes, enabling faster deployments and reducing downtime.",
        "Optimized DevOps workflows by streamlining containerization, orchestration, and pipeline automation, improving reliability and delivery speed.",
      ],
    },
  ],

  // ====== EDUCATION ======
  education: [
    {
      school: "HKBK College of Engineering",
      degree: "B.E. in Computer Science & Engineering",
      meta: "CGPA: 9.4",
      period: "2021 – 2025",
    },
    { school: "Vision PU College", degree: "PCME", meta: "89%", period: "2019 – 2021" },
    { school: "Florence English High School", degree: "SSLC", meta: "88%", period: "–2019" },
  ],

  // ====== PROJECTS ======
  projects: [
    {
      title: "Real-Estate Platform on Blockchain (Escrow)",
      tags: ["Solidity", "ERC-721", "Ethereum", "Web3.js"],
      desc: "Tokenized property assets with escrow smart contracts enabling trustless transfers; off-chain storage via IPFS; clean React/Web3.js frontend.",
      code: "https://github.com/Anand-DN/Real-Estate-based-Blockchain-using-Escrow-Contracts",
      demoItems: [
        {link:"https://github.com/Anand-DN/Real-Estate-based-Blockchain-using-Escrow-Contracts", image: realImage},
      ]
    },
    {
      title: "Django chat App",
      tags: ["Django", "PostgreSQL", "WebSockets"],
      desc: "A modern, feature-rich real-time chat platform! Designed to empower seamless communication,",
      code: "https://github.com/Anand-DN/Django-Chat-App",
      live: "https://django-chat-app-uaj0.onrender.com/",
      demoItems: [
        {link:"https://django-chat-app-uaj0.onrender.com/", image: DemoImage},
      ]
    },
    {
      title: "COVID-19 Prediction from X-rays",
      tags: ["CNN", "Python", "OpenCV", "Keras"],
      desc: "End-to-end pipeline with preprocessing and a CNN classifier for COVID detection on chest X-rays.",
      code: "https://github.com/9148166544427/Prediction-of-Covid-in-Person-using-CNN.git",
      demoItems: [
        {link:"https://github.com/9148166544427/Prediction-of-Covid-in-Person-using-CNN.git", image: cnnImage},
      ]
    },
    {
      title: "Bus Reservation System",
      tags: ["PHP", "SQL"],
      desc: "Online booking with real-time seat availability and optimized SQL queries for performance.",
      code: "https://github.com/9148166544427/Bus-Reservation-System-using-PHP.git",
      demoItems: [
        {link:"https://github.com/9148166544427/Bus-Reservation-System-using-PHP.git", image: busImage},
      ]
    },
  ],

  // ====== CERTIFICATIONS ======
  certifications: [
    { name: "AI_DevOps (NSDC)", date: "Mar 2025" },
    { name: "Cloud Computing (IBM)", date: "Feb 2025" },
    { name: "Python (NPTEL)", date: "Jun 2024" },
    { name: "AIML (Karunadu Technologies)", date: "Dec 2023" },
  ],

  // ====== ACHIEVEMENTS ======
  achievements: [
    "3rd place – Shotput (2019)",
    "Best Student – academic excellence",
    "Top performer in Mathematics",
    "Completed Innovative & Design Thinking program",
  ],
};

function Skills() {
  return (
    <Section id="skills" title="Skills" icon={() => <span />}>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {DATA.skills.map((skill, index) => (
          <motion.div 
            key={skill.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
          >
            <HolographicCard className="h-full">
              <div className="space-y-6 p-6">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color} animate-pulse`}></div>
                  <h3 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {skill.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, itemIndex) => (
                    <motion.div 
                      key={item} 
                      className="relative group/item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.05) }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur opacity-30 group-hover/item:opacity-100 transition duration-500"></div>
                      <div className={`relative rounded-xl bg-gradient-to-r ${skill.color} p-[1px]`}>
                        <div className="relative z-10 rounded-xl bg-black/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white">
                          {item}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </HolographicCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ====== UTIL ======
const sectionIds = ["home", "about", "skills", "experience", "projects", "certs", "contact"]; 

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, [ids.join(",")]);
  return active;
}

// ====== CHIP ======
function Chip({ children, className = "" }) {
  return (
    <motion.span 
      className={`relative group inline-block ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
      <span className="relative rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-medium tracking-wide text-white">
        {children}
      </span>
    </motion.span>
  );
}

// ====== NAVBAR ======
function Nav() {
  const active = useActiveSection(sectionIds);

  return (
    <motion.nav 
      className="fixed inset-x-0 top-0 z-40 mx-auto w-full max-w-6xl px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/20 bg-black/20 backdrop-blur-xl px-6 py-4 shadow-2xl">
        <motion.div 
          className="flex items-center gap-3 font-bold tracking-tight text-white"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 blur opacity-50"></div>
            <Rocket className="relative h-6 w-6 text-white" />
          </div>
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Anand • Portfolio
          </span>
        </motion.div>

        <div className="hidden gap-2 md:flex">
          {sectionIds.map((id) => (
            <motion.a
              key={id}
              href={`#${id}`}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                active === id
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {active === id && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-600"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

// ====== SECTION WRAPPER ======
function Section({ id, title, icon: Icon, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 px-4 relative ${className}`}>
      <div className="mx-auto max-w-6xl py-20">
        {title && (
          <motion.div 
            className="mb-12 flex items-center gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 blur opacity-50"></div>
              <Icon className="relative h-8 w-8 text-white"/>
            </div>
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {title}
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

// ====== HERO ======
function Hero() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <Section id="home" title="" icon={() => <span />} className="pt-32 relative min-h-screen flex items-center">
      {/* Background Effects */}
      <FloatingParticles />
      <GlowingOrb />
      
      {/* Prism Background */}
      <Prism
        animationType="rotate"
        timeScale={0.3}
        height={1}
        baseWidth={5.5}
        scale={4}
        hueShift={0}
        colorFrequency={0.5}
        noise={0.2}
        glow={1.5}
        className="absolute inset-0 -z-10 w-full h-full opacity-30"
      />

      <div className="relative w-full">
        <motion.div 
          className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-black/40 via-purple-900/20 to-black/40 backdrop-blur-xl p-8 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 animate-gradient-xy"></div>
          
          {/* Decorative orbs */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-gradient-to-r from-pink-500/30 to-purple-500/30 blur-3xl animate-pulse"/>
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-3xl animate-pulse"/>

          <div className="relative grid items-center gap-12 lg:grid-cols-5">
            {/* Text Column */}
            <div className="lg:col-span-3 space-y-8">
              <div className="flex flex-wrap items-center text-4xl font-extrabold md:text-6xl lg:text-7xl leading-tight tracking-tight">
                <BlurText
                  text="Hi, I'm "
                  delay={150}
                  animateBy="letters"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-white"
                />
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 font-extrabold"
                  initial="hidden"
                  animate="visible"
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                >
                  {DATA.name.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 100,
                        delay: i * 0.05
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <p className="text-xl lg:text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {DATA.role} • {DATA.location}
                </p>

                <TextType
                  text={[DATA.about]}
                  typingSpeed={30}
                  pauseDuration={1000}
                  showCursor={true}
                  cursorCharacter="|"
                  className="text-lg leading-relaxed text-gray-300 max-w-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap items-center gap-4"
              >
                {[
                  { href: DATA.links.github, icon: Github, label: "GitHub" },
                  { href: DATA.links.linkedin, icon: Linkedin, label: "LinkedIn" },
                  { href: DATA.links.email, icon: Mail, label: "Email" },
                  { href: DATA.links.phone, icon: Phone, label: "Call" }
                ].map((link, index) => (
                  <Magnet key={link.label} magnetStrength={2} padding={30}>
                    <motion.a 
                      href={link.href} 
                      target={link.href.startsWith('http') ? "_blank" : undefined}
                      rel={link.href.startsWith('http') ? "noreferrer" : undefined}
                      className="group relative inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                    >
                      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                      <link.icon className="relative h-4 w-4" />
                      <span className="relative">{link.label}</span>
                    </motion.a>
                  </Magnet>
                ))}
              </motion.div>
            </div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur-xl opacity-50 animate-pulse"></div>
                <PixelTransition
                  firstContent={
                    <img
                      src={anandImage}
                      alt="Anand DN - Software Developer"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  }
                  secondContent={
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 to-black rounded-2xl">
                      <div className="text-center space-y-4">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-cyan-500"
                        />
                        <p className="font-black text-2xl text-white">Hello World!</p>
                        <p className="text-gray-300">Let's build something amazing!</p>
                      </div>
                    </div>
                  }
                  gridSize={15}
                  pixelColor='#8b5cf6'
                  animationStepDuration={0.6}
                  className="relative z-10 w-80 h-80"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// ====== ABOUT ======
function About() {
  return (
    <Section id="about" title="About" icon={Rocket}>
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Column */}
        <motion.div 
          className="lg:col-span-2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <HolographicCard>
            <div className="p-8 space-y-6">
              <TextType
                text={[
                  "I'm a builder at heart — I enjoy translating tricky ideas into production‑ready software. My recent work spans smart‑contract apps, ML pipelines, and backend services in Python/Django.",
                  "Outside code, you'll find me exploring system design, polishing UIs, and mentoring peers on clean coding practices."
                ]}
                typingSpeed={40}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-lg leading-relaxed text-gray-300"
              />

              <div className="flex flex-wrap gap-3 pt-4">
                <Chip><MapPin className="mr-2 inline h-3 w-3"/> {DATA.location}</Chip>
                <Chip>Open to SDE/ML Roles</Chip>
                <Chip>Actively building</Chip>
              </div>
            </div>
          </HolographicCard>
        </motion.div>

        {/* Right Column - Quick Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ElectricBorder
            color="#7df5ff"
            speed={1.5}
            chaos={0.7}
            thickness={2}
            style={{ borderRadius: 16 }}
          >
            <HolographicCard className="h-full">
              <div className="p-6 space-y-6">
                <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Quick Stats
                </div>
                <div className="space-y-4">
                  {[
                    { label: "CGPA", value: "9.4", icon: "🎓" },
                    { label: "Projects", value: "3+", icon: "🚀" },
                    { label: "Experience", value: "AIML Intern", icon: "💼" },
                    { label: "Focus", value: "Cloud & DevOps", icon: "☁️" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{stat.icon}</span>
                        <span className="text-gray-300">{stat.label}</span>
                      </div>
                      <span className="font-bold text-white">{stat.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </HolographicCard>
          </ElectricBorder>
        </motion.div>
      </div>
    </Section>
  );
}

// ====== EXPERIENCE ======
function Experience() {
  return (
    <Section id="experience" title="Experience" icon={BriefcaseBusiness}>
      <div className="relative">
        <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-gradient-to-b from-pink-500/40 via-purple-500/40 to-cyan-500/40 md:block"/>
        <div className="space-y-8">
          {DATA.experience.map((e, index) => (
            <motion.div 
              key={e.role} 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative md:ml-12"
            >
              <div className="md:absolute md:-left-3 md:top-8 md:h-6 md:w-6 md:rounded-full md:bg-gradient-to-r md:from-pink-500 md:to-purple-600 md:shadow-lg md:shadow-purple-500/50"/>
              
              <HolographicCard>
                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {e.role}
                      </h3>
                      <p className="text-lg text-purple-400 font-semibold">{e.org}</p>
                    </div>
                    <Chip className="text-xs">{e.period}</Chip>
                  </div>
                  <ul className="space-y-3">
                    {e.points.map((p, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start gap-3 text-gray-300 leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.1) }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 mt-2 flex-shrink-0"></div>
                        <span>{p}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </HolographicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ====== PROJECT CARD ======
function ProjectCard({ p, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative h-full"
    >
      <HolographicCard className="h-full">
        <div className="p-6 space-y-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                {p.title}
              </h3>
              <p className="mt-3 text-gray-300 leading-relaxed">{p.desc}</p>
            </div>
            <div className="flex gap-2">
              {p.code && (
                <Magnet magnetStrength={2} padding={20}>
                  <motion.a 
                    href={p.code} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group/btn relative inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-white/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 blur opacity-0 group-hover/btn:opacity-50 transition duration-300"></div>
                    <ExternalLink className="relative h-3 w-3"/>
                    <span className="relative">Code</span>
                  </motion.a>
                </Magnet>
              )}
              {p.live && (
                <Magnet magnetStrength={2} padding={20}>
                  <motion.a 
                    href={p.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group/btn relative inline-flex items-center gap-2 rounded-xl border border-white/20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:from-green-500/30 hover:to-emerald-500/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 blur opacity-0 group-hover/btn:opacity-50 transition duration-300"></div>
                    <ExternalLink className="relative h-3 w-3"/>
                    <span className="relative">Live</span>
                  </motion.a>
                </Magnet>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t, tagIndex) => (
              <motion.span
                key={t}
                className="relative group/tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (index * 0.1) + (tagIndex * 0.05) }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur opacity-30 group-hover/tag:opacity-100 transition duration-300"></div>
                <span className="relative rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                  {t}
                </span>
              </motion.span>
            ))}
          </div>

          {/* FlowingMenu */}
          {p.demoItems && p.demoItems.length > 0 && (
            <div className="flex-1 min-h-[150px] rounded-xl overflow-hidden border border-white/20 bg-black/20 backdrop-blur-sm">
              <FlowingMenu items={p.demoItems} />
            </div>
          )}
        </div>
      </HolographicCard>
    </motion.div>
  );
}

// ====== PROJECTS ======
function Projects() {
  const [filter, setFilter] = useState("All");
  const tags = useMemo(() => {
    const all = new Set(["All"]);
    DATA.projects.forEach((p) => p.tags.forEach((t) => all.add(t)));
    return Array.from(all);
  }, []);
  const filtered = DATA.projects.filter((p) => filter === "All" || p.tags.includes(filter));

  return (
    <Section id="projects" title="Projects" icon={Rocket}>
      <div className="relative">
        {/* MagicBento Background */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={400}
            particleCount={15}
            glowColor="132, 0, 255"
          />
        </div>

        {/* Filter Buttons */}
        <motion.div 
          className="mb-8 flex flex-wrap items-center gap-3 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {tags.map((t, index) => (
            <motion.button
              key={t}
              onClick={() => setFilter(t)}
              className={`relative rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                filter === t 
                  ? "text-white" 
                  : "text-white/70 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {filter === t && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-600"
                  layoutId="projectFilter"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 relative z-10">
          <AnimatePresence mode="wait">
            {filtered.map((p, index) => (
              <ProjectCard key={p.title} p={p} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

// ====== CERTIFICATIONS ======
function Certs() {
  return (
    <Section id="certs" title="Certifications & Achievements" icon={Medal}>
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <HolographicCard className="h-full">
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse"></div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Certifications
                </h3>
              </div>
              <div className="space-y-4">
                {DATA.certifications.map((c, index) => (
                  <motion.div
                    key={c.name}
                    className="flex items-center justify-between p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                      <span className="text-white font-medium">{c.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
                      {c.date}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </HolographicCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HolographicCard className="h-full">
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse"></div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Achievements
                </h3>
              </div>
              <div className="space-y-4">
                {DATA.achievements.map((a, index) => (
                  <motion.div
                    key={a}
                    className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"></div>
                    <span className="text-white">{a}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </HolographicCard>
        </motion.div>
      </div>
    </Section>
  );
}

// ====== CONTACT ======
function Contact() {
  return (
    <Section id="contact" title="Get in touch" icon={Mail}>
      <div className="grid gap-8 lg:grid-cols-3">
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <HolographicCard>
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                  Let's build something amazing
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm available for full-time roles and exciting projects. Drop a
                  message and I'll get back soon.
                </p>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { href: DATA.links.email, icon: Mail, label: "ananddn04@gmail.com", color: "from-red-500 to-pink-600" },
                  { href: DATA.links.phone, icon: Phone, label: "+91 91481 66544", color: "from-green-500 to-emerald-600" },
                  { href: DATA.links.linkedin, icon: Linkedin, label: "LinkedIn", color: "from-blue-500 to-cyan-600" },
                  { href: DATA.links.github, icon: Github, label: "GitHub", color: "from-purple-500 to-indigo-600" }
                ].map((contact, index) => (
                  <Magnet key={contact.label} magnetStrength={2} padding={30}>
                    <motion.a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? "_blank" : undefined}
                      rel={contact.href.startsWith('http') ? "noreferrer" : undefined}
                      className="group relative flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-4 transition-all duration-300 hover:bg-white/20"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${contact.color} blur opacity-0 group-hover:opacity-50 transition duration-500`}></div>
                      <contact.icon className="relative h-5 w-5 text-white" />
                      <span className="relative text-white font-medium">{contact.label}</span>
                    </motion.a>
                  </Magnet>
                ))}
              </div>

              <Magnet magnetStrength={3} padding={40}>
                <motion.a
                  href="https://drive.google.com/file/d/1Yix5p8mZYx01DiytzWkpr-Hb4B0v8-XO/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:from-pink-600 hover:to-purple-700"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 blur-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>
                  <Download className="relative h-5 w-5" />
                  <span className="relative">Download CV</span>
                </motion.a>
              </Magnet>
            </div>
          </HolographicCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ElectricBorder
            color="#7df5ff"
            speed={1}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 16 }}
          >
            <HolographicCard className="h-full">
              <div className="p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Education
                  </h3>
                </div>
                <div className="space-y-6">
                  {DATA.education.map((e, index) => (
                    <motion.div
                      key={e.school}
                      className="space-y-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h4 className="font-bold text-white">{e.school}</h4>
                      <p className="text-gray-300">{e.degree}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-cyan-400 font-semibold">{e.meta}</span>
                        <span className="text-gray-400">{e.period}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </HolographicCard>
          </ElectricBorder>
        </motion.div>
      </div>
    </Section>
  );
}

// ====== FOOTER ======
function Footer() {
  return (
    <motion.footer 
      className="px-4 pb-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl">
        <HolographicCard>
          <div className="p-6 text-center">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="text-gray-300">
                © {new Date().getFullYear()} {DATA.name}. Built with React, Tailwind & Motion.
              </div>
              <motion.a 
                href={DATA.links.portfolio} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
              >
                View old portfolio <ChevronRight className="h-4 w-4"/>
              </motion.a>
            </div>
          </div>
        </HolographicCard>
      </div>
    </motion.footer>
  );
}

// ====== MAIN APP ======
export default function App() {
  // The useTheme hook now manages the theme state globally.
  useTheme();

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white antialiased dark:from-gray-900 dark:via-black dark:to-black">
      <ScrollProgress />
      <SplashCursor/>
      <ThemeToggle />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certs />
      <Contact />
      <Footer />
    </div>
  );
}
