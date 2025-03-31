import "../styles.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <h1 className="hero-title">Hi, I'm Loyd!</h1>
        <p className="hero-tagline">Aspiring Developer | Problem Solver</p>
        <a href="#contact" className="hero-button">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
