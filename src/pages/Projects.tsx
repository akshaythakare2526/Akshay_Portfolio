import { motion } from 'framer-motion';
import Section from '../components/Section';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Quiz Application',
      description: 'A dynamic and user-friendly web platform built using ASP.NET Core MVC and Entity Framework Core, designed to make learning engaging through interactive MCQ-based quizzes. It offers secure authentication, timed exams, instant scoring, and leaderboards to track progress.',
      image: '/Quiz.png',
      technologies: ['ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'Authentication'],
      github: 'https://github.com/akshaythakare2526/QuizApplication',
  readMore: '/projects/quiz-application',
    },
    {
      title: 'BudgetWise - Expense Tracker',
      description: 'Mobile-first expense tracker supporting group budgeting and shared expense lists. Integrated biometric login, CRUD transactions, and interactive financial dashboards. Enabled financial insights through interactive graphs and monthly spending analysis with secure APIs for authentication and expense management.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop',
      technologies: ['.NET Web API', 'React', 'SQL Server', 'Chart.js', 'Biometric Auth'],
      github: 'https://github.com/akshaythakare2526/BudgetWebApi',
      githubUI: 'https://github.com/akshaythakare2526/BUDGETWISE_APP_UI',
      readMore: '/projects/budgetwise',
    },
    {
      title: 'Department Management System',
      description: 'A comprehensive single-page web application using React and .NET Web API to centralize academic department operations. Implemented role-based authentication for Students, Faculty, and Admin with secure access control. Created modules for attendance tracking, timetables, notices, faculty directories, and alumni networking.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
      technologies: ['React.js', '.NET Core', 'SQL Server', 'Entity Framework', 'JWT Auth'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    }
  ];

  return (
    <div className="pt-20">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My Recent <span className="gradient-text">Works</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Here are a few projects I've worked on recently
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60"></div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <FiGithub size={20} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    {project.githubUI && (
                      <a
                        href={project.githubUI}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <FiGithub size={20} />
                        <span className="text-sm font-medium">UI Code</span>
                      </a>
                    )}
                    {project.readMore ? (
                      typeof project.readMore === 'string' && project.readMore.startsWith('/') ? (
                        <Link
                          to={project.readMore}
                          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                        >
                          <FiExternalLink size={20} />
                          <span className="text-sm font-medium">Read More</span>
                        </Link>
                      ) : (
                        <a
                          href={project.readMore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                        >
                          <FiExternalLink size={20} />
                          <span className="text-sm font-medium">Read More</span>
                        </a>
                      )
                    ) : project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <FiExternalLink size={20} />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Projects;
