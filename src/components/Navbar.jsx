import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const loc = useLocation();
  return (
    <header className="w-full bg-white shadow">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold text-slate-900">Sonish Khanal</Link>
        <div className="space-x-4">
          <Link className={`px-3 py-2 rounded-md ${loc.pathname === "/" ? "bg-primary/10" : "hover:bg-primary/5"}`} to="/">Home</Link>
          <Link className={`px-3 py-2 rounded-md ${loc.pathname === "/projects" ? "bg-primary/10" : "hover:bg-primary/5"}`} to="/projects">Projects</Link>
          <Link className={`px-3 py-2 rounded-md ${loc.pathname === "/resume" ? "bg-primary/10" : "hover:bg-primary/5"}`} to="/resume">Resume</Link>
          <Link className={`px-3 py-2 rounded-md ${loc.pathname === "/contact" ? "bg-primary/10" : "hover:bg-primary/5"}`} to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
