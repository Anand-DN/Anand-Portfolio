import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseBusiness, ChevronRight, ExternalLink, Github, Linkedin, Mail, MapPin, Medal, Phone, Rocket } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import anandImage from "./assets/anand.png";
import busImage from "./assets/bus.png";
import cnnImage from "./assets/cnn.png";
import DemoImage from "./assets/Demo1.png";
import realImage from "./assets/real.jpg";
import BlurText from "./BlurText";
import ElectricBorder from './ElectricBorder';
import MagicBento from "./MagicBento";
import PixelTransition from "./PixelTransition";
import Prism from "./Prism";
import SplashCursor from "./SplashCursor";
import TextType from './TextType';


// // ====== THEME TOGGLE ======
// function ThemeToggle({ dark, setDark }) {
//   return (
//     <button
//       aria-label="Toggle Theme"
//       onClick={() => setDark((d) => !d)}
//       className="fixed right-4 top-4 z-50 rounded-2xl border px-3 py-2 text-sm backdrop-blur-md transition hover:scale-105 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:text-white border-black/10 bg-white/80 text-black"
//     >
//       {dark ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
//     </button>
//   );
// }

// ====== DATA (Edit here to update your portfolio) ======
const DATA = {
  name: "Anand DN",
  role: "Backend & AI/ML Engineer",
  location: "Bengaluru, India",
  about:
    "Motivated CSE student (CGPA 9.4) with a passion for backend engineering, AI/ML and robust data systems. I love shipping clean, scalable software and learning by building.",
  links: {
    github: "https://github.com/Anand-DN",
    linkedin: "https://www.linkedin.com/in/anand-dn-42954a2b3/",
    email: "mailto:ananddn04@gmail.com",   // ✅ Fixed
    phone: "tel:+919148166544",            // ✅ Fixed
    portfolio: "https://ananddn-portfolio.netlify.app/",
  },

  // ====== SKILLS ======
  skills: [
    {
      title: "Backend",
      items: ["Python", "Java", "Django", "SQL", "MongoDB"],
    },
    { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React (basic)"] },
    { title: "Cloud & DevOps", items: ["AWS", "Docker", "Jenkins", "GitLab CI"] },
    { title: "AI/ML", items: ["NumPy", "Pandas", "Matplotlib", "CNN", "Scikit-learn"] },
    { title: "Soft Skills", items: ["Analytical Thinking", "Stakeholder Mgmt", "Communication"] },
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
      <div className="grid gap-8 md:grid-cols-2">
        {DATA.skills.map((skill) => (
          <div key={skill.title} className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight dark:text-white">{skill.title}</h3>
            <div className="flex flex-wrap gap-4">
              {skill.items.map((item) => (
                <div key={item} className="relative group">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur-lg opacity-30 group-hover:opacity-150 transition duration-700 animate-gradient-xy"></div>
                  <div className="relative rounded-xl p-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 animate-gradient-xy opacity-80 group-hover:opacity-100 transition duration-500">
                    <div className="relative z-10 rounded-xl bg-white dark:bg-[#0b0b10] px-4 py-2 text-sm font-medium text-black dark:text-white transform transition-transform duration-500 group-hover:rotate-2 group-hover:scale-105">
                      {item}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
function Chip({ children }) {
  return (
    <span className="rounded-full border px-3 py-1 text-xs font-medium tracking-wide dark:border-white/10 dark:bg-white/5 dark:text-white border-black/10 bg-black/5 text-black">
      {children}
    </span>
  );
}


// ====== NAVBAR ======
function Nav() {
  const active = useActiveSection(sectionIds);

  return (
    <nav className="fixed inset-x-0 top-0 z-40 mx-auto w-full max-w-6xl px-4">
      <div className="mt-4 flex items-center justify-between rounded-2xl border bg-white/70 px-3 py-2 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-2 font-semibold tracking-tight dark:text-white">
          <Rocket className="h-5 w-5" />
          <span>Anand • Portfolio</span>
        </div>

        <div className="hidden gap-1 md:flex">
          {sectionIds.map((id) => (
            <a
              key={id} // Add this key prop
              href={`#${id}`}
              className={`rounded-full px-3 py-1 text-sm transition hover:scale-105 ${
                active === id
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "dark:text-white/80 text-black/80"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ====== SECTION WRAPPER ======
function Section({ id, title, icon: Icon, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 px-4 ${className}`}>
      <div className="mx-auto max-w-6xl py-20">
        <div className="mb-8 flex items-center gap-3">
          <Icon className="h-6 w-6"/>
          <h2 className="text-2xl font-bold tracking-tight dark:text-white">{title}</h2>
        </div>
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
    <Section id="home" title="" icon={() => <span />} className="pt-28 relative">
      {/* Prism Background */}
      <Prism
        animationType="rotate"
        timeScale={0.5}
        height={1} // full height of Hero container
        baseWidth={5.5}
        scale={3.6}
        hueShift={0} // adjust to match your gradient
        colorFrequency={0.5}
        noise={0.3}
        glow={1.2}
        className="absolute inset-0 -z-10 w-full h-full"
      />

      <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-emerald-500/10 p-8 dark:border-white/10">
        {/* Decorative orbs */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl"/>
        <div className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"/>

        <div className="relative grid items-center gap-10 md:grid-cols-5">
          {/* Text Column */}
          <div className="md:col-span-3">
            <div className="flex flex-wrap items-center text-4xl font-extrabold md:text-6xl dark:text-white leading-tight tracking-tight">
              <BlurText
                text="Hi, I'm "
                delay={150}
                animateBy="letters"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
              />
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#d31bc4] font-extrabold"
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
              >
                {DATA.name.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 max-w-2xl text-lg leading-relaxed text-black/80 dark:text-white/80"
            >
              {DATA.role} • {DATA.location}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-3 max-w-2xl text-base leading-relaxed text-black/70 dark:text-white/70"
            >
              {DATA.about}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a href={DATA.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition hover:scale-105 dark:border-white/10 dark:bg-white/5 dark:text-white">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition hover:scale-105 dark:border-white/10 dark:bg-white/5 dark:text-white">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href={`mailto:${DATA.links.email}`} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition hover:scale-105 dark:border-white/10 dark:bg-white/5 dark:text-white">
                <Mail className="h-4 w-4" /> Email
              </a>
              <a href={`tel:${DATA.links.phone}`} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition hover:scale-105 dark:border-white/10 dark:bg-white/5 dark:text-white">
                <Phone className="h-4 w-4" /> Call
              </a>
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <PixelTransition
              firstContent={
                <img
                  src={anandImage}
                  alt="Software Developer!"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center", backgroundColor: "#111" }}>
                  <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}> Hello World!</p>
                </div>
              }
              gridSize={12}
              pixelColor='#ffffff'
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

// ====== ABOUT ======



function About() {
  return (
    <Section id="about" title="About" icon={Rocket}>
      <div className="grid gap-6 md:grid-cols-3">
        {/* Left Column */}
        <div className="md:col-span-2 text-black/80 dark:text-white/80 leading-relaxed">
          
          {/* First Paragraph with typing effect */}
          <TextType
            text={[
              "I'm a builder at heart — I enjoy translating tricky ideas into production‑ready software.",
              "My recent work spans smart‑contract apps, ML pipelines, and backend services in Python/Django."
            ]}
            typingSpeed={50}
            pauseDuration={1000}
            showCursor={true}
            cursorCharacter="|"
            className="block mb-3 text-base"
          />

          {/* Second Paragraph with typing effect */}
          <TextType
            text={[
              "Outside code, you’ll find me exploring system design, polishing UIs, and mentoring peers on clean coding practices."
            ]}
            typingSpeed={50}
            pauseDuration={1000}
            showCursor={true}
            cursorCharacter="|"
            className="block mt-3 text-base"
          />

          {/* Chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            <Chip><MapPin className="mr-1 inline h-3 w-3"/> {DATA.location}</Chip>
            <Chip>Open to SDE/ML Roles</Chip>
            <Chip>Actively building</Chip>
          </div>
        </div>

        {/* Right Column - Quick Stats */}
        <div className="rounded-2xl border p-4 dark:border-white/10">
          <div className="text-sm font-semibold tracking-wide dark:text-white">
            Quick Stats
          </div>
          <ul className="mt-3 space-y-2 text-sm text-black/80 dark:text-white/80">
            <li>• CGPA: 9.4</li>
            <li>• 3+ major projects shipped</li>
            <li>• Internship in AIML</li>
            <li>• Cloud & DevOps aware</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}



// ====== EXPERIENCE ======
function Experience() {
  return (
    <Section id="experience" title="Experience" icon={BriefcaseBusiness}>
      <div className="relative">
        <div className="absolute left-3 top-0 hidden h-full w-0.5 bg-gradient-to-b from-indigo-500/40 to-emerald-500/40 md:block"/>
        <div className="space-y-6">
          {DATA.experience.map((e) => (
            <motion.div key={e.role} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl border p-5 md:ml-8 dark:border-white/10 dark:bg-white/5">
              <div className="md:absolute md:-left-1 md:top-6 md:h-3 md:w-3 md:rounded-full md:bg-indigo-500"/>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-base font-semibold dark:text-white">{e.role} • {e.org}</div>
                <div className="text-sm opacity-70">{e.period}</div>
              </div>
              <ul className="mt-3 list-inside space-y-2 text-sm text-black/80 dark:text-white/80">
                {e.points.map((p, idx) => (
                  <li key={idx}>• {p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ====== PROJECT CARD ======
import FlowingMenu from './FlowingMenu'; // Make sure you import it

function ProjectCard({ p }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-2xl border p-5 transition dark:border-white/10 dark:bg-white/5">
      {/* Info + buttons */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-lg font-semibold dark:text-white">{p.title}</div>
          <p className="mt-1 text-sm leading-relaxed text-black/80 dark:text-white/80">{p.desc}</p>
        </div>
        <div className="flex gap-2">
          {p.code && (
            <a href={p.code} target="_blank" rel="noreferrer" className="rounded-xl border px-3 py-2 text-xs transition hover:scale-105 dark:border-white/10 dark:text-white">
              <ExternalLink className="mr-1 inline h-3 w-3"/> Code
            </a>
          )}
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" className="rounded-xl border px-3 py-2 text-xs transition hover:scale-105 dark:border-white/10 dark:text-white">
              <ExternalLink className="mr-1 inline h-3 w-3"/> Live
            </a>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>

      {/* FlowingMenu */}
      {p.demoItems && p.demoItems.length > 0 && (
        <div className="mt-4" style={{ height: '150px', position: 'relative' }}>
          <FlowingMenu items={p.demoItems} />
        </div>
      )}
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
      {/* ====== Wrapper for relative positioning ====== */}
      <div className="relative">
        {/* ====== MagicBento Background ====== */}
        <div className="absolute inset-0 -z-10">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>

        {/* ====== Filter Buttons ====== */}
        <div className="mb-4 flex flex-wrap items-center gap-2 relative z-10">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-full border px-3 py-1 text-xs transition hover:scale-105 dark:border-white/10 ${
                filter === t ? "bg-black text-white dark:bg-white dark:text-black" : "dark:text-white/80"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* ====== Projects Grid ====== */}
        <div className="grid gap-4 md:grid-cols-2 relative z-10">
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <ProjectCard p={p} />
              </motion.div>
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
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-5 dark:border-white/10 dark:bg-white/5">
          <div className="mb-2 text-sm font-semibold uppercase tracking-wide opacity-80 dark:text-white">Certifications</div>
          <ul className="space-y-2 text-sm text-black/80 dark:text-white/80">
            {DATA.certifications.map((c) => (
              <li key={c.name} className="flex items-center justify-between">
                <span>• {c.name}</span>
                <span className="opacity-70">{c.date}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border p-5 dark:border-white/10 dark:bg-white/5">
          <div className="mb-2 text-sm font-semibold uppercase tracking-wide opacity-80 dark:text-white">Achievements</div>
          <ul className="space-y-2 text-sm text-black/80 dark:text-white/80">
            {DATA.achievements.map((a) => (
              <li key={a}>• {a}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

// ====== CONTACT ======
function Contact() {
  return (
    
    <Section id="contact" title="Get in touch" icon={Mail}>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="rounded-2xl border p-5 dark:border-white/10 dark:bg-white/5">
            <div className="text-sm font-semibold uppercase tracking-wide opacity-80 dark:text-white">Let's build something</div>
            <p className="mt-2 text-sm text-black/80 dark:text-white/80">
              I'm available for full‑time roles and exciting projects. Drop a message and I’ll get back soon.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a href={DATA.links.email} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition hover:scale-105 dark:border-white/10 dark:text-white">
                <Mail className="h-4 w-4"/> ananddn04@gmail.com
              </a>
              <a href={DATA.links.phone} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition hover:scale-105 dark:border-white/10 dark:text-white">
                <Phone className="h-4 w-4"/> +91 91481 66544
              </a>
              <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition hover:scale-105 dark:border-white/10 dark:text-white">
                <Linkedin className="h-4 w-4"/> LinkedIn
              </a>
              <a href={DATA.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition hover:scale-105 dark:border-white/10 dark:text-white">
                <Github className="h-4 w-4"/> GitHub
              </a>
            </div>
          </div>
        </div>
<ElectricBorder
  color="#7df5ff"
  speed={1}
  chaos={0.5}
  thickness={2}
  style={{ borderRadius: 16 }}
>
  <div className="rounded-2xl border p-5 dark:border-white/10 dark:bg-white/5">
    <div className="text-sm font-semibold uppercase tracking-wide opacity-80 dark:text-white">Education</div>
    <ul className="mt-2 space-y-3 text-sm text-black/80 dark:text-white/80">
      {DATA.education.map((e) => (
        <li key={e.school}>
          <div className="font-semibold dark:text-white">{e.school}</div>
          <div className="opacity-80">{e.degree}</div>
          <div className="opacity-60">{e.meta} • {e.period}</div>
        </li>
      ))}
    </ul>
  </div>
</ElectricBorder>

      </div>
    </Section>
  );
}

// ====== FOOTER ======
function Footer() {
  return (
    <footer className="px-4 pb-10">
      <div className="mx-auto max-w-6xl rounded-2xl border p-4 text-sm text-black/70 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/70">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} {DATA.name}. Built with React, Tailwind & Motion.</div>
          <a href={DATA.links.portfolio} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
            View old portfolio <ChevronRight className="h-4 w-4"/>
          </a>
        </div>
      </div>
    </footer>
  );
}

// ====== MAIN APP ======
export default function App() {
//   useEffect(() => {
//     const saved = localStorage.getItem("anand.theme");
//     if (!saved) {
//       const m = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
//       if (m) document.documentElement.classList.add('dark');
//     }
//   }, []);

  

// const [dark, setDark] = useState(() => {
//     // Read from localStorage or detect system preference on first mount
//     const saved = localStorage.getItem("anand.theme");
//     if (saved) return saved === "dark";
//     return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
//   });

//   useEffect(() => {
//     if (dark) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//     localStorage.setItem("anand.theme", dark ? "dark" : "light");
//   }, [dark]);


  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-white text-black antialiased dark:bg-[#0b0b10] dark:text-white">
      {/* <ThemeToggle dark={dark} setDark={setDark} /> */}
      <SplashCursor/>
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

// ====== TAILWIND BASE (for the preview environment) ======
export const metadata = {
  layout: {
    html: `<!doctype html><html><head><meta charset=\"utf-8\"/><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/><script src=\"https://cdn.tailwindcss.com\"></script><title>Anand DN – Portfolio</title></head><body class=\"min-h-screen\"><div id=\"root\"></div></body></html>`,
  },
};
