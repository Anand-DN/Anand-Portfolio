import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import React from "react";
import { useInView } from "react-intersection-observer";

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      degree: "B.E in Computer Science & Engineering",
      institution: "HKBK College of Engineering",
      grade: "CGPA: 9.5",
      location: "Bangalore, India",
      year: "2025",
      description:
        "Specialized in Backend Development, AI/ML, and Database Management with outstanding academic performance.",
      icon: "🎓",
    },
    {
      degree: "Pre-University College (PCME)",
      institution: "Vision PU College",
      grade: "89%",
      location: "Bangalore, India",
      year: "2021",
      description:
        "Strong foundation in Physics, Chemistry, Mathematics, and Electronics.",
      icon: "📚",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Florence English High School",
      grade: "88%",
      location: "Bangalore, India",
      year: "2019",
      description:
        "Excellent academic performance with recognition as best student.",
      icon: "🏫",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-100">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic journey showcasing excellence and continuous learning in
            computer science and engineering.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-dark-100 shadow-lg z-10"></div>

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-200 dark:to-dark-300 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{item.icon}</div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.year}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {item.degree}
                    </h3>

                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      {item.institution}
                    </div>

                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      {item.location}
                    </div>

                    <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 rounded-full text-sm font-medium mb-3">
                      {item.grade}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
