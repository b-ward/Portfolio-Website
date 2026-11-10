import { Link } from 'react-router-dom';
export default function ProjectPage({ title, description, actions, children, className = '' }) {
  return <div className={`page-container tool-page ${className}`}>
    <Link className="back-link" to="/Projects">← All projects</Link>
    <header className="tool-header">
      <div className="page-heading"><h1>{title}</h1><p>{description}</p></div>
      {actions && <div className="tool-help-actions">{actions}</div>}
    </header>
    {children}
  </div>;
}
