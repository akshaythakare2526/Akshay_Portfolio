import { motion } from 'framer-motion';
import Section from '../components/Section';
import { 
  FaReact, 
  FaNode, 
  FaDocker, 
  FaGitAlt,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGraduationCap
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiNextdotjs,
  SiGraphql,
  SiMicrosoftazure,
  SiCsharp,
  SiDotnet
} from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'C#', icon: SiCsharp, color: '#239120' },
    { name: '.NET Core', icon: SiDotnet, color: '#512BD4' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
    { name: 'Node.js', icon: FaNode, color: '#339933' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'SQL Server', icon: SiPostgresql, color: '#CC2927' },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
    { name: 'Azure', icon: SiMicrosoftazure, color: '#0078D4' },

    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  ];

  const interests = [
    'Full Stack Web Development',
    'RESTful API Design',
    '.NET Core & ASP.NET MVC',
    'Database Optimization',
    'Performance Tuning',
    'Cloud Technologies (Azure)',
  ];

  const education = [
    {
      degree: 'B.Tech(Bachelor of Technology)',
      institution: 'Bajaj Institute of Technology, Wardha',
      period: '2023',
    },
    {
      degree: 'HSC (Higher Secondary Certificate)',
      institution: 'Jankidevi Bajaj Science College, Wardha',
      period: '2019',
    },
    {
      degree: 'SSC (Secondary School Certificate)',
      institution: 'New English High School, Wardha',
      period: '2017',
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
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Let me introduce myself
            </p>
          </div>

          {/* Introduction */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a <span className="text-primary font-semibold">Full Stack Developer</span> specializing 
                in .NET Core, ASP.NET MVC, React.js, and SQL Server. I love transforming ideas into 
                reliable, scalable applications and have a strong focus on building high-performance systems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm proficient in <span className="text-secondary font-semibold">C#, JavaScript, 
                React.js, and .NET Web API</span> — and I enjoy working across both backend and frontend stacks 
                to deliver complete solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise includes designing <span className="text-primary font-semibold">RESTful APIs</span>, 
                working with <span className="text-secondary font-semibold">Entity Framework and SQL Server</span>, 
                and creating responsive user interfaces with modern frameworks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">Key Interests</h3>
              <ul className="space-y-3">
                {interests.map((interest, index) => (
                  <motion.li
                    key={interest}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></span>
                    {interest}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">
              Professional <span className="gradient-text">Skillset</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="glass-effect p-6 rounded-xl flex flex-col items-center justify-center space-y-3 cursor-pointer group"
                >
                  <skill.icon 
                    className="text-5xl transition-colors group-hover:scale-110 transform duration-300" 
                    style={{ color: skill.color }}
                  />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all"
                >
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div className="flex items-start gap-3">
                      <FaGraduationCap className="text-primary text-2xl mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-secondary font-semibold">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm">
                      {edu.period}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default About;
