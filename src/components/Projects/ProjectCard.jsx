import { Link } from 'react-router-dom';

export default function ProjectCard({ src, title, description, route, href, contain = false }) {
  const content = <>
    <div className={`project-image${contain ? ' project-image--contain' : ''}`}>
      <img src={src} alt="" loading="lazy" />
    </div>
    <div className="project-copy"><h2>{title}</h2><p>{description}</p></div>
  </>;

  return href
    ? <a href={href} className="project-card" target="_blank" rel="noopener noreferrer">{content}<span className="sr-only">Opens in a new tab</span></a>
    : <Link to={route} className="project-card">{content}</Link>;
}
