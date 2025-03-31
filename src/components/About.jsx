import "../styles.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <img src="/profile.png" alt="Profile" className="profile-pic" />
        <div className="about-text">
          <h1>About Me</h1>
          <p>
          I’m John Loyd Lizada, a passionate IT student and developer from Mambusao, Capiz. 
          With a background in web development, databases, and software solutions, I enjoy building functional, user-friendly applications that solve real-world problems. 
          Currently, I’m working on a market tracking system for agriculture, aiming to help farmers manage supply and demand efficiently.
          I have experience with MERN stack (MongoDB, Express.js, React, Node.js) and UI/UX design using Figma. I also enjoy exploring database management and optimizing data workflows.
          Beyond tech, I’m into gaming and sports—always looking for ways to balance creativity with performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
