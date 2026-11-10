import { useEffect, useState } from 'react';
import SocialLinks from '../Shared/SocialLinks';
const roles = ['Product Manager', 'Tester', 'Developer', 'Technology Enthusiast'];
function TypedRole() {
  const [text, setText] = useState(roles[0]);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer, role = 0, length = roles[0].length, deleting = true;
    function tick() {
      length += deleting ? -1 : 1;
      setText(roles[role].slice(0, length));
      let delay = deleting ? 45 : 90;
      if (length === 0) { role = (role + 1) % roles.length; deleting = false; delay = 250; }
      else if (length === roles[role].length) { deleting = true; delay = 1500; }
      timer = window.setTimeout(tick, delay);
    }
    function sync() {
      window.clearTimeout(timer);
      if (preference.matches) setText(roles[0]);
      else timer = window.setTimeout(tick, 1500);
    }
    sync();
    preference.addEventListener('change', sync);
    return () => { window.clearTimeout(timer); preference.removeEventListener('change', sync); };
  }, []);
  return <><span className="sr-only">Product Manager, Tester, Developer and Technology Enthusiast</span><span aria-hidden="true">I'm a <span className="role-text">{text}</span></span></>;
}
export default function Landing() {
  return <section className="landing" aria-label="Welcome"><div className="landing-portrait"><img src="/BrendonWard.png" alt="Brendon Ward" /></div><div className="landing-copy"><p className="landing-greeting">G'day! My name's</p><h1>Brendon Ward</h1><p className="landing-role"><TypedRole /></p><SocialLinks /></div></section>;
}
