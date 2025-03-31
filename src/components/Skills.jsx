import "../styles.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
      <div className="skill-item">
         <img src="./src/assets/icons/js-icon.svg" alt="JavaScript" className="skill-icon" />
         <p>JavaScript</p>
         </div>
         <div className="skill-item">
         <img src="./src/assets/icons/react-icon.svg" alt="React.js" className="skill-icon" />
         <p>React.js</p>
         </div>
         <div className="skill-item">
         <img src="./src/assets/icons/mongodb-icon.svg" alt="MongoDB" className="skill-icon" />
         <p>MongoDB</p>
         </div>
         <div className="skill-item">
         <img src="./src/assets/icons/nodejs-icon.svg" alt="Node.js" className="skill-icon" />
         <p>Node.js</p>
         </div>
         <div className="skill-item">
         <img src="./src/assets/icons/express-icon.svg" alt="Express.js" className="skill-icon" />
         <p>Express.js</p>
         </div>

        </div>
    </section>
  );
};

export default Skills;
