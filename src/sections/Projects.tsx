import type { Project } from '../types';
import Section from '../components/Section';

type Props = { items: Project[] };

export default function ProjectsSection({ items }: Props) {
  if (!items.length) return null;
  return (
    <Section title="Projects">
      {items.map((p, i) => (
        <article key={i} className="entry">
          <div className="entry-head">
            <h3>{p.name}</h3>
            {p.period && <span className="period">{p.period}</span>}
          </div>
          <p className="desc">{p.description}</p>
          {p.highlights?.length ? (
            <ul>
              {p.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          ) : null}
          {p.stack?.length ? (
            <div className="tags">
              {p.stack.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          ) : null}
          {p.links?.length ? (
            <div className="entry-links">
              {p.links.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                  {l.icon && <i className={l.icon} />} {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </Section>
  );
}
