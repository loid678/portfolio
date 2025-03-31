import "../styles.css";

const ProjectOne = () => {
  return (
    <section id="project-one" className="project-one-section">
      <div className="project-one-content">
        <img
          src="./src/assets/homepage.png" // Replace with your image path
          alt="Project One Screenshot"
          className="project-one-image"
        />
        <div className="project-one-text">
          <h2>Project Name: anisave</h2>
          <p>
          A web-based platform that helps farmers track crop inventory, monitor market prices, and connect with bulk buyers to address agricultural oversupply and price fluctuations.
          </p>
          <h3>Technologies Used</h3>
          <ul>
            <li>MERN Stack</li>
            <li>React Router</li>
            <li>Figma</li>
            {/* Add more technologies as needed */}
          </ul>
          <a
            href="https://github.com/Janriisasi/anisave"
            target="_blank"
            rel="noopener noreferrer"
            className="project-one-link"
          >
            Check It Out
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectOne;