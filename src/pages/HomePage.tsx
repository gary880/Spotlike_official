import React from 'react';
import {
  HeroSection,
  HowItWorksSection,
  ScreenshotsSection
} from '../components/sections';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ScreenshotsSection />
      <HowItWorksSection />
    </div>
  );
};

export default HomePage;