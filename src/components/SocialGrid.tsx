import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Send, Mail, Github, MessageCircle, User } from 'lucide-react';
import SocialCard from './SocialCard';

const socialData = [
  {
    title: 'Instagram',
    username: '@feel.aaa',
    url: 'https://www.instagram.com/feel.aaa/',
    icon: Instagram,
    description: 'My main Instagram account where I share creative content, daily updates, and connect with my community.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Instagram',
    username: '@karthik_emo',
    url: 'https://www.instagram.com/karthik_emo/',
    icon: Instagram,
    description: 'My private acc orike petta ra 😂',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'X (Twitter)',
    username: '@feelaa007',
    url: 'https://x.com/feelaa007?s=21',
    icon: Twitter,
    description: 'Follow me for tech insights, random thoughts, project updates, and engaging conversations.',
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'YouTube',
    username: 'Karthik Jammula',
    url: 'https://youtube.com/@karthikjammula07?si=-itJod-G64eHMXBh',
    icon: Youtube,
    description: 'Subscribe for video tutorials, creative projects, tech reviews, and behind-the-scenes content.',
    color: 'from-red-500 to-red-600'
  },
  {
    title: 'Telegram',
    username: 'Channel',
    url: 'https://t.me/+6ve4ByA67b0zMjRl',
    icon: Send,
    description: 'Join my Telegram channel for templates, quick tips, and direct community discussions.',
    color: 'from-blue-500 to-cyan-500'
  },

  {
    title: 'Email',
    username: 'karthikjammula007@gmail.com',
    url: 'mailto:karthikjammula007@gmail.com',
    icon: Mail,
    description: 'Reach out via email for business inquiries, collaborations, or just to say hello!',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'GitHub',
    username: 'feela007',
    url: 'https://github.com/feela007',
    icon: Github,
    description: 'Check out my code repositories, open source contributions, and development projects.',
    color: 'from-gray-600 to-gray-800'
  },
  {
    title: 'Discord',
    username: 'Hitler_dead',
    url: '#',
    icon: MessageCircle,
    description: 'Connect with me on Discord for gaming sessions, casual chats, and community interactions.',
    color: 'from-indigo-500 to-purple-600'
  }
];

const SocialGrid = () => {
  return (
    <section className="min-h-screen py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Connect With Me
        </motion.h2>
        
        <motion.p
          className="text-center text-white/70 mb-16 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Hover over each card to discover more about each platform
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialData.map((social, index) => (
            <SocialCard
              key={social.username}
              {...social}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SocialGrid;
