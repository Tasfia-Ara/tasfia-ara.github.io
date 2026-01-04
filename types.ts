
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image: string;
  category: 'Full-stack' | 'AI/ML' | 'Web';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  logo: string;
}

export interface Skill {
  category: string;
  items: string[];
}
