import { motion } from 'framer-motion';
import { FiArrowRight, FiMoon, FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 text-xl md:text-2xl"
              >
                <FiMoon className="text-moonlight-cyan animate-pulse" />
                <h1 className="font-bold text-gray-300">
                  Hi There! 👋🏻
                </h1>
              </motion.div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                I'M <span className="gradient-text">AKSHAY THAKARE</span>
              </h2>
            </div>

            <div className="text-2xl md:text-3xl text-gray-300 min-h-[80px]">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  '.NET Core Developer',
                  2000,
                  'React.js Developer',
                  2000,
                  'Software Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text"
              />
            </div>

            <p className="text-lg text-gray-400 leading-relaxed">
              Results-driven Full Stack Developer specializing in .NET Core, ASP.NET MVC, 
              React.js, and SQL Server. Experienced in designing scalable web applications, 
              creating RESTful APIs, and delivering user-focused front-end interfaces.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-moonlight-blue to-moonlight-purple rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all group moonlight-glow"
              >
                View My Work
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 glass-effect rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                About Me
              </Link>
            </div>
          </motion.div>

          {/* Moonlight Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
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
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="relative">
                  {/* Moonlight glow behind image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-moonlight-cyan via-primary to-moonlight-purple rounded-full blur-xl opacity-50"></div>
                  
                  {/* Your PNG Image */}
                  <img
                    src="/developer-illustration.png"
                    alt="Developer Illustration"
                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 0 30px rgba(130, 170, 255, 0.5)) drop-shadow(0 0 60px rgba(192, 153, 255, 0.3))'
                    }}
                  />
                </div>
              </motion.div>

              {/* Orbiting Stars */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 360) / 12;
                const radius = 45;
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
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      <FiStar className="text-moonlight-cyan" size={i % 3 === 0 ? 16 : 12} />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Floating Light Particles */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: Math.random() * 6 + 3 + 'px',
                    height: Math.random() * 6 + 3 + 'px',
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    background: i % 3 === 0 
                      ? '#86e1fc' 
                      : i % 3 === 1 
                      ? '#82aaff' 
                      : '#c099ff',
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
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
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`star-${i}`}
                  className="absolute"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5],
                  }}
                  transition={{
                    duration: 1.5 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                >
                  <div 
                    className="w-1 h-1 bg-white rounded-full"
                    style={{
                      boxShadow: `0 0 ${Math.random() * 10 + 5}px ${
                        i % 3 === 0 
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
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`ray-${i}`}
                  className="absolute top-1/2 left-1/2 w-1 bg-gradient-to-t from-transparent via-moonlight-cyan to-transparent"
                  style={{
                    height: '40%',
                    transformOrigin: 'bottom',
                    transform: `rotate(${i * 60}deg)`,
                  }}
                  animate={{
                    opacity: [0.1, 0.4, 0.1],
                    scaleY: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Floating Code Symbols */}
              <motion.div
                className="absolute text-4xl font-bold text-moonlight-cyan opacity-40"
                style={{ top: '10%', left: '5%' }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                &lt;/&gt;
              </motion.div>

              <motion.div
                className="absolute text-3xl font-bold text-moonlight-purple opacity-40"
                style={{ bottom: '15%', right: '5%' }}
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              >
                {'{ }'}
              </motion.div>

              <motion.div
                className="absolute text-3xl font-bold text-accent opacity-40"
                style={{ top: '60%', left: '-5%' }}
                animate={{
                  x: [0, 10, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  delay: 0.3,
                }}
              >
                [ ]
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
