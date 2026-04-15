import type { Experience } from '../types';
import Section from '../components/Section';

type Props = { items: Experience[] };

export default function ExperienceSection({ items }: Props) {
  if (!items.length) return null;
  return (
    <Section title="Experience">
      {items.map((e, i) => (
        <article key={i} className="entry">
          <div className="entry-head">
            <h3>{e.company}</h3>
            <span className="period">{e.period}</span>
          </div>
          <p className="role">
            {e.role}
            {e.location && <span className="location"> · {e.location}</span>}
          </p>
          {e.description && <p className="desc">{e.description}</p>}
          {e.highlights?.length > 0 && (
            <ul>
              {e.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          )}
          {e.stack?.length ? (
            <div className="tags">
              {e.stack.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </Section>
  );
}
