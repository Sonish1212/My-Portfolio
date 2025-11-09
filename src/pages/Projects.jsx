import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import touristImg from "../assets/tourist.jpg";
import houseImg from "../assets/housing.jpg";
import diabetesImg from "../assets/diabetic.jpg";
import avianImg from "../assets/avian.jpg";
import fifaImg from "../assets/fifa.jpg";



export const projects = [
  {
    id: 1,
    title: "NT Tourism Data Intelligence",
    excerpt: "NLP + dashboards for tourism reviews",
    description: "A project that ingests visitor reviews and produces actionable insights.",
    tools: ["Python", "NLP", "Tableau"],
    repo: "https://github.com/Sonish1212/IT-CODE-FAIR-Northern-Territory-Tourism-data-science-project",
    demo: "#",
    image: touristImg  // <-- add this
  },
  {
    id: 2,
    title: "House Price Prediction",
    excerpt: "Regression model to predict house prices",
    description: "Model, feature engineering and deployment notes.",
    tools: ["Python", "Scikit-learn", "Streamlit"],
    repo: "https://github.com/Sonish1212/Housing-Price-Prediction",
    demo: "#",
    image: houseImg  // <-- add this
  },
  {
    id: 3,
    title: "Diabetes Visualization (Thesis)",
    excerpt: "Interactive visualizations for diabetes factors",
    description: "Interactive dashboards analyzing diabetes-related patterns.",
    tools: ["Python", "Streamlit", "Matplotlib", "Seaborn"],
    repo: "https://github.com/Sonish1212/Diabetes-visualization",
    demo: "#",
    image: diabetesImg  // <-- add this
  },
  {
    id: 4,
    title: "Avian Influenza Outbreak Analysis",
    excerpt: "Data analysis & visualization for avian influenza outbreaks",
    description: "Analyzed outbreak patterns, visualized spread over time and regions, and explored correlations with environmental factors.",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    repo: "https://github.com/Sonish1212/Data-analytics-avian-influenza",
    demo: "#",
    image: avianImg,
  },
  {
  id: 5,
  title: "Machine Learning vs Deep Learning: Predicting FIFA 21 Player Tiers ⚽",
  excerpt: "Compare ML & DL models for FIFA 21 player tier prediction",
  description: `
This project explores how traditional Machine Learning (ML) models and Deep Learning (DL) models perform in predicting FIFA 21 player tiers (High, Mid, Low).

**Dataset:** FIFA 21 Player Dataset (~3,789 players)  
**Target Variable:** Player Tier (High / Mid / Low)  
**Features:** Overall rating, potential, pace, shooting, passing, dribbling, defending, physical, wage, etc.

**Models Used:**  
- ML: Decision Tree, Random Forest, Naïve Bayes  
- DL: Multilayer Perceptron (ANN)  

**Methodology:** Data preprocessing, Train/Test split, model training, hyperparameter tuning, evaluation using Accuracy, Precision, Recall, F1-score.

**Results:**  
- Random Forest: Accuracy ~98.2% (best performance)  
- Decision Tree: Accuracy ~97.8%  
- Naïve Bayes: Accuracy ~92.5%  
- ANN: Accuracy ~96.5%
  `,
  tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "TensorFlow"],
  repo: "https://github.com/Sonish1212/Machine-Learning-vs-Deep-Learning-Predicting-FIFA-21-Player-Tiers",
  demo: "#",
  image: fifaImg,
}


];
export default function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <section className="grid gap-6">
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={setOpen} />
        ))}
      </div>
      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
