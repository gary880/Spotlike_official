import React from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  image?: string;
}

const HowItWorksSection: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      title: '選擇你的捷運站',
      description: '定位到你常搭的捷運站或探索新的站點'
    },
    {
      number: 2, 
      title: '創建專屬 Spotlight',
      description: '在車站留下你的足跡，記錄當下的心情與故事'
    },
    {
      number: 3,
      title: '分享城市探索故事', 
      description: '與其他用戶分享你的通勤發現與城市體驗'
    },
    {
      number: 4,
      title: '與同路人互動交流',
      description: '遇見有相同路線的夥伴，建立有趣的連結'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <div className="section-header">
          <h2>使用流程</h2>
          <p>簡單四步驟，開始你的通勤社交之旅</p>
        </div>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.number} className="step-card">
              <div className="step-number">
                {step.number}
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;