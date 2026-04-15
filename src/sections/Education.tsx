import type { Education } from '../types';
import Section from '../components/Section';

type Props = { items: Education[] };

export default function EducationSection({ items }: Props) {
  if (!items.length) return null;
  return (
    <Section title="Education">
      {items.map((e, i) => (
        <article key={i} className="entry">
          <div className="entry-head">
            <h3>{e.school}</h3>
            <span className="period">{e.period}</span>
          </div>
          <p className="role">{e.degree}</p>
          {e.description && <p className="desc">{e.description}</p>}
        </article>
      ))}
    </Section>
  );
}
