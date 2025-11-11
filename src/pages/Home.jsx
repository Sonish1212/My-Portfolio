import React from 'react'
import { motion } from 'framer-motion'
import profilePic from '../assets/me.jpg';
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <section className="grid gap-12">
      {/* Intro Card */}
      <motion.div 
        initial={{opacity:0, y:6}} 
        animate={{opacity:1, y:0}} 
        className="card grid md:grid-cols-2 gap-6 items-center"
      >
        <div>
          <h1 className="text-4xl font-bold text-slate">
            Hi, I’m <span className="text-primary">Sonish Khanal</span>
          </h1>
          <p className="mt-4 text-grayText">
            I build data-driven visualizations and machine learning projects. I’m learning and applying React, Tailwind and interactive visual tools to bring insights to life.
          </p>
          <div className="mt-6 flex gap-4 flex-wrap">
            <Link 
              to="/resume" 
              className="bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-primary/90 transition">
              Download Resume
            </Link>

            <Link 
              to="/projects" 
              className="bg-gray-100 text-slate px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition">
              See Projects
            </Link>

          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={profilePic} 
              alt="Sonish Khanal" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </motion.div>

      {/* Skills, Experience, Education */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Skills Card */}
        <div className="card">
          <h3 className="font-semibold text-slate text-lg mb-3">Key Skills</h3>
          <div className="flex flex-wrap gap-4">
            {[
              "Python", "SQL", "Power BI", "Matplotlib", "Streamlit", 
              "Data Cleaning", "Dashboard Development"
            ].map(skill => (
              <span 
                key={skill} 
                className="bg-primary/20 text-primary px-4 py-2 rounded-xl font-medium text-sm md:text-base shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Card */}
        <div className="card">
          <h3 className="font-semibold text-slate text-lg mb-3">Experience</h3>
          <p className="text-grayText text-sm">
            Cleaner — 1 year experience (Australia) • McDonald's • Freelance projects
          </p>
        </div>

        {/* Education Card */}
        <div className="card">
          <h3 className="font-semibold text-slate text-lg mb-3">Education</h3>
          <p className="text-grayText text-sm">
            Master of Data Science — Charles Darwin University  
            <br /> BSc (Hons) in Computing — Islington College
          </p>
        </div>
      </div>

      {/* Let's Connect Section */}
      <div className="card text-center">
        <h3 className="text-2xl font-semibold text-slate mb-4">Let's Connect</h3>
        <p className="text-grayText mb-6">Feel free to reach out via GitHub, LinkedIn, or Email</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a 
            href="https://github.com/Sonish1212" 
            target="_blank" 
            rel="noreferrer"
            className="bg-gray-100 text-slate px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/sonish-khanal" 
            target="_blank" 
            rel="noreferrer"
            className="bg-blue-100 text-blue-700 px-6 py-3 rounded-xl shadow hover:bg-blue-200 transition"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:sonishkhanal@gmail.com" 
            className="bg-green-100 text-green-700 px-6 py-3 rounded-xl shadow hover:bg-green-200 transition"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
