import { Link } from 'react-router-dom';
export default function MediaPage({ title, description, children }) {
  return <div className="page-container media-page"><Link className="back-link" to="/Projects">← All projects</Link><header className="page-heading"><p className="eyebrow">Away from the code</p><h1>{title}</h1><p>{description}</p></header><div className="media-content">{children}</div></div>;
}
