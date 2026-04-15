import { useEffect, useState } from 'react';
import profile from './config/profile.json';
import stats from './config/stats.json';
import experience from './config/experience.json';
import projects from './config/projects.json';
import skills from './config/skills.json';
import education from './config/education.json';
import type {
  Profile,
  Stat,
  Experience,
  Project,
  SkillGroup,
  Education,
} from './types';
import Header from './sections/Header';
import Stats from './sections/Stats';
import About from './sections/About';
import ExperienceSection from './sections/Experience';
import ProjectsSection from './sections/Projects';
import SkillsSection from './sections/Skills';
import EducationSection from './sections/Education';
import ThemeToggle from './components/ThemeToggle';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem('theme') as Theme | null;
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="page">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <main className="container">
        <Header profile={profile as Profile} />
        <Stats items={stats as Stat[]} />
        <About profile={profile as Profile} />
        <ExperienceSection items={experience as Experience[]} />
        <ProjectsSection items={projects as Project[]} />
        <SkillsSection groups={skills as SkillGroup[]} />
        <EducationSection items={education as Education[]} />
        <footer className="footer">
          <p>© {new Date().getFullYear()} {(profile as Profile).name}</p>
        </footer>
      </main>
    </div>
  );
}
