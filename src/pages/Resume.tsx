import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './Akshay Thakare.pdf';
    link.download = 'Akshay_Thakare_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Download Button */}
          <div className="flex justify-center">
            <motion.button
              onClick={handleDownload}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-moonlight-blue to-moonlight-purple rounded-lg font-semibold text-white shadow-lg moonlight-glow group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-moonlight-purple to-moonlight-blue"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-3">
                📄
                Download Resume
                <FiDownload size={24} />
              </span>
            </motion.button>
          </div>

          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect rounded-2xl overflow-hidden shadow-2xl border border-moonlight-cyan/20"
          >
            <iframe
              src="./Akshay Thakare Resume_Dec_2025.pdf"
              className="w-full h-[85vh] rounded-2xl"
              title="Resume"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
