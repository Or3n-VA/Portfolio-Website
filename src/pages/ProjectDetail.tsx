import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectHero from '../components/ProjectHero';
import ProgressRail from '../components/ProgressRail';
import Callout from '../components/Callout';
import Gallery from '../components/Gallery';
import projectsData from '../data/projects.json';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeSection, setActiveSection] = useState('context');

  const project = projectsData.find(p => p.slug === slug);

  useEffect(() => {
    const handleScroll = () => {
      const sections = project?.story.map(s => s.id) || [];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [project]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Project not found
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            The project you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <ProjectHero
        title={project.title}
        role={project.role}
        year={project.year}
        summary={project.summary}
        cover={project.cover}
        links={project.links}
      />

      {/* Progress Rail */}
      <ProgressRail
        sections={project.story.map(s => ({ id: s.id, heading: s.heading }))}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Story Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {project.story.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {section.heading}
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:text-slate-300">
              <p>{section.text}</p>
            </div>
          </motion.section>
        ))}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Gallery
            </h2>
            <Gallery images={project.gallery} />
          </motion.section>
        )}

        {/* Impact */}
        {project.impact && project.impact.length > 0 && (
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.impact.map((impact, index) => (
                <Callout key={index} type="success">
                  <p>{impact}</p>
                </Callout>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
