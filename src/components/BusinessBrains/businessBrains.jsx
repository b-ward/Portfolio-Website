import MediaPage from '../Shared/MediaPage';
const entries = [
  {
    "src": "https://open.spotify.com/embed/episode/3uqsIqXuVVHPeMTlB5FQ1i?theme=0",
    "title": "Tracey Cameron (Episode 1)"
  },
  {
    "src": "https://open.spotify.com/embed/episode/0eoHeo60heCHlVDOHZOug7?theme=0",
    "title": "Gaeshak Kumar (Episode 2)"
  }
];
export default function BusinessBrains() {
  return <MediaPage title="Business Brains" description="Interviews with current and former business owners about their experiences."><div className="audio-list podcast-list">{entries.map(({ src, title }) => <section key={src}><h2>{title}</h2><div className="podcast-player"><iframe loading="lazy" title={title} src={src} height="232" allow="encrypted-media" /></div></section>)}</div></MediaPage>;
}
