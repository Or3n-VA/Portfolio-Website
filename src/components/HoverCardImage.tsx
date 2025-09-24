import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TagChip from './TagChip';

interface HoverCardImageProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  alt?: string;
}

const HoverCardImage = ({ title, description, tags, image, href, alt }: HoverCardImageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={href} className="block">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={image}
            alt={alt || title}
            className="w-full h-full object-cover transition-transform duration-500"
            animate={{
              scale: isHovered ? 1.05 : 1,
              filter: isHovered ? 'brightness(0.7)' : 'brightness(1)'
            }}
          />
          
          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Content overlay */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              y: isHovered ? 0 : 20 
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-200 mb-3 line-clamp-2">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Fallback content for accessibility */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <TagChip key={index} label={tag} />
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default HoverCardImage;
