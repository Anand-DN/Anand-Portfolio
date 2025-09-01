import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Backend Development',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Django', level: 85 },
        { name: 'SQL', level: 88 },
        { name: 'REST APIs', level: 82 }
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React.js', level: 75 },
        { name: 'Responsive Design', level: 88 }
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Database Management',
      skills: [
        { name: 'OracleSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Database Design', level: 83 },
        { name: 'Query Optimization', level: 78 }
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'Jenkins', level: 68 },
        { name: 'GitLab', level: 80 }
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Stakeholder Management',
    'Analytical Thinking',
    'Team Collaboration',
    'Innovation'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-dark-100 dark:via-dark-200 dark:to-black">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills that drive my development work.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-dark-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-300 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white dark:bg-dark-200 rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/50 dark:to-purple-900/50 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300"
              >
                <span className="text-gray-700 dark:text-primary-300 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
