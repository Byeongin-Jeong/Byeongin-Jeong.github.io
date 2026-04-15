export type Link = {
  label: string;
  url: string;
  icon?: string;
};

export type Profile = {
  name: string;
  title: string;
  tagline: string;
  intro: string;
  location: string;
  email: string;
  links: Link[];
};

export type Stat = {
  value: string;
  label: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  description?: string;
  highlights: string[];
  stack?: string[];
};

export type Project = {
  name: string;
  period?: string;
  description: string;
  highlights?: string[];
  stack?: string[];
  links?: Link[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  description?: string;
};
