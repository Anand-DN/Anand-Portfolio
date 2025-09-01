import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Calendar, MapPin } from "lucide-react";
import React from "react";
import { useInView } from "react-intersection-observer";

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // ✅ Store experiences in an array
  const experiences = [
    {
      role: "AIML Intern",
      company: "Karunadu Technologies Pvt Limited",
      duration: "Oct 2023 - Dec 2023",
      location: "Bangalore, India",
      description:
        "Gained practical experience in AI/ML concepts through real-world project implementations.",
      achievements: [
        "Enhanced practical understanding of AI/ML concepts by working on real-world problems",
        "Gained hands-on experience with key Python libraries like NumPy, Pandas, and Matplotlib",
        "Developed a project on predicting fake bills using the Decision Tree algorithm",
        "Built a CNN model to predict COVID-19 based on X-ray images",
      ],
      technologies: [
        "Python",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "TensorFlow",
        "CNN",
        "Decision Trees",
      ],
    },
    {
      role: "AI_DevOps Engineer",
      company: "Rooman Technologies",
      duration: "Sep 2024 - Mar 2025",
      location: "Bangalore, India",
      description:
        "Gained practical experience in CI/CD pipelining concepts through real-world project implementations from IBM Cloud.",
      achievements: [
        "Designed and deployed cloud-native solutions on IBM Cloud, integrating scalable infrastructure with automation best practices.",
        "Implemented CI/CD pipelines using Jenkins, Docker, and Kubernetes, enabling faster deployments and reducing downtime.",
        "Optimized DevOps workflows by streamlining containerization, orchestration, and pipeline automation, improving reliability and delivery speed.",
      ],
      technologies: ["Jenkins", "Docker", "Kubernetes", "IBM Cloud", "Gitlab"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-dark-100 dark:via-dark-200 dark:to-black"
    >
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional experience that shaped my skills in AI/ML and practical
            software development.
          </p>
        </motion.div>

        {/* ✅ Loop through experiences */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-white dark:bg-dark-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-600 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <p className="text-primary-100 text-lg">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-primary-100 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-primary-100">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    Key Achievements
                  </h4>
                  <div className="space-y-4">
                    {exp.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: 0.4 + index * 0.1,
                        }}
                        className="flex items-start space-x-3 group"
                      >
                        <div className="p-1 mt-1">
                          <ArrowRight className="w-4 h-4 text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: 0.8 + index * 0.1,
                        }}
                        className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 rounded-full text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-900/80 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
