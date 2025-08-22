// App Information
export const APP_INFO = {
  name: 'Spotlike',
  tagline: '讓你享受捷運通勤的每個時刻',
  description: '在每個車站留下專屬足跡，分享城市探索故事',
  email: {
    support: 'support@spotlike.app',
    privacy: 'privacy@spotlike.app',
    contact: 'contact@spotlike.app'
  }
} as const;

// Download Links
export const DOWNLOAD_LINKS = {
  appStore: '#', // Replace with actual App Store URL
  googlePlay: '#' // Replace with actual Google Play URL
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: '#',
  instagram: '#', 
  twitter: '#'
} as const;

// Breakpoints (matching CSS)
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200
} as const;

// Animation Durations
export const ANIMATION = {
  fast: 150,
  normal: 300,
  slow: 500
} as const;