import React from "react";

export default function Resume() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8">

      {/* Header with Download Resume Button */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">Resume</h1>
          <p className="mt-2 text-gray-600">Sonish Khanal — Master of Data Science</p>
        </div>
        <a 
          href="/public/resume.docx" 
          download 
          className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-4 p-6 border border-gray-300 rounded shadow-sm bg-blue-50">
        <div>
          <h2 className="font-semibold mb-1">Contact</h2>
          <p>46 V.R.D Drive, Leanyer, NT 0812</p>
          <p>0411 310 896</p>
          <p>sonishkhanal@gmail.com</p>
          <p>GitHub: Sonish1212</p>
        </div>

        <div>
          <h2 className="font-semibold mb-1">Education</h2>
          <p>Master of Data Science — Charles Darwin University (2023–2025)</p>
          <p>B.Sc (Hons) Computing — Islington College, Nepal (2018–2022)</p>
        </div>

        <div>
          <h2 className="font-semibold mb-1">Key Skills</h2>
          <ul className="list-disc list-inside">
            <li>Python, SQL</li>
            <li>Data Analysis & Visualization: Power BI, Streamlit, Matplotlib</li>
            <li>Machine Learning & Predictive Modeling</li>
            <li>Data Cleaning & Dashboard Development</li>
          </ul>
        </div>
      </div>

      {/* Professional Profile */}
      <div className="p-6 border border-gray-300 rounded shadow-sm bg-blue-50">
        <h2 className="font-semibold text-xl mb-2">Professional Profile</h2>
        <p className="text-gray-700">
          Motivated and analytical Master of Data Science graduate with a strong foundation in data analytics, machine learning, and statistical modeling. Experienced in transforming complex data into actionable insights for business growth.
        </p>
      </div>

      {/* Experience */}
      <div className="p-6 border border-gray-300 rounded shadow-sm bg-blue-50">
        <h2 className="font-semibold text-xl mb-2">Experience</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Software Developer Intern — Educare Tutoring (Remote, Germany)</h3>
            <p className="text-gray-600 text-sm">July 2025 – Nov 2025</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 text-sm">
              <li>Data collection, preprocessing, and API integration (Google Pollen, DWD, Health Connect).</li>
              <li>Data cleaning, feature extraction, and exploratory data analysis using Python, Pandas, SQL.</li>
              <li>Developed dashboards in Power BI and Python to communicate insights.</li>
              <li>Implemented cloud-hosted analytical solutions on GCP & AWS.</li>
              <li>Applied machine learning for predictive modeling experiments.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Crew Member — McDonald's, Coolalinga, NT</h3>
            <p className="text-gray-600 text-sm">Dec 2023 – Oct 2025</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 text-sm">
              <li>Delivered high-quality customer service in fast-paced environment.</li>
              <li>Maintained accuracy under pressure and collaborated with team members.</li>
              <li>Developed time management, communication, and teamwork skills.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Portfolio Projects */}
      <div className="p-6 border border-gray-300 rounded shadow-sm bg-blue-50">
        <h2 className="font-semibold text-xl mb-2">Portfolio Projects</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li>NT Tourism Data Intelligence — Transforming visitor reviews into actionable insights using NLP, Python, Power BI.</li>
          <li>House Price Prediction — Regression modeling with Python & Scikit-learn, visualized trends with Power BI.</li>
          <li>Machine Learning vs Deep Learning: Predicting FIFA 21 Player Tiers — Comparison of ML & DL models on FIFA dataset.</li>
          <li>Diabetes Visualization Project (Thesis) — Interactive visualization system for identifying factors impacting diabetes using Python & Streamlit.</li>
        </ul>
      </div>

      {/* Personal Attributes */}
      <div className="p-6 border border-gray-300 rounded shadow-sm bg-blue-50">
        <h2 className="font-semibold text-xl mb-2">Personal Attributes</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li>Analytical and Insight-Driven</li>
          <li>Detail-Oriented and Methodical</li>
          <li>Adaptable and Tech-Savvy</li>
          <li>Collaborative Communicator</li>
          <li>Results-Focused and Self-Motivated</li>
          <li>Continuous Learner</li>
        </ul>
      </div>

      {/* References */}
      <div className="p-6 border border-gray-300 rounded shadow-sm bg-blue-50 text-gray-700 text-sm">
        <h2 className="font-semibold text-xl mb-2">References</h2>
        <p>Available upon request</p>
      </div>
    </section>
  );
}
