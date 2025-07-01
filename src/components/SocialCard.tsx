import { motion } from 'framer-motion';
import { ExternalLink, DivideIcon as LucideIcon } from 'lucide-react';

interface SocialCardProps {
  title: string;
  username: string;
  url: string;
  icon: LucideIcon;
  description: string;
  color: string;
  index: number;
}

const SocialCard = ({ title, username, url, icon: Icon, description, color, index }: SocialCardProps) => {
  const handleClick = () => {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl glass glass-hover cursor-pointer h-56"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      {/* Background gradient overlay */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
        initial={false}
      />
      
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 blur-xl group-hover:opacity-30 transition-opacity duration-300`}
        initial={false}
      />
      
      <div className="relative p-6 h-full flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-300" />
          </motion.div>
          <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors duration-300" />
        </div>
        
        <div className="flex-1 flex flex-col justify-end">
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300 mb-3">
            {username}
          </p>
          
          {/* Description that appears on hover using CSS */}
          <div className="overflow-hidden">
            <p className="text-xs text-white/70 leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
              {description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Hover border effect */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-colors duration-300"
        initial={false}
      />
    </motion.div>
  );
};

export default SocialCard;