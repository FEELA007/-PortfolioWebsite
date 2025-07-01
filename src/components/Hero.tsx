import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-center">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="gradient-text">Jammula Karthik</span>
        </motion.h1>
        
        <motion.div
          className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          (<span className="gradient-text font-medium">Feela</span>)
        </motion.div>
        
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>
    </motion.section>
  );
};

export default Hero;