import { motion } from 'framer-motion';
import { FiArrowRight, FiStar, FiCode } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center pt-16 pb-8 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-moonlight-blue/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-moonlight-purple/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <br />  <br /><br />  <br />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 text-center md:text-left"
            >
              {/* Greeting */}
              <motion.div variants={itemVariants} className="space-y-3">
                <motion.div
                  className="flex items-center justify-center md:justify-start gap-3 text-xl md:text-2xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 14, -8, 14, -4, 10, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    <span className="text-3xl">👨‍💻</span>
                  </motion.div>
                  <h1 className="font-bold text-gray-200 flex items-center gap-2">
                    <span>Hi There! 👋</span>
                    <motion.span
                      animate={{
                        rotate: [0, 14, -8, 14, -4, 10, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                      className="inline-block origin-bottom-right text-3xl"
                    >
                      ✨
                    </motion.span>
                  </h1>
                </motion.div>

                {/* Name */}
                <motion.h2 
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  I'M{' '}
                  <motion.span 
                    className="gradient-text inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    AKSHAY THAKARE
                  </motion.span>
                </motion.h2>
              </motion.div>

              {/* Typing Animation */}
              <motion.div 
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl text-gray-300 min-h-[100px] flex items-center justify-center md:justify-start"
              >
                <div className="flex items-center gap-3">
                  <FiCode className="text-moonlight-cyan hidden sm:block" size={32} />
                  <TypeAnimation
                    sequence={[
                      '💼 Software Engineer',
                      1800,
                      '🚀 Full Stack Developer',
                      1800,
                      '⚡ D365 Technical Consultant',
                      1800,
                      '⚛️ React.js Developer',
                      1800,
                      '🔷 .NET Core Developer',
                      1800,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="gradient-text font-semibold"
                  />
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
              >
                <Link to="/projects">
                  <motion.button
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-moonlight-blue to-moonlight-purple rounded-lg font-semibold text-white shadow-lg moonlight-glow group relative overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-moonlight-purple to-moonlight-blue"
                      initial={{ x: '100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      🚀
                      View My Work
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>
                <Link to="/about">
                  <motion.button
                    className="inline-flex items-center gap-2 px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-white/10 transition-all border border-moonlight-cyan/30"
                    whileHover={{ scale: 1.05, y: -2, borderColor: 'rgba(134, 225, 252, 0.6)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>👤</span>
                    About Me
                  </motion.button>
                </Link>
              </motion.div>

            </motion.div>

            {/* Moonlight Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-first md:order-last"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Glowing Background with Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-moonlight-blue/40 to-moonlight-purple/40 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Secondary Glow Layer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-moonlight-cyan/30 to-accent/30 rounded-full blur-2xl"
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

                {/* Main Image with Glow */}
                <motion.div
                  className="relative z-10 flex items-center justify-center h-full"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="relative">
                    {/* Moonlight glow behind image */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-moonlight-cyan via-primary to-moonlight-purple rounded-full blur-2xl opacity-60"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    {/* Your PNG Image */}
                    <motion.img
                      src="./developer-illustration.png"
                      alt="Akshay Thakare Illustration"
                      className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                      style={{
                        filter: 'drop-shadow(0 0 30px rgba(130, 170, 255, 0.6)) drop-shadow(0 0 60px rgba(192, 153, 255, 0.4))'
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    />
                  </div>
                </motion.div>

                {/* Orbiting Stars */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 360) / 12;
                  const radius = 48;
                  return (
                    <motion.div
                      key={`orbit-${i}`}
                      className="absolute"
                      style={{
                        top: '50%',
                        left: '50%',
                      }}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.1,
                      }}
                    >
                      <motion.div
                        style={{
                          transform: `rotate(${angle}deg) translateX(${radius}%)`,
                        }}
                        animate={{
                          opacity: [0.4, 1, 0.4],
                          scale: [1, 1.8, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      >
                        <FiStar className="text-moonlight-cyan" size={i % 3 === 0 ? 18 : 14} />
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Floating Light Particles */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute rounded-full"
                    style={{
                      width: Math.random() * 8 + 4 + 'px',
                      height: Math.random() * 8 + 4 + 'px',
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      background: i % 3 === 0
                        ? '#86e1fc'
                        : i % 3 === 1
                          ? '#82aaff'
                          : '#c099ff',
                      boxShadow: `0 0 10px ${i % 3 === 0 ? '#86e1fc' : i % 3 === 1 ? '#82aaff' : '#c099ff'}`,
                    }}
                    animate={{
                      y: [0, -40, 0],
                      x: [0, Math.random() * 30 - 15, 0],
                      opacity: [0, 0.8, 0],
                      scale: [0, 1.8, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                      ease: "easeInOut"
                    }}
                  />
                ))}

                {/* Blinking Stars - Scattered around */}
                {[...Array(25)].map((_, i) => (
                  <motion.div
                    key={`star-${i}`}
                    className="absolute"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.5, 0.5],
                    }}
                    transition={{
                      duration: 1.5 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 bg-white rounded-full"
                      style={{
                        boxShadow: `0 0 ${Math.random() * 12 + 6}px ${i % 3 === 0
                            ? '#86e1fc'
                            : i % 3 === 1
                              ? '#82aaff'
                              : '#c099ff'
                          }`
                      }}
                    />
                  </motion.div>
                ))}

                {/* Light Rays */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`ray-${i}`}
                    className="absolute top-1/2 left-1/2 w-0.5 bg-gradient-to-t from-transparent via-moonlight-cyan to-transparent"
                    style={{
                      height: '45%',
                      transformOrigin: 'bottom',
                      transform: `rotate(${i * 45}deg)`,
                    }}
                    animate={{
                      opacity: [0.1, 0.5, 0.1],
                      scaleY: [1, 1.4, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut"
                    }}
                  />
                ))}

                {/* Floating Code Symbols */}
                <motion.div
                  className="absolute text-5xl font-bold text-moonlight-cyan opacity-40"
                  style={{ top: '8%', left: '2%' }}
                  animate={{
                    y: [0, -25, 0],
                    opacity: [0.2, 0.7, 0.2],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                  }}
                >
                  &lt;/&gt;
                </motion.div>

                <motion.div
                  className="absolute text-4xl font-bold text-moonlight-purple opacity-40"
                  style={{ bottom: '12%', right: '2%' }}
                  animate={{
                    y: [0, 20, 0],
                    opacity: [0.2, 0.7, 0.2],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                >
                  {'{ }'}
                </motion.div>

                <motion.div
                  className="absolute text-4xl font-bold text-accent opacity-40"
                  style={{ top: '58%', left: '-3%' }}
                  animate={{
                    x: [0, 15, 0],
                    opacity: [0.2, 0.6, 0.2],
                    rotate: [0, 8, 0],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    delay: 0.3,
                  }}
                >
                  [ ]
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Introduce Myself Section */}
          <motion.div 
            className="mt-32 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-4">
                  LET ME{' '}
                  <span className="gradient-text">INTRODUCE MYSELF</span>
                </h3>
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-moonlight-blue via-moonlight-cyan to-moonlight-purple mx-auto rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.div>

              {/* Content Cards */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="glass-effect p-8 rounded-2xl border border-moonlight-cyan/20 hover:border-moonlight-cyan/40 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 0 30px rgba(134, 225, 252, 0.2)'
                  }}
                >
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    💻 I'm a <span className="text-moonlight-cyan font-semibold">Software Engineer</span> who loves transforming ideas into reliable, scalable products. Over time, I've explored several technologies and found my passion in building{' '}
                    <span className="text-moonlight-purple font-semibold">⚡ high-performance systems</span> and{' '}
                    <span className="text-accent font-semibold">✨ intuitive user experiences</span>.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="glass-effect p-8 rounded-2xl border border-moonlight-purple/20 hover:border-moonlight-purple/40 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 0 30px rgba(192, 153, 255, 0.2)'
                  }}
                >
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    🎯 Results-driven <span className="text-moonlight-purple font-semibold">Full Stack Developer</span> specializing in{' '}
                    <span className="gradient-text font-semibold">🔷 .NET Core, 🌐 ASP.NET MVC, ⚛️ React.js, and 🗄️ SQL Server</span>. 
                    Experienced in designing scalable web applications, creating RESTful APIs, and delivering user-focused front-end interfaces.
                  </p>
                </motion.div>
              </div>

              {/* Tech Stack Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 flex flex-wrap items-center justify-center gap-4"
              >
                {['React.js', '.NET Core', 'TypeScript', 'SQL Server', 'Azure', 'D365'].map((tech, idx) => (
                  <motion.div
                    key={tech}
                    className="glass-effect px-6 py-3 rounded-full border border-moonlight-cyan/30 text-moonlight-cyan font-semibold"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      borderColor: 'rgba(134, 225, 252, 0.8)',
                      boxShadow: '0 0 20px rgba(134, 225, 252, 0.4)'
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
