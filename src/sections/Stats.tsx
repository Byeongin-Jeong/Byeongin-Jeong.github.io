import type { Stat } from '../types';

type Props = { items: Stat[] };

export default function Stats({ items }: Props) {
  if (!items.length) return null;
  return (
    <div className="stats">
      {items.map((s) => (
        <div key={s.label} className="stat">
          <div className="stat-value">{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
