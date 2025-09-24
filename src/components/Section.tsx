import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const Section = ({ children, className = '', id, delay = 0 }: SectionProps) => {
  return (
    <motion.section
      id={id}
      className={`py-16 lg:py-24 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.section>
  );
};

export default Section;
