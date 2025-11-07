import { motion } from 'framer-motion';
import Section from '../components/Section';
import { FiDownload, FiCalendar, FiBriefcase } from 'react-icons/fi';

const Resume = () => {
  const experience = [
    {
      title: 'Software Developer',
      company: 'Management Technology Consulting LLC',
      period: 'Nov 2023 - Present',
      description: 'Developed and maintained full-stack web applications using React.js and .NET Web API. Designed RESTful APIs ensuring scalability and secure data exchange. Enhanced API performance and reduced response time by restructuring server logic. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    },
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Bajaj Institute of Technology, Wardha',
      period: '2023',
      description: '75% - Focus on Software Engineering and Web Technologies',
    },
    {
      degree: 'HSC (Higher Secondary Certificate)',
      institution: 'Jankidevi Bajaj Science College, Wardha',
      period: '2019',
      description: '60% - Science Stream',
    },
    {
      degree: 'SSC (Secondary School Certificate)',
      institution: 'New English High School, Wardha',
      period: '2017',
      description: '83% - Secondary Education',
    },
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
              My <span className="gradient-text">Resume</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              My professional journey and qualifications
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-moonlight-blue to-moonlight-purple rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all moonlight-glow">
              <FiDownload size={20} />
              Download Resume
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FiBriefcase className="text-primary" />
                Experience
              </h2>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {job.title}
                        </h3>
                        <p className="text-primary font-semibold">{job.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <FiCalendar size={16} />
                        {job.period}
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FiCalendar className="text-secondary" />
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect p-6 rounded-xl hover:shadow-lg hover:shadow-secondary/10 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-secondary font-semibold">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <FiCalendar size={16} />
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Additional Skills */}
              <div className="mt-8 glass-effect p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Technical Proficiency</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-2">.NET Core & ASP.NET MVC</p>
                    <div className="w-full bg-dark-light rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '95%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">React.js & JavaScript</p>
                    <div className="w-full bg-dark-light rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '92%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">SQL Server & Entity Framework</p>
                    <div className="w-full bg-dark-light rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">RESTful API Design</p>
                    <div className="w-full bg-dark-light rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '93%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Resume;
