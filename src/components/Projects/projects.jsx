import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

// Display order is intentional: established tools, newer web apps, then older experiments.
const PROJECTS = [
  {
    title: 'Arbitrage Betting', src: '/arbitrage.jpg', route: '/Projects/Arbitrage',
    description: 'A program that aggregates betting odds from different sites to find profitable arbitrage bets.',
  },
  {
    title: '500 Scorer', src: '/500.jpg', route: '/Projects/FiveHundred',
    description: 'A scoring assistant for the 500 card game.',
  },
  {
    title: 'FoodieMap', src: '/projects/foodiemap-photo.jpg', href: 'https://foodiemap.ai.studio/',
    description: 'Save restaurants you’ve visited or want to try, filter by cuisine, and add notes. Built with Google Maps and Places.',
  },
  {
    title: 'Goal Tally', src: '/projects/goal-tally-photo.jpg', href: 'https://goal-tally.netlify.app/',
    description: 'Set a goal, log your progress one tally at a time, and look back through your history.',
  },
  {
    title: 'FPL Draft Checker', src: '/projects/fpl-draft-photo.jpg', href: 'https://fpl-draft-mocha.vercel.app/',
    description: 'Check which players are still available in your Fantasy Premier League draft league.',
  },
  {
    title: 'MVP Tally', src: '/projects/mvp-tally-photo.jpg', href: 'https://mvp-tally.netlify.app/',
    description: 'Built for my mum’s football team: collect match MVP votes and track weekly results to find the season’s overall MVP.',
  },
  {
    title: 'Matchday', src: '/projects/matchday-photo.jpg', href: 'https://matchday.magnetichome.chatgpt.site/',
    description: 'Fixtures, league standings, and team form for my local seven-a-side competition, filtered to your chosen team.',
  },
  {
    title: 'Playlist Slicer', src: '/projects/playlist-slicer-photo.jpg', href: 'https://playlist-slicer.ai.studio/',
    description: 'Connect to Spotify and split a long playlist into smaller playlists with a chosen number of songs.',
  },
  {
    title: 'Train Game', src: '/train_numbers.jpg', route: '/Projects/TrainGame',
    description: 'A program that takes four digits and uses different operations to make ten.',
  },
  {
    title: 'Pace Calculator', src: '/runner.jpg', route: '/Projects/PaceCalculator',
    description: 'Calculate your running pace from a distance and finish time.',
  },
  {
    title: 'Spotify Map', src: '/spotify-map.png', route: '/Projects/TopArtistsMap',
    description: 'Spotify top artists visualized by origin country on an interactive world map.',
  },
  {
    title: 'Trio', src: '/card-games.jpg', route: '/Projects/TrioGame',
    description: 'A virtual version of the card game Trio.',
  },
  {
    title: 'PL Predictions (26/27)', src: '/pl-predictions.png', route: '/Projects/PLPredictions',
    description: 'Submit your Premier League predictions for the 2026/27 season.',
  },
];
const extras = [
  { title: 'Photos & Videos', route: '/Projects/Photos', description: 'A few places I’ve been, captured on film.' },
  { title: 'Music', route: '/Projects/Music', description: 'House, tech house and mixes I’ve put together.' },
  { title: 'Business Brains', route: '/Projects/BusinessBrains', description: 'Interviews with current and former business owners about their experiences.' },
];
export default function Projects() {
  return <div className="page-container">
    <header className="page-heading"><h1>Personal projects</h1><p>Games, useful little tools, and ideas I wanted to try.</p></header>
    <div className="project-grid">{PROJECTS.map(card => <ProjectCard key={card.href || card.route} {...card} />)}</div>
    <section className="elsewhere" aria-labelledby="elsewhere-title">
      <div className="section-heading"><h2 id="elsewhere-title">Away from the code</h2><p>A few other things I enjoy making.</p></div>
      <div className="extra-grid">{extras.map(item => <Link key={item.route} to={item.route} className="extra-card"><h3>{item.title} <span aria-hidden="true">↗</span></h3><p>{item.description}</p></Link>)}</div>
    </section>
  </div>;
}
