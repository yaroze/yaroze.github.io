export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
  technologies: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  technologies: string[];
  details: string[];
  image?: string;
  link?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'cloud' | 'containers' | 'iac' | 'databases' | 'monitoring' | 'languages' | 'tools';
  icon: string;
  proficiency: number;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  logo?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  field?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  type: 'consulting' | 'fulltime' | 'other';
}

export interface Theme {
  mode: 'light' | 'dark';
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}