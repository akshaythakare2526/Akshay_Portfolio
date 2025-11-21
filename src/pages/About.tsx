import { motion } from 'framer-motion';
import Section from '../components/Section';
import { FiCheckCircle } from 'react-icons/fi';
import {
  FaReact,
  FaGitAlt,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGraduationCap,
  FaDatabase,
  FaToolbox,
  FaPuzzlePiece
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiMicrosoftazure,
  SiCsharp,
  SiDotnet,
  SiVisualstudio,
  SiVisualstudiocode,
  SiPostman,
  SiAzuredevops,
  SiMicrosoft
} from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'C#', icon: SiCsharp, color: '#239120' },
    { name: '.NET Core', icon: SiDotnet, color: '#512BD4' },
    { name: 'Dynamics 365 CRM', icon: SiMicrosoft, color: '#0078D4' },
    { name: 'Power Apps', icon: SiMicrosoft, color: '#742774' },
    { name: 'Power Automate', icon: SiMicrosoft, color: '#0066FF' },
    { name: 'Dataverse', icon: FaDatabase, color: '#22D3EE' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'SQL Server', icon: SiPostgresql, color: '#CC2927' },
    { name: 'Azure', icon: SiMicrosoftazure, color: '#0078D4' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  ];

  // Removed interests (replaced with image section)

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

  const tools = [
    { name: 'Visual Studio', icon: SiVisualstudio, color: '#5C2D91' },
    { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Azure DevOps', icon: SiAzuredevops, color: '#0078D7' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'Dynamics 365', icon: SiMicrosoft, color: '#0078D4' },
    { name: 'Power Apps', icon: SiMicrosoft, color: '#742774' },
    { name: 'Power Automate', icon: SiMicrosoft, color: '#0066FF' },
    { name: 'Dataverse', icon: FaDatabase, color: '#22D3EE' },
    { name: 'XrmToolBox', icon: FaToolbox, color: '#64748B' },
    { name: 'Plugin Registration Tool', icon: FaPuzzlePiece, color: '#10B981' },
  ];

  return (
    <div className="pt-20">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >


          {/* Introduction */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 max-w-2xl"
            >
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="gradient-text">Know Who I’m</span>
                </h1>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                👋 Hi everyone! I'm <span className="text-primary font-semibold">Akshay Thakare</span> from <span className="text-secondary font-semibold">📍 Wardha, Maharashtra, India</span>. I'm a passionate <span className="text-primary font-semibold">💻 Full Stack & CRM Developer</span> who loves to explore new technologies 🚀 and solve real-world problems through clean, efficient code 🎯.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                🎓 Even though I hold a <span className="text-primary font-semibold">B.Tech degree in Mechanical Engineering</span>, my true interest has always been in technology 💡. During my college years, I discovered my passion for coding 💖 — and since then, I've been continuously learning 📚, building 🔨, and improving my skills in <span className="text-secondary font-semibold">.NET Core, ASP.NET MVC, React.js, SQL Server, and Dynamics 365 CRM</span>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                🎨 Outside of coding, I enjoy things that keep me inspired and creative — like listening to music 🎧, playing games 🎮, exploring new tech trends 🔍, and connecting with fellow developers 🤝.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
                {/* Animated Glow Rings */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Secondary Glow */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/30 to-accent/30 blur-2xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />

                {/* Orbiting Particles */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 360) / 8;
                  return (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.2,
                      }}
                    >
                      <motion.div
                        className="rounded-full"
                        style={{
                          transform: `rotate(${angle}deg) translateX(${i % 2 === 0 ? '80px' : '95px'})`,
                          background: i % 3 === 0 
                            ? '#86e1fc' 
                            : i % 3 === 1 
                            ? '#82aaff' 
                            : '#c099ff',
                          width: i % 2 === 0 ? '6px' : '4px',
                          height: i % 2 === 0 ? '6px' : '4px',
                        }}
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    </motion.div>
                  );
                })}

                {/* Main Image Container with Pulse */}
                <motion.div
                  className="relative w-full h-full overflow-hidden rounded-full ring-4 ring-primary/40 shadow-2xl shadow-primary/20"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(130, 170, 255, 0.2)',
                      '0 0 40px rgba(130, 170, 255, 0.4)',
                      '0 0 20px rgba(130, 170, 255, 0.2)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.img
                    src="./boy1.png"
                    alt="Akshay Thakare - Full Stack & CRM Developer"
                    className="w-full h-full object-cover rounded-full"
                    animate={{ 
                      y: [0, -8, 0],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{ 
                      duration: 3.5, 
                      repeat: Infinity, 
                      ease: 'easeInOut' 
                    }}
                  />
                </motion.div>

                {/* Sparkles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`sparkle-${i}`}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: `${15 + Math.random() * 70}%`,
                      left: `${15 + Math.random() * 70}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Professional Experience (Animated) */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              💼 <span className="gradient-text">Professional Experience</span>
            </h2>
            <motion.div
              className="glass-effect p-6 rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-2xl">👨‍💻</span>
                    Software Developer
                  </h3>
                  <p className="text-primary font-semibold flex items-center gap-2">
                    <span>🏢</span>
                    SR Management Technology Consulting, Hyderabad
                  </p>
                </div>
                <span className="px-3 py-1 text-sm bg-green-500/20 text-green-400 rounded-full border border-green-500/30 flex items-center gap-1">
                  <span className="animate-pulse">🟢</span>
                  Current Role
                </span>
              </div>
              <motion.ul
                className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 text-gray-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } }
                }}
              >
                {[
                  'Building scalable and secure web applications using .NET Core, ASP.NET MVC, and React.js',
                  'Developing and integrating RESTful APIs for smooth communication between systems',
                  'Customizing Dynamics 365 CRM entities, plugins, and business logic to streamline processes',
                  'Collaborating with cross-functional teams to deliver high-quality solutions on time',
                  'Ensuring performance optimization, clean architecture, and maintainable code',
                  'Developed and customized Dynamics 365 CRM modules using C#, JavaScript, and PCF controls to enhance user experience and automate workflows',
                  'Built and deployed RESTful APIs using ASP.NET Web API for integrations between Dynamics and external financial systems',
                  'Implemented React.js components to improve UI interactivity and speed up data handling',
                  'Created Power Automate flows for approval automation, reducing manual operations by 30%',
                  'Managed deployments and CI/CD pipelines through Azure DevOps'
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    className="flex gap-2 bg-black/20 rounded-lg p-3 backdrop-blur-sm border border-white/5 hover:border-primary/40"
                  >
                    <FiCheckCircle className="mt-1 flex-shrink-0 text-secondary" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
          <br/><br/>
          {/* Skills */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-4xl">🛠️</span> Professional <span className="gradient-text">Skillset</span> <span className="text-4xl">⚡</span>
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


          {/* Tools */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-4xl">🔧</span> <span className="gradient-text">Tools</span> & Technologies I Use <span className="text-4xl">💡</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="glass-effect p-6 rounded-xl flex flex-col items-center justify-center space-y-3 cursor-pointer group"
                >
                  <tool.icon
                    className="text-5xl transition-colors group-hover:scale-110 transform duration-300"
                    style={{ color: tool.color }}
                  />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-4xl">🎓</span> <span className="gradient-text">Education</span> <span className="text-4xl">📚</span>
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
