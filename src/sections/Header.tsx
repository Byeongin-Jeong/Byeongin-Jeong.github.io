import type { Profile } from '../types';

type Props = { profile: Profile };

export default function Header({ profile }: Props) {
  return (
    <header className="header">
      <h1 className="name">{profile.name}</h1>
      <p className="title">{profile.title}</p>
      <p className="tagline">{profile.tagline}</p>
      <div className="meta">
        <span><i className="fa-solid fa-location-dot" /> {profile.location}</span>
        <a href={`mailto:${profile.email}`}><i className="fa-solid fa-envelope" /> {profile.email}</a>
      </div>
      <div className="links">
        {profile.links.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
            {link.icon && <i className={link.icon} />} {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
