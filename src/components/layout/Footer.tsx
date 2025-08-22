import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Spotlike</h3>
            <p>捷運上錯過的，Spotlike 幫你留下</p>
          </div>
          
          <div className="footer-section">
            <h4>連結</h4>
            <ul className="footer-links">
              <li><Link to="/privacy">隱私政策</Link></li>
              <li><Link to="/terms">服務條款</Link></li>
              <li><a href="mailto:service@spotlike.net">聯絡我們</a></li>
            </ul>
          </div>

          {/* <div className="footer-section">
            <h4>社群媒體</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>
          </div> */}
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Spotlike. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;