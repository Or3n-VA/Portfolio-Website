import { motion } from 'framer-motion';

interface TimelineItemProps {
  org: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
  tools: string[];
  links?: Array<{ label: string; href: string }>;
}

const TimelineItem = ({ org, role, start, end, bullets, tools, links }: TimelineItemProps) => {
  return (
    <motion.div
      className="relative pl-8 pb-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full border-4 border-white dark:border-slate-900" />
      
      {/* Timeline line */}
      <div className="absolute left-2 top-6 w-0.5 h-full bg-slate-200 dark:bg-slate-700" />

      {/* Content */}
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {role}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              {org}
            </p>
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-500 mt-2 sm:mt-0">
            {start} - {end}
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mb-4">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-indigo-600 dark:text-indigo-400 mt-1.5">•</span>
              <span className="text-slate-700 dark:text-slate-300 text-sm">
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        {/* Tools */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2">
            Tools & Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
