import CV from '../CV/cv';
import SocialLinks from '../Shared/SocialLinks';
export default function About() {
  return <div className="page-container about-page">
    <header className="page-heading"><h1>About me</h1></header>
    <section className="about-intro" aria-label="Introduction">
      <div className="prose"><p className="intro-text">Hi! I'm Brendon, a Product Manager based in London. I'm passionate about unpacking problems and finding practical solutions.</p><p>I built this site to share my personal projects, professional experience, and interests outside of work. Feel free to get in touch.</p><SocialLinks /></div>
      <img className="about-portrait" src="/BrendonWard.png" alt="Brendon Ward" />
    </section>
    <nav className="section-links" aria-label="On this page"><a href="#cv">Experience & CV ↓</a><a href="#about-site">About this site ↓</a></nav>
    <CV />
    <section id="about-site" className="site-story"><div><h2>About this site</h2></div><div className="prose">
      <p>I'd been meaning to build a personal website for a while. I wanted somewhere to try things out and share what I'd made, without the ongoing costs I'd run into with uni projects.</p>
      <p>Finding Netlify gave me a straightforward way to host it. I set up a GitHub repository and a React project, then started putting this little corner of the internet together.</p>
      <p>The original design took inspiration from <a href="https://www.youtube.com/watch?v=n8iA18R76jk">this portfolio tutorial</a>, with the original navigation based on <a href="https://www.youtube.com/watch?v=l6nmysZKHFU">this side-drawer tutorial</a>. I've enjoyed working through the rest myself, with some help along the way.</p>
      <p>I’ve since revamped the site with the help of AI to improve the user experience, simplify navigation, and give the layouts and components a more consistent feel. It runs on React, Vite and Tailwind CSS, and is hosted on Netlify.</p>
      <a className="text-link" href="https://github.com/b-ward/Portfolio-Website">View the source on GitHub ↗</a>
    </div></section>
  </div>;
}
