import { motion } from "framer-motion";
import { Calendar, ExternalLink, Github } from "lucide-react";
import React from "react";
import { useInView } from "react-intersection-observer";
import busImage from "../assets/bus.png";
import cnnImage from "../assets/cnn.png";
import Demo1Image from "../assets/demo1.png";
import realImage from "../assets/real.jpg";

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projectsData = [
    {
      title: "Django Chat App",
      description:
        "Built a real-time chat application with Django, Channels, and WebSockets.",
      longDescription:
        "Implemented group chat functionality, message persistence, and user authentication with Django. Real-time communication powered by Channels and WebSockets.",
      technologies: ["Django", "Channels", "WebSockets", "HTML", "CSS"],
      duration: "Feb 2022 - April 2022",
      category: "Web Development",
      image: Demo1Image,
      gradient: "from-yellow-500 to-red-600",
      livedemo: "https://django-chat-app-uaj0.onrender.com/",
      codelink: "https://github.com/Anand-DN/Django-Chat-App.git",
    },

    {
      title: "Real Estate Platform using Blockchain",
      description:
        "Built a decentralized real estate platform using Solidity, ERC-721, and Ethereum, enabling secure tokenization of property assets.",
      longDescription:
        "Implemented escrow smart contracts to automate trustless fund transfers between buyers and sellers. Integrated IPFS for off-chain storage and developed frontend with React and Web3.js for seamless user experience.",
      technologies: [
        "Solidity",
        "ERC-721",
        "Ethereum",
        "React",
        "Web3.js",
        "IPFS",
      ],
      duration: "Jun 2025 - Mar 2025",
      category: "Blockchain",
      image: realImage,
      gradient: "from-blue-500 to-purple-600",
      // livedemo: "https://github.com/Anand-DN/Real-Estate-based-Blockchain-using-Escrow-Contracts.git",
      codelink:
        "https://github.com/Anand-DN/Real-Estate-based-Blockchain-using-Escrow-Contracts.git",
    },
    {
      title: "COVID-19 Prediction using CNN",
      description:
        "Developed a CNN model to predict COVID-19 from chest X-ray images with high accuracy.",
      longDescription:
        "Applied image preprocessing techniques to improve model performance. Developed CNN architecture from scratch and achieved significant accuracy in medical image classification.",
      technologies: [
        "Python",
        "TensorFlow",
        "CNN",
        "OpenCV",
        "NumPy",
        "Matplotlib",
      ],
      duration: "Nov 2022 - Dec 2023",
      category: "AI/ML",
      image: cnnImage,
      gradient: "from-green-500 to-blue-600",
      // livedemo: "https://your-demo-link.com",
      codelink:
        "https://github.com/Anand-DN/Prediction-of-Covid-in-Person-using-CNN.git",
    },
    {
      title: "Bus Reservation System",
      description:
        "Built an online bus ticket booking platform with real-time seat availability and payment processing.",
      longDescription:
        "Integrated SQL optimizations to enhance system performance and developed comprehensive booking management features.",
      technologies: ["PHP", "SQL", "HTML", "CSS", "JavaScript", "MySQL"],
      duration: "Feb 2022 - April 2022",
      category: "Web Development",
      image: busImage,
      gradient: "from-yellow-500 to-red-600",
      // livedemo: "https://your-bus-demo.com",
      codelink:
        "https://github.com/Anand-DN/Bus-Reservation-System-using-PHP.git",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-100">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my most impactful projects demonstrating expertise
            across different technologies and domains.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative overflow-hidden rounded-xl shadow-lg ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div
                    className={`h-64 lg:h-80 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </motion.div>

                {/* Project Content */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-medium`}
                    >
                      {project.category}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.duration}
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-dark-300 dark:text-gray-300 rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-dark-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4 pt-4">
                    {project.livedemo && (
                      <motion.a
                        href={project.livedemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    {project.codelink && (
                      <motion.a
                        href={project.codelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-primary-600 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-400 transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </motion.a>
                    )}
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

export default Projects;
