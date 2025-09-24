import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">OV</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Designer & Design Engineer passionate about creating sustainable solutions 
              through research and product building.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none text-slate-700 dark:text-slate-300"
          >
            <p>
              I'm a designer and design engineer with a passion for creating sustainable solutions 
              that address real-world problems. My work combines research, prototyping, and 
              user-centered design to develop innovative products and systems.
            </p>
            <p>
              Currently based at Brown University, I work on projects that span computer vision 
              applications in environmental science, sustainable campus infrastructure, and 
              human-centered technology solutions. My research focuses on making scientific 
              instrumentation more accessible and developing sustainable design methodologies.
            </p>
            <p>
              I believe in the power of interdisciplinary collaboration and have worked with 
              researchers, engineers, and communities to create solutions that have real impact. 
              From developing computer vision tools for PFAS research to designing sustainable 
              campus infrastructure, I'm committed to using design and engineering to address 
              environmental and social challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Skills & Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  category: 'Design',
                  skills: ['User Research', 'Prototyping', 'CAD Design', 'Figma', 'Adobe Creative Suite', 'Design Systems']
                },
                {
                  category: 'Engineering',
                  skills: ['Python', 'OpenCV', 'React', 'TypeScript', 'IoT Development', 'Arduino']
                },
                {
                  category: 'Research',
                  skills: ['Data Analysis', 'Field Research', 'Academic Writing', 'Statistical Analysis', 'Literature Review']
                },
                {
                  category: 'Tools',
                  skills: ['Git', 'Docker', 'AWS', '3D Printing', 'Lab Equipment', 'Project Management']
                }
              ].map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="text-sm text-slate-600 dark:text-slate-400"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Background */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Education & Background
            </h2>
            
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Brown University
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Design Engineering & Environmental Studies
                  </p>
                </div>
                <div className="text-slate-500 dark:text-slate-500 mt-2 md:mt-0">
                  2020 - Present
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                Focus on sustainable design, computer vision applications in environmental research, 
                and human-centered design methodologies. Active in research labs and campus sustainability initiatives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Whether you're looking for design expertise, research collaboration, 
              or just want to chat about sustainable technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
              <a
                href="mailto:oren.vanallen@brown.edu"
                className="inline-flex items-center px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
