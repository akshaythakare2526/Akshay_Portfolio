import { motion } from 'framer-motion';

const StarfieldBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Small stars */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`small-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: '1px',
            height: '1px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: '0 0 2px rgba(255, 255, 255, 0.8)',
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
      
      {/* Medium stars */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`medium-${i}`}
          className="absolute rounded-full"
          style={{
            width: '2px',
            height: '2px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#86e1fc' : i % 3 === 1 ? '#82aaff' : '#c099ff',
            boxShadow: `0 0 4px ${i % 3 === 0 ? '#86e1fc' : i % 3 === 1 ? '#82aaff' : '#c099ff'}`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Large stars */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`large-${i}`}
          className="absolute rounded-full"
          style={{
            width: '3px',
            height: '3px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#86e1fc' : i % 3 === 1 ? '#82aaff' : '#c099ff',
            boxShadow: `0 0 8px ${i % 3 === 0 ? '#86e1fc' : i % 3 === 1 ? '#82aaff' : '#c099ff'}, 0 0 12px ${i % 3 === 0 ? 'rgba(134, 225, 252, 0.4)' : i % 3 === 1 ? 'rgba(130, 170, 255, 0.4)' : 'rgba(192, 153, 255, 0.4)'}`,
          }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Extra large glowing stars */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`xlarge-${i}`}
          className="absolute rounded-full"
          style={{
            width: '4px',
            height: '4px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? '#86e1fc' : '#c099ff',
            boxShadow: `0 0 12px ${i % 2 === 0 ? '#86e1fc' : '#c099ff'}, 0 0 20px ${i % 2 === 0 ? 'rgba(134, 225, 252, 0.5)' : 'rgba(192, 153, 255, 0.5)'}, 0 0 30px ${i % 2 === 0 ? 'rgba(134, 225, 252, 0.3)' : 'rgba(192, 153, 255, 0.3)'}`,
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 2.5, 1],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};

export default StarfieldBackground;
