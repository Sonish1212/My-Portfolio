import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-8 border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-600 flex justify-between">
        <div>© {new Date().getFullYear()} Sonish Khanal</div>
        <div className="space-x-4">
          <a href="https://github.com/Sonish1212" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
