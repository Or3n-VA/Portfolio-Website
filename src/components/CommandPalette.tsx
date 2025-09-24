import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, ArrowRight } from 'lucide-react';
import projectsData from '../data/projects.json';
import papersData from '../data/papers.json';

interface CommandItem {
  id: string;
  title: string;
  description: string;
  type: 'page' | 'project' | 'paper';
  path: string;
  tags?: string[];
}

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  // Build command items
  const commandItems: CommandItem[] = [
    // Pages
    { id: 'home', title: 'Home', description: 'Go to homepage', type: 'page', path: '/' },
    { id: 'projects', title: 'Projects', description: 'View all projects', type: 'page', path: '/projects' },
    { id: 'papers', title: 'Papers', description: 'View research papers', type: 'page', path: '/papers' },
    { id: 'experience', title: 'Experience', description: 'View work experience', type: 'page', path: '/experience' },
    { id: 'about', title: 'About', description: 'Learn about me', type: 'page', path: '/about' },
    { id: 'contact', title: 'Contact', description: 'Get in touch', type: 'page', path: '/contact' },
    
    // Projects
    ...projectsData.map(project => ({
      id: project.slug,
      title: project.title,
      description: project.summary,
      type: 'project' as const,
      path: `/projects/${project.slug}`,
      tags: project.tags
    })),
    
    // Papers
    ...papersData.map(paper => ({
      id: paper.slug,
      title: paper.title,
      description: paper.abstract.substring(0, 100) + '...',
      type: 'paper' as const,
      path: `/papers#${paper.slug}`,
      tags: [paper.venue, paper.year]
    }))
  ];

  // Filter items based on query
  const filteredItems = commandItems.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase()) ||
    item.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      
      if (isOpen) {
        if (e.key === 'Escape') {
          setIsOpen(false);
          setQuery('');
          setSelectedIndex(0);
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % filteredItems.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (filteredItems[selectedIndex]) {
            navigate(filteredItems[selectedIndex].path);
            setIsOpen(false);
            setQuery('');
            setSelectedIndex(0);
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, navigate]);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleItemClick = (item: CommandItem) => {
    navigate(item.path);
    setIsOpen(false);
    setQuery('');
    setSelectedIndex(0);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-1/4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              {/* Search input */}
              <div className="flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                <Search className="w-5 h-5 text-slate-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search pages, projects, papers..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none"
                  autoFocus
                />
                <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                  <Command className="w-3 h-3 mr-1" />
                  <span>⌘K</span>
                </div>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto">
                {filteredItems.length === 0 ? (
                  <div className="px-4 py-8 text-center text-slate-500 dark:text-slate-400">
                    No results found
                  </div>
                ) : (
                  <div className="py-2">
                    {filteredItems.map((item, index) => (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item)}
                        className={`w-full px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${
                          index === selectedIndex ? 'bg-slate-50 dark:bg-slate-800' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-slate-900 dark:text-white">
                                {item.title}
                              </span>
                              <span className={`px-2 py-0.5 text-xs rounded-full ${
                                item.type === 'page' 
                                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                                  : item.type === 'project'
                                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                                  : 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                              }`}>
                                {item.type}
                              </span>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                              {item.description}
                            </p>
                            {item.tags && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {item.tags.slice(0, 3).map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="px-1.5 py-0.5 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-400" />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
