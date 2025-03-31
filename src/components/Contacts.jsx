import "../styles.css";

const Contacts = () => {
  return (
    <section id="contact" className="contacts-section">
      <h2>Contact Me</h2>
      <div className="contacts-container"> {/* Use a container for flexbox */}
        <div className="contact-item"> 
          <a href="mailto:johnloydlizada678@gmail.com">
            <img src="/gmail-icon.svg" alt="Gmail" className="contact-icon" />
          </a>
          <span>Email</span> 
        </div>
        <div className="contact-item">
          <a href="https://www.facebook.com/share/1Epd9qUSuM/" target="_blank" rel="noopener noreferrer">
            <img src="/facebook-icon.svg" alt="Facebook" className="contact-icon" />
          </a>
          <span>Facebook</span>
        </div>
        <div className="contact-item">
          <a href="https://www.instagram.com/lloydlizada?igsh=MTcyNXJqeXAyemYwNw==" target="_blank" rel="noopener noreferrer">
            <img src="/instagram-icon.svg" alt="Instagram" className="contact-icon" />
          </a>
          <span>Instagram</span>
        </div>
        <div className="contact-item">
          <a href="https://github.com/loid678" target="_blank" rel="noopener noreferrer">
            <img src="/github-icon.svg" alt="GitHub" className="contact-icon" />
          </a>
          <span>GitHub</span>
        </div>
      </div>
    </section>
  );
};

export default Contacts;