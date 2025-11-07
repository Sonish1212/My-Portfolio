import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="card cursor-pointer"
      onClick={() => onOpen(project)}
    >
      <div className="h-48 w-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="object-cover w-full h-full transition-transform duration-300"
          />
        ) : (
          <span className="text-gray-400">Preview</span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{project.excerpt}</p>
        <div className="mt-3 text-xs text-gray-500">{project.tools.join(' • ')}</div>
      </div>
    </motion.div>
  );
}
