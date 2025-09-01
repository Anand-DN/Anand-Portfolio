import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import React from "react";
import { useInView } from "react-intersection-observer";

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificationsData = [
    {
      title: "AI_DevOps",
      issuer: "NSDC (National Skill Development Corporation)",
      date: "Mar 2025",
      description:
        "Comprehensive certification in AI-powered DevOps practices and automation.",
      badge: "🤖",
      color: "from-blue-500 to-purple-600",
      link: "https://drive.google.com/file/d/1uUayD7C-L0q8H8OI7bsHnWwqERjog0JN/view?usp=sharing",
    },
    {
      title: "Cloud Computing",
      issuer: "IBM",
      date: "Feb 2025",
      description:
        "Professional certification in cloud computing fundamentals and IBM cloud services.",
      badge: "☁️",
      color: "from-green-500 to-blue-600",
      link: "https://drive.google.com/file/d/1xZoWgTWTWGuYHSvxnY4Mlo-u6SyLy7xa/view?usp=sharing",
    },
    {
      title: "Python Programming",
      issuer: "NPTEL",
      date: "Jun 2024",
      description:
        "Advanced Python programming certification with focus on data structures and algorithms.",
      badge: "🐍",
      color: "from-yellow-500 to-red-600",
      link: "https://drive.google.com/file/d/1TPe6puUlgFblt-zPG-44kmFp1VdkhcG1/view?usp=sharing",
    },
    {
      title: "AIML Fundamentals",
      issuer: "Karunadu Technologies",
      date: "Dec 2023",
      description:
        "Practical AI/ML certification covering machine learning algorithms and implementation.",
      badge: "🧠",
      color: "from-purple-500 to-pink-600",
      link: "https://drive.google.com/file/d/1Uq8sWDqbWgId1qzoCDTAbjuHJPgeRKpE/view?usp=sharing",
    },
  ];

  const achievements = [
    {
      title: "Shotput Competition",
      description:
        "Secured 3rd position in Shotput Throw (2019) among 25+ competitors",
      icon: "🏆",
    },
    {
      title: "Academic Excellence",
      description:
        "Recognized as the Best Student for outstanding academic achievements",
      icon: "🌟",
    },
    {
      title: "Mathematics Achievement",
      description:
        "Achieved top position in Mathematics during the Engineering program",
      icon: "📊",
    },
    {
      title: "Innovation Program",
      description: "Completed a program in Innovation and Design Thinking",
      icon: "💡",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-dark-100 dark:via-dark-200 dark:to-black"
    >
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and notable achievements that validate
            my expertise and dedication.
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center"
          >
            Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-dark-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} text-white text-2xl`}
                    >
                      {cert.badge}
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {cert.date}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {cert.title}
                  </h4>

                  <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mb-3">
                    <Award className="w-4 h-4 mr-2" />
                    {cert.issuer}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {cert.description}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
            Extra-Curricular Achievements
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white dark:bg-dark-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{achievement.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
