import React from 'react';
import { motion } from 'framer-motion';
import Background from './components/Background';
import Hero from './components/Hero';
import SocialGrid from './components/SocialGrid';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Background />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <SocialGrid />
      </motion.main>
      
      {/* Footer */}
      <motion.footer
        className="py-8 text-center text-white/50 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p>© 2025 Jammula Karthik (Feela). Crafted For Fun.</p>
      </motion.footer>
    </div>
  );
}

export default App;
