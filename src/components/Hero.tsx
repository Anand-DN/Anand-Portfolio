import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import anandImage from "../assets/anand.png"; // ✅ ensure correct path
import BlurText from "./BlurText";

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(mouseX, springConfig);
  const cursorYSpring = useSpring(mouseY, springConfig);

  const roles = [
    "Full Stack Developer",
    "AI/ML Engineer",
    "Backend Specialist",
    "Problem Solver",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      return () =>
        heroElement.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-300 via-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-40 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-300 via-blue-300 to-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-40 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-pink-300 via-primary-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-40 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Cursor follower */}
      <motion.div
        className="absolute w-6 h-6 bg-primary-400 rounded-full opacity-30 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          transform: "translate(-50%, -50%)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center section-padding relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:order-2"
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-80 h-80 rounded-full border-2 border-dashed border-primary-300 dark:border-primary-700 opacity-30"
                style={{ transform: "scale(1.2)" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-80 h-80 rounded-full border-2 border-dotted border-purple-300 dark:border-purple-700 opacity-40"
                style={{ transform: "scale(1.4)" }}
              />

              {/* Floating sparkles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-yellow-400"
                  style={{
                    left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                    top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
              ))}

              {/* Profile photo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl dark:shadow-primary-900/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 rounded-full p-2">
                  <div className="w-full h-full bg-white dark:bg-dark-200 rounded-full p-1">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-200 dark:to-dark-300 rounded-full flex items-center justify-center relative overflow-hidden">
                      <img
                        src={anandImage}
                        alt="Anand DN"
                        className="w-full h-full object-cover rounded-full"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-full"
                        animate={{
                          background: [
                            "linear-gradient(to top, rgba(14, 165, 233, 0.2), transparent)",
                            "linear-gradient(to top, rgba(168, 85, 247, 0.2), transparent)",
                            "linear-gradient(to top, rgba(14, 165, 233, 0.2), transparent)",
                          ],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300 blur-xl scale-110" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={itemVariants}
            className="lg:order-1 text-left lg:text-left"
          >
            <BlurText
              text="Hi, I'm Anand DN"
              delay={150}
              animateBy="letters"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white"
            />

            {/* Rotating Roles */}
            <div className="h-16 flex items-center mb-8">
              <motion.p
                key={currentRole}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 90 }}
                transition={{ duration: 0.6 }}
                className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-medium"
              >
                I'm a{" "}
                <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 dark:from-primary-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-bold">
                  {roles[currentRole]}
                </span>
              </motion.p>
            </div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-2xl"
            >
              Computer Science Engineering student with expertise in{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                Backend Development
              </span>
              ,{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                AI/ML
              </span>
              , and{" "}
              <span className="font-semibold text-pink-600 dark:text-pink-400">
                Database Management
              </span>
              . Passionate about solving complex problems and contributing to
              innovative projects.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(14, 165, 233, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg font-medium group"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
                <motion.div
                  className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 border-2 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 rounded-full hover:bg-primary-600 dark:hover:bg-primary-400 hover:text-white dark:hover:text-dark-100 transition-all duration-300 font-medium group"
              >
                <span>View My Work</span>
                <motion.div
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1oaU7roVxV9yP13ugmJEtspfx8DL3i7X7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg font-medium"
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex space-x-6">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Anand-DN",
                  color: "dark:hover:text-white hover:text-gray-900",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/ananddn",
                  color: "hover:text-blue-600 dark:hover:text-blue-400",
                },
                {
                  icon: Phone,
                  href: "tel:+919448166544",
                  color: "hover:text-green-600 dark:hover:text-green-400",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 rounded-xl bg-white/80 dark:bg-dark-200/80 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/20 dark:border-white/10 ${social.color}`}
                >
                  <social.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-primary-600 dark:border-primary-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-3 bg-primary-600 dark:bg-primary-400 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
