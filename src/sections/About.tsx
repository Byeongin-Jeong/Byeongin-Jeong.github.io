import type { Profile } from '../types';
import Section from '../components/Section';

type Props = { profile: Profile };

export default function About({ profile }: Props) {
  return (
    <Section title="About">
      {profile.intro.split('\n').map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </Section>
  );
}
