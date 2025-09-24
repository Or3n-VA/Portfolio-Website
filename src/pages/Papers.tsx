import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import papersData from '../data/papers.json';

const Papers = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Research Papers
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Published research papers and academic publications covering my work in 
              computer vision, sustainable design, and environmental research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Papers List */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {papersData.map((paper, index) => (
              <motion.article
                key={paper.slug}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                      {paper.title}
                    </h2>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-slate-600 dark:text-slate-400">
                      <span className="font-medium">{paper.venue}</span>
                      <span>•</span>
                      <span>{paper.year}</span>
                    </div>
                    
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                      {paper.abstract}
                    </p>
                  </div>
                  
                  {paper.links && paper.links.length > 0 && (
                    <div className="flex flex-col gap-2 lg:min-w-[200px]">
                      {paper.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
                        >
                          {link.label}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Research Focus
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              My research spans computer vision applications in environmental science, 
              sustainable design methodologies, and human-centered technology solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Computer Vision
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Developing computer vision solutions for environmental analysis and scientific research applications.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Sustainable Design
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Creating sustainable products and systems that reduce environmental impact and improve accessibility.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Human-Centered Design
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Designing technology solutions that prioritize user needs and improve quality of life.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Papers;
