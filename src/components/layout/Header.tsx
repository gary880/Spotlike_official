import React from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`header ${className}`}>
      <div className="container">
        <div className="header-content">
          <a href="/" className="logo" style={{ textDecoration: 'none' }}>
            <img src="/SpotLike_logo-removebg-preview.png" alt="Spotlike" width={36} height={36} />
            <h1>Spotlike</h1>
          </a>
          <nav className="nav">
            <a href="/#features" className="nav-link">功能特色</a>
            <a href="/#how-it-works" className="nav-link">使用流程</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;