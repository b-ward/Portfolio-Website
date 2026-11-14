import CV from '../CV/cv';
import SocialLinks from '../Shared/SocialLinks';
export default function About() {
  return <div className="page-container about-page">
    <header className="page-heading"><h1>About me</h1></header>
    <section className="about-intro" aria-label="Introduction">
      <div className="prose"><p className="intro-text">Hi! I'm Brendon, a Product Manager based in London. I'm passionate about unpacking problems and finding practical solutions.</p><p>I built this site to share my personal projects, professional experience, and interests outside of work. Feel free to get in touch.</p><SocialLinks /></div>
      <img className="about-portrait" src="/BrendonWard.png" alt="Brendon Ward" />
    </section>
    <nav className="section-links" aria-label="On this page"><a href="#cv">Experience ↓</a><a href="#about-site">About this site ↓</a></nav>
    <CV />
    <section id="about-site" className="site-story"><div><h2>About this site</h2></div><div className="prose">
      <p>I built this site to share a bit of what I do for work and what I end up building in my spare time. That includes games I play with friends and little tools I made because I wanted to use them myself.</p>
      <p>The site is serverless and built with React and Tailwind CSS. I keep the code on GitHub and use Netlify to deploy and host the site. I also use Google Analytics to see how people use it.</p>
      <p>I coded the first version from scratch in 2024. I took inspiration from <a href="https://www.youtube.com/watch?v=n8iA18R76jk">this portfolio tutorial</a> and used <a href="https://www.youtube.com/watch?v=l6nmysZKHFU">this side-drawer tutorial</a> for the original navigation.</p>
      <p>Since then, I've used AI to help redesign the site and clean up the code. I've also used it to make the site easier to navigate and use, and to update the content.</p>
      <a className="text-link" href="https://github.com/b-ward/Portfolio-Website">View the source on GitHub ↗</a>
    </div></section>
  </div>;
}
