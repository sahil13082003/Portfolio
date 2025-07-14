import React from 'react';
import '../style/Project.css';
import rxmenImg from '../assets/rxmen-logo.png'; // Replace with your actual image

const workExperiences = [
  {
    id: 1,
    company: 'Qurex Health Pvt. Ltd.',
    role: 'Full Stack Developer Intern',
    duration: 'Jan 2025 - July 2025',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Shadcn', 'Node.js', 'MongoDB', 'REST API', 'JWT'],
    description: `As a Full Stack Developer Intern, I rebuilt the RxMen website using Next.js, optimizing 16 pages with a 75% reduction in load times and a 20% boost in SEO traffic through server-side rendering and meta tags. I developed an Admin CMS with TypeScript and Shadcn, enhancing operational efficiency by 50% with features like real-time booking management and secure JWT authentication. Integrated MongoDB for data storage and REST APIs for seamless functionality, managing 2,536 patient records. Utilized Tailwind CSS and Material UI for responsive, user-friendly designs across platforms. Gained expertise in web optimization, health tech architecture, and secure data handling, shaping my passion for inclusive healthcare solutions.`,
    image: rxmenImg,
  },
];


const Work = () => {
  return (
    <div id="work" className="project1">
      <h2 className="project_heading">Work Experience</h2>
      <div className="project_cards">
        {workExperiences.map((exp) => (
          <div key={exp.id} className="project_card">
            <img src={exp.image} alt={exp.company} className="project1_card_image" />
            <h3 className="project_card_title">{exp.company}</h3>
            <p><strong>{exp.role} | {exp.duration}</strong></p>
            
            <div className="project_card_tech">
              {exp.tech.map((t, index) => (
                <button key={index} className="tech_button">{t}</button>
              ))}
            </div>
            <p className="project_card_description">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;