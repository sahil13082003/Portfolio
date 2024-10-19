import React from 'react';
import '../style/Skills.css';

import cLogo from '../components/Skills_logo/C.png';
import cppLogo from '../components/Skills_logo/c++.png';
import javaLogo from '../components/Skills_logo/java.png';
import jsLogo from '../components/Skills_logo/javascriptt.jpeg';
import pythonLogo from '../components/Skills_logo/python.jpeg';
import htmlLogo from '../components/Skills_logo/html.png';
import reactLogo from '../components/Skills_logo/react.png';
import nextjsLogo from '../components/Skills_logo/nextjs.png';
import phpLogo from '../components/Skills_logo/php.png';
import expressLogo from '../components/Skills_logo/express.png';
import nodejsLogo from '../components/Skills_logo/nodejs.png';
import mongodbLogo from '../components/Skills_logo/mongodb.png';
import mysqlLogo from '../components/Skills_logo/mysql.png';
import razorpayLogo from '../components/Skills_logo/razorpay.png';
import smtpMailLogo from '../components/Skills_logo/smtp-mail.jpeg';
import bootstrapLogo from '../components/Skills_logo/bootstrap.jpeg';
import tailwindLogo from '../components/Skills_logo/tailwind.png';
import muiLogo from '../components/Skills_logo/mui.png';
import reduxLogo from '../components/Skills_logo/redux.png';

const SkillCard = ({ name, logo, url }) => (
  <div className="skillsCard">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={logo} alt={name} />
      <p>{name}</p>
    </a>
  </div>
);

// Define your skill data here
const skillData = {
  programmingLanguages: [
    { name: 'Java', logo: javaLogo, url: 'https://www.java.com/' },
    { name: 'C', logo: cLogo, url: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
    { name: 'C++', logo: cppLogo, url: 'https://isocpp.org/' },
    { name: 'JavaScript', logo: jsLogo, url: 'https://www.javascript.com/' },
    { name: 'Python', logo: pythonLogo, url: 'https://www.python.org/' },
  ],
  frameworksTools: [
    { name: 'React', logo: reactLogo, url: 'https://reactjs.org/' },
    { name: 'Next.js', logo: nextjsLogo, url: 'https://nextjs.org/' },
    { name: 'Express.js', logo: expressLogo, url: 'https://expressjs.com/' },
    { name: 'Node.js', logo: nodejsLogo, url: 'https://nodejs.org/' },
    { name: 'Redux', logo: reduxLogo, url: 'https://redux.js.org/' },
    { name: 'PHP', logo: phpLogo, url: 'https://www.php.net/' },
    { name: 'Bootstrap', logo: bootstrapLogo, url: 'https://getbootstrap.com/' },
    { name: 'Tailwind CSS', logo: tailwindLogo, url: 'https://tailwindcss.com/' },
    { name: 'MUI', logo: muiLogo, url: 'https://mui.com/' },
  ],
  databasesAPIs: [
    { name: 'MongoDB', logo: mongodbLogo, url: 'https://www.mongodb.com/' },
    { name: 'MySQL', logo: mysqlLogo, url: 'https://www.mysql.com/' },
    { name: 'Razorpay', logo: razorpayLogo, url: 'https://razorpay.com/' },
    { name: 'SMTP Mail', logo: smtpMailLogo, url: 'https://www.smtp.com/' },
  ],
};

const Skills = () => (
  <div className="skillsSection" id="skills">
    <h2 className="skillsTitle">Skills</h2>
    
    <div>
      <h3 className="categoryTitle">Programming Languages</h3>
      <div className="skillsCardContainer">
        {skillData.programmingLanguages.map(skill => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>

    <div>
      <h3 className="categoryTitle">Frameworks & Tools</h3>
      <div className="skillsCardContainer">
        {skillData.frameworksTools.map(skill => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>

    <div>
      <h3 className="categoryTitle">Databases & APIs</h3>
      <div className="skillsCardContainer">
        {skillData.databasesAPIs.map(skill => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
