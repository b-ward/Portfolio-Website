import MediaPage from '../Shared/MediaPage';
const entries = [
  {
    "src": "https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fbrendon-ward%2Fprogressive-house-mix-1%2F",
    "title": "Progressive house mix"
  },
  {
    "src": "https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fbrendon-ward%2Ftech-house-crowd-favs%2F",
    "title": "Tech house crowd favourites"
  },
  {
    "src": "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=0&feed=%2Fbrendon-ward%2Fnew-tech-house-mix%2F",
    "title": "New tech house mix"
  },
  {
    "src": "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=0&feed=%2Fbrendon-ward%2Fno-preparation-tech-house-mix%2F",
    "title": "No preparation tech house mix"
  },
  {
    "src": "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=0&feed=%2Fbrendon-ward%2Funderrated-minimal-tech-house-set%2F",
    "title": "Underrated minimal tech house set"
  },
  {
    "src": "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=0&feed=%2Fbrendon-ward%2Ftropikana-set%2F",
    "title": "Tropikana set"
  },
  {
    "src": "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=0&feed=%2Fbrendon-ward%2Fmix-2%2F",
    "title": "Mix 2"
  },
  {
    "src": "https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=0&feed=%2Fbrendon-ward%2Fmix-1%2F",
    "title": "Mix 1"
  }
];
export default function Music() {
  return <MediaPage title="Music" description="A collection of mixes, from progressive house to tech house."><div className="audio-list">{entries.map(({ src, title }) => <section key={src}><h2>{title}</h2><iframe loading="lazy" title={title} src={src} height="120" allow="encrypted-media" /></section>)}</div></MediaPage>;
}
