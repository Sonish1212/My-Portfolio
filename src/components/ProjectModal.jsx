import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 max-w-3xl w-full card"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold">{project.title}</h2>
        <p className="mt-3 text-gray-700">{project.description}</p>
        <div className="mt-4 text-sm text-gray-500">
          Tools: {project.tools.join(', ')}
        </div>

        <div className="mt-6 flex gap-3">
          {/* View Code */}
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-md bg-primary/10 hover:bg-primary/20"
          >
            View Code
          </a>

          {/* View Details */}
          <a
            href={project.repo + "/blob/main/README.md"} // opens GitHub README
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-md bg-mint/10 hover:bg-mint/20"
          >
            View Details
          </a>
        </div>
      </motion.div>
    </div>
  )
}
