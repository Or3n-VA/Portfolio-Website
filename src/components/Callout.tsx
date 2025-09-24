import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, Info, Lightbulb } from 'lucide-react';

interface CalloutProps {
  type: 'success' | 'warning' | 'info' | 'insight';
  children: React.ReactNode;
}

const Callout = ({ type, children }: CalloutProps) => {
  const config = {
    success: {
      icon: CheckCircle,
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      iconColor: 'text-green-600 dark:text-green-400',
      textColor: 'text-green-800 dark:text-green-200'
    },
    warning: {
      icon: AlertTriangle,
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      textColor: 'text-yellow-800 dark:text-yellow-200'
    },
    info: {
      icon: Info,
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      iconColor: 'text-blue-600 dark:text-blue-400',
      textColor: 'text-blue-800 dark:text-blue-200'
    },
    insight: {
      icon: Lightbulb,
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      iconColor: 'text-purple-600 dark:text-purple-400',
      textColor: 'text-purple-800 dark:text-purple-200'
    }
  };

  const { icon: Icon, bgColor, borderColor, iconColor, textColor } = config[type];

  return (
    <motion.div
      className={`${bgColor} ${borderColor} border-l-4 p-6 rounded-r-lg my-8`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-start space-x-3">
        <Icon className={`w-6 h-6 ${iconColor} flex-shrink-0 mt-0.5`} />
        <div className={`${textColor} prose prose-sm max-w-none`}>
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default Callout;
