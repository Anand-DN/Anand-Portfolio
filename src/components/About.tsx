import { motion } from "framer-motion";
import { Brain, Cloud, Code, Database, Target, Zap } from "lucide-react";
import React from "react";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Backend Development",
      description: "Expert in Python, Django, and SQL development",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Engineering",
      description: "Experience with CNN models and data analysis",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Proficient in OracleSQL, MongoDB and MySql",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      description: "AWS, Docker, Jenkins, and GitLab expertise",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { number: "9.4", label: "CGPA", suffix: "/10" },
    { number: "4", label: "Projects", suffix: "+" },
    { number: "4", label: "Certifications", suffix: "+" },
    { number: "2", label: "Internship", suffix: "+" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-primary-50 dark:from-dark-100 dark:via-dark-200 dark:to-black relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-40 animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-40 animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 rounded-full mb-6 border border-primary-200 dark:border-primary-800"
          >
            <Target className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              About Me
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Meet{" "}
            <span className="gradient-text relative">
              The Developer
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-8 opacity-0"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 leading-tight">
                Passionate Developer &
                <span className="block gradient-text">Innovator</span>
              </h3>

              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm a motivated Computer Science Engineering student with a
                  CGPA of{" "}
                  <span className="font-bold text-primary-600 dark:text-primary-400">
                    9.5
                  </span>
                  , specializing in{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    Backend Development
                  </span>
                  ,{" "}
                  <span className="font-semibold text-pink-600 dark:text-pink-400">
                    AI/ML
                  </span>
                  , and{" "}
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                    Database Management
                  </span>
                  .
                </p>
                <p>
                  My journey in technology is driven by a passion for solving
                  complex problems and contributing to innovative projects that
                  make a real-world impact.
                </p>
                <p>
                  With hands-on experience in{" "}
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    Python, Django, React
                  </span>
                  , and various cloud technologies, I've successfully completed
                  multiple projects ranging from blockchain-based platforms to
                  AI-powered solutions.
                </p>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center p-4 bg-white/80 dark:bg-dark-300/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 dark:border-white/10 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    {stat.number}
                    <span className="text-lg">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-3"
            >
              {[
                "Problem Solving",
                "Team Leadership",
                "Innovation",
                "Communication",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-700 dark:from-primary-900/50 dark:to-purple-900/50 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800 hover:scale-105 transition-transform duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, rotateY: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                }}
                className="magnetic-card p-6 bg-white/80 dark:bg-dark-300/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 dark:border-white/10 group cursor-pointer relative overflow-hidden"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon with animated background */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`text-white mb-4 p-3 rounded-lg bg-gradient-to-br ${item.gradient} group-hover:scale-110 transition-transform duration-300 inline-block`}
                >
                  {item.icon}
                </motion.div>

                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {item.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Animated border */}
                <motion.div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Floating particles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center"
        >
          <motion.a
            href="#projects" // ✅ scrolls to section
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 text-white rounded-full hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            <Zap className="w-5 h-5 group-hover:animate-pulse" />

            <span className="font-medium">Let's Build Something Amazing</span>

            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-lg"
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
