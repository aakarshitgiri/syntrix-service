export interface SubService {
  title: string;
  description?: string;
  icon?: string;
}

export interface TechStack {
  name: string;
  category?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  description?: string;
  subServices: SubService[];
  techStack: TechStack[];
}

