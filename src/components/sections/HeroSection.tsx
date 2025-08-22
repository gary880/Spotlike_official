import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              捷運上錯過的，Spotlike 幫你留下
            </h1>
            <p className="hero-subtitle">
              在每個美好時刻留下 Spotlike !
            </p>
            <div className="hero-cta">
              <div className="download-badges">
                <a href="https://apps.apple.com/app/spotlike/id6749443094" className="badge-link">
                  <img src="/App_Store_Badge.svg" alt="Download on App Store" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="phone-mockup">
              <img src="/Spotlike_Preview.png" alt="Spotlike App Screenshot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;