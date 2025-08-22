import React, { useState, useRef } from 'react';

interface Screenshot {
  id: string;
  title: string;
  image: string;
  description: string;
}

const ScreenshotsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const screenshots: Screenshot[] = [
    {
      id: 'home',
      title: '首頁探索',
      image: 'screenshot-home.png',
      description: '輕鬆瀏覽附近的 Spotlikes'
    },
    {
      id: 'create',
      title: '創建 Spotlight', 
      image: 'screenshot-create.png',
      description: '輕鬆創建你的專屬 Spotlike 故事'
    },
    {
      id: 'social',
      title: '社群互動',
      image: 'screenshot-social.png', 
      description: '在 Spotlike 分享美好邂逅'
    },
    {
      id: 'profile',
      title: '個人檔案',
      image: 'screenshot-profile.png',
      description: '輕鬆管理 Spotlikes 與留言'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <section className="screenshots-section" id="features">
      <div className="container">
        <div className="section-header">
          <h2>App 功能截圖</h2>
          <p>深入了解 Spotlike 的每個功能細節</p>
        </div>
        
        <div className="screenshots-carousel">
          <div className="carousel-container">
            <button className="carousel-button prev" onClick={prevSlide} aria-label="Previous">
              ←
            </button>
            
            <div 
              className="screenshots-display"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="main-screenshot">
                <img 
                  src={screenshots[currentIndex].image} 
                  alt={screenshots[currentIndex].title}
                />
              </div>
              <div className="screenshot-info">
                <h3>{screenshots[currentIndex].title}</h3>
                <p>{screenshots[currentIndex].description}</p>
              </div>
            </div>
            
            <button className="carousel-button next" onClick={nextSlide} aria-label="Next">
              →
            </button>
          </div>
          
          <div className="carousel-thumbnails">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.id}
                className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <img src={screenshot.image} alt={screenshot.title} />
              </button>
            ))}
          </div>
          
          <div className="carousel-indicators">
            {screenshots.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;