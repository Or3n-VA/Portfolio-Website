import { motion } from 'framer-motion';

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

const Figure = ({ src, alt, caption, className = '' }: FigureProps) => {
  return (
    <motion.figure
      className={`my-8 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-lg shadow-lg"
      />
      {caption && (
        <figcaption className="mt-4 text-sm text-slate-600 dark:text-slate-400 text-center italic">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
};

export default Figure;
