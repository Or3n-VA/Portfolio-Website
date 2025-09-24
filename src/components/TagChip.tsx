import { motion } from 'framer-motion';
import { useState } from 'react';

interface TagChipProps {
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'filter';
}

const TagChip = ({ label, isSelected = false, onClick, variant = 'default' }: TagChipProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses = "inline-flex items-center px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer";
  
  const variantClasses = {
    default: isSelected
      ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700",
    filter: isSelected
      ? "bg-indigo-600 text-white shadow-md"
      : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        scale: isHovered ? 1.05 : 1,
        boxShadow: isSelected && variant === 'filter' ? '0 4px 12px rgba(79, 70, 229, 0.3)' : '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}
      transition={{ duration: 0.2 }}
    >
      {label}
    </motion.button>
  );
};

export default TagChip;
