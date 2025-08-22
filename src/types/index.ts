// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Feature interfaces
export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AppPreview {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Screenshot {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  image?: string;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}