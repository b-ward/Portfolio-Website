import { NavLink, useLocation } from 'react-router-dom';
export default function Toolbar() {
  const { pathname } = useLocation();
  const isProject = /^\/(Projects|Photos|Music|BusinessBrains)(\/|$)/i.test(pathname);
  return <header className="site-header"><nav className="site-nav" aria-label="Main navigation">
    <NavLink to="/" className="site-name" aria-label="Brendon Ward, home">
      <svg className="site-mark" viewBox="0 0 40 32" fill="none" aria-hidden="true">
        <path className="site-mark-frame" d="M6 25V4h28v21M2 25h36l-2 4H4l-2-4Z" strokeWidth="1.8" strokeLinejoin="round" />
        <path className="site-mark-screen" d="M10 9h20v12H10z" strokeWidth="1.6" strokeLinejoin="round" />
        <path className="site-mark-frame" d="M17 25h6" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <span>Brendon Ward</span>
    </NavLink>
    <div className="nav-links"><NavLink to="/" end>Home</NavLink><NavLink to="/About">About</NavLink><NavLink to="/Projects" className={isProject ? 'active' : ''} aria-current={isProject ? 'page' : undefined}>Projects</NavLink></div>
  </nav></header>;
}
