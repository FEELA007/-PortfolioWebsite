import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Background from './components/Background';
import Hero from './components/Hero';
import SocialGrid from './components/SocialGrid';

function App() {
  const [nuked, setNuked] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [showPopup, setShowPopup] = useState(false);

  const triggerNuke = () => {
    setNuked(true);
    setShowPopup(true);
    let timer = 5;
    setCountdown(timer);

    const interval = setInterval(() => {
      timer--;
      setCountdown(timer);
      if (timer === 0) {
        clearInterval(interval);
        setTimeout(() => {
          setNuked(false);
          setShowPopup(false);
        }, 1000);
      }
    }, 1000);
  };

  return (
    <div className={`min-h-screen text-white overflow-x-hidden transition-all duration-700 ${nuked ? 'bg-red-900 shake' : 'bg-black'}`}>
      <Background />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`${nuked ? 'blur-sm opacity-60' : ''}`}
      >
        <Hero />
        <SocialGrid />
      </motion.main>

      <motion.footer
        className="py-8 text-center text-white/50 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          © 2025 Jammula Karthik (Feela)
        </h1>
        <div className="h-1 mt-2 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto animate-shoot-line w-0"></div>

        <p className="text-sm mt-3 font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Crafted For Fun.
        </p>

        <button
          onClick={triggerNuke}
          className="mt-6 px-6 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-800 transition duration-300"
        >
          Nuke Button
        </button>
      </motion.footer>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-end items-center pb-16 z-50 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.h1
              className="text-4xl font-extrabold text-red-600 mb-6 animate-pulse"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Sorry... it was a nuke button 💣
            </motion.h1>
            <motion.div className="text-6xl font-black text-red-500 horror-font">
              {countdown > 0 ? countdown : '💥'}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
