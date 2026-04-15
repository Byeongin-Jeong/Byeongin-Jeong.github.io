type Props = {
  theme: 'light' | 'dark';
  onToggle: () => void;
};

export default function ThemeToggle({ theme, onToggle }: Props) {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label="테마 전환">
      <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} />
    </button>
  );
}
