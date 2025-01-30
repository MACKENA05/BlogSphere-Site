import React from 'react';
import '../App.css'; 

function Footer() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <button onClick={scrollToTop} className="btn-footer">Back to top</button>
          
          <p className="footer-text">Copyright &copy; 2025 My Website. All rights reserved.</p>
          
          <div className="footer-links">
            <a href="privacy-policy" className="footer-link">Privacy Policy</a>
            <a href="terms-of-service" className="footer-link">Terms of Service</a>
          </div>
        </div>
        
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
