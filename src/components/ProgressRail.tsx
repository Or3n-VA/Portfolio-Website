import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ProgressRailProps {
  sections: Array<{ id: string; heading: string }>;
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const ProgressRail = ({ sections, activeSection, onSectionClick }: ProgressRailProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-40 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 p-4">
        <div className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                activeSection === section.id
                  ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeSection === section.id
                      ? 'bg-indigo-600 dark:bg-indigo-400'
                      : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                />
                <span className="font-medium">{section.heading}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressRail;
