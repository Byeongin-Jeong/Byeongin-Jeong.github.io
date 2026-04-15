import type { SkillGroup } from '../types';
import Section from '../components/Section';

type Props = { groups: SkillGroup[] };

export default function SkillsSection({ groups }: Props) {
  if (!groups.length) return null;
  return (
    <Section title="Skills">
      <div className="skills">
        {groups.map((g) => (
          <div key={g.category} className="skill-group">
            <h4>{g.category}</h4>
            <div className="tags">
              {g.items.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
