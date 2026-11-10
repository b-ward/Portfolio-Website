const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/brendon-c-ward/', path: 'M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 9h3v12h-3V9Zm6 0h3v1.6c.8-1.2 1.9-1.9 3.7-1.9 3.1 0 4.3 2 4.3 5.3v7h-3v-6.2c0-1.9-.4-3.2-2.2-3.2-1.9 0-2.8 1.3-2.8 3.2V21h-3V9Z' },
  { label: 'GitHub', href: 'https://github.com/b-ward', path: 'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z' },
  { label: 'Email Brendon', href: 'mailto:brendon.c.ward@gmail.com', path: 'M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm9 9 8-6V6l-8 6-8-6v1l8 6ZM4 9v9h16V9l-8 6-8-6Z' },
];
export default function SocialLinks() {
  return <div className="social-links" aria-label="Find me online">{links.map(({ label, href, path }) => <a key={label} href={href} aria-label={label} title={label}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={path} /></svg></a>)}</div>;
}
