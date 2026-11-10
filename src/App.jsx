import { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Main from './components/main';
import Toolbar from './components/Toolbar/Toolbar';
function RouteScroll() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
export default function App() {
  return <BrowserRouter><RouteScroll /><a className="skip-link" href="#main-content">Skip to content</a><Toolbar /><main id="main-content" tabIndex={-1}><Main /></main></BrowserRouter>;
}
