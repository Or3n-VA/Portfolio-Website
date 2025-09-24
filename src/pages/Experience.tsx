import { motion } from 'framer-motion';
import TimelineItem from '../components/TimelineItem';
import experienceData from '../data/experience.json';

const Experience = () => {
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
              Experience
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              My professional journey combining design, engineering, and research across 
              academic institutions, research labs, and field projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {experienceData.map((experience, index) => (
              <TimelineItem
                key={index}
                org={experience.org}
                role={experience.role}
                start={experience.start}
                end={experience.end}
                bullets={experience.bullets}
                tools={experience.tools}
                links={experience.links}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Skills & Expertise
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              A comprehensive overview of my technical skills and areas of expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: 'Design',
                skills: ['User Research', 'Prototyping', 'CAD', 'Figma', 'Adobe Creative Suite']
              },
              {
                category: 'Engineering',
                skills: ['Python', 'OpenCV', 'React', 'TypeScript', 'IoT Development']
              },
              {
                category: 'Research',
                skills: ['Data Analysis', 'Field Research', 'Academic Writing', 'Statistical Analysis']
              },
              {
                category: 'Tools',
                skills: ['Git', 'Docker', 'AWS', 'Arduino', '3D Printing']
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
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
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
        </div>
      </section>
    </div>
  );
};

export default Experience;
