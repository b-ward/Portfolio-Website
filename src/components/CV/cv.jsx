import React from 'react';
function ExperienceEntry({ cardTitle, cardBody, imageSrc, listLabel }) {
  const [organisation, ...details] = (cardTitle || '').split(' | ');
  const dateIndex = details.findIndex(item => /\d{4}/.test(item));
  const dateAsRole = dateIndex === 0;
  const role = details.slice(0, dateIndex === -1 ? 1 : dateIndex).join(' | ');
  const heading = role || organisation;
  const metadata = details.slice(dateIndex === -1 ? 1 : dateIndex).join(' · ');
  const bullets = Array.isArray(cardBody) ? cardBody.filter(item => typeof item === 'string') : null;
  return <article className="experience-entry">
    {imageSrc && <img src={imageSrc} alt="" loading="lazy" />}
    <div>{cardTitle && <header><>{!dateAsRole && <p className="entry-organisation">{organisation}</p>}<h3>{heading}</h3><p className="entry-date">{metadata}</p></></header>}
      {bullets ? (
        <>
          {listLabel && <p>{listLabel}</p>}
          <ul>{bullets.map(item => <li key={item}>{item.replace(/^- /, '')}</li>)}</ul>
        </>
      ) : cardBody && <p>{cardBody}</p>}
    </div>
  </article>;
}

const CV = () => (
  <section id="cv" className="cv-section" aria-label="Curriculum vitae">
      <h2 className="cv-section-title">Career Summary</h2>
      <ExperienceEntry
        cardBody="G'day! I'm Brendon, an IT Professional with extensive experience in Software Development, Project Management and Cyber Security. I have strong communication, organisational and technical skills to lead cross-functional teams. I am hard working with a passion for all things tech."
      />
      <h2 className="cv-section-title">Experience</h2>
      <ExperienceEntry
        imageSrc="/CV/mastercard.svg"
        cardTitle="Mastercard | Senior Specialist | Product Management | June 2026 - Present"
        cardBody={[
          "Help shape how customers discover and integrate APIs through Mastercard Developers. The platform supports 5+ billion API calls per month and gives customers the tools to set up projects, obtain credentials and move from sandbox testing to launch.",
          "Clarify customer problems, gather and refine requirements, and manage feature requests. Work with Product and Engineering to weigh trade-offs, prioritise work and resolve delivery dependencies.",
          "Led the creation of the 2027 platform roadmap with Product and Engineering, aligning priorities, timelines and dependencies.",
          "Led the migration of legacy tutorials across nearly 300 repositories. Used AI to generate Python scripts and build Azure DevOps automation that opened around 600 pull requests. The migration took two months, compared with an estimate of 12 months of manual work.",
          "Managed feedback for the platform’s AI Assistant, which uses retrieval-augmented generation (RAG) to answer questions using developer documentation. Partnered with Engineering to resolve issues and improve prompts and backend behaviour.",
        ]}
      />
      <ExperienceEntry
        imageSrc="/CV/WTG.jpg"
        cardTitle="WiseTech Global | Product Specialist | April 2022 - June 2026"
        listLabel="Key responsibilities"
        cardBody={[
          "Strategic Roadmap & Vision: Defined and executed the product roadmap and vision for the Master Data Management (MDM) team, specializing in Address Validation, Organisation Automation and Credit Reporting for the CargoWise One suite.",
          "Technical Skills: Led the design and implementation of multiple containerised architecture migrations for an Address Validation API processing >5M monthly requests and a Credit Report tool serving 100+ power users. Also oversaw the implementation of a RAG system for address matching and a NER system for address parsing.",
          "Data-Informed Decision Making: Utilized SQL, Kibana, and Power BI to analyze user behavior and system performance, translating data insights into actionable feature sets.",
          "Stakeholder Alignment & Customer Success: Optimized the product lifecycle by aligning stakeholder interests with customer needs. Streamlined the management of technical incidents, feature requests, and quotations to ensure high-quality delivery.",
          "Leadership & Mentorship: Scaled team capabilities by mentoring new hires in product design, usability testing, and stakeholder communication; successfully completed a formal Mentoring Program.",
        ]}
      />
      <ExperienceEntry
        imageSrc="/CV/EY.png"
        cardTitle="EY | Senior Consultant | Nov 2019 - April 2022"
        cardBody={["- Involved in development, testing, infrastructure support, requirements gathering and project management of eDNA, a web application for managing cyber security risks. The tool leverages a React front-end, C# back-end, MSSQL Server database and is hosted on Azure utilising Azure DevOps for automated deployment.", <br key="1"/>,
        "- Completed third party supplier assessments on behalf of Pepper and Woolworths. This included assessing the suppliers against the company's internal policies and cyber security standards such as ISO 27001, NIST and ASD-35." , <br key="2"/>,
        "- Carried out security assessments at Macquarie bank and Blooms the chemist, determining risks within internal applications being implemented across the business." , <br key="3"/>,
        "- Completed Security Architecture and Threat Modelling work at Aesop using the ATASM process and MITRE ATT&CK Methods.", <br key="4"/>,
        "- Performed penetration test scoping at ANZ. This involved understanding the architecture of the project, putting together test cases based on the implemented architecture, liaising with stakeholders to complete testing on time and managing deliverables throughout the testing process."]}
      />
      <ExperienceEntry
        imageSrc="/CV/aleron.png"
        cardTitle="Aleron | Security Consultant | Jan 2019 - Nov 2019"
        cardBody="In this role, I was involved with security auditing as well as working as a developer, tester, business analyst and project manager of eDNA, a web application for managing cyber security risks."
      />
      <ExperienceEntry
        imageSrc="/CV/nielsen.jpg"
        cardTitle="Nielsen | Systems Analyst | May 2018 - Dec 2018"
        cardBody="Scripted television ratings analysis and report generation using Python and developed a file monitoring system using Angular and Node.js. Gained a comprehensive understanding of Git and AWS services including S3, Lambda, RDS and EC2."
      />
      <ExperienceEntry
        imageSrc="/CV/wisetech.png"
        cardTitle="WiseTech Global | Associate Developer | Jul 2017 - Dec 2017"
        cardBody="Rotated through multiple teams developing code for the main software product, CargoWise One. Development work included C# and SQL."
      />
      <h2 className="cv-section-title">Certifications</h2>
      <ExperienceEntry
        imageSrc="/CV/BBIT.jpg"
        cardTitle="Black Belt in Thinking | September 2025"
        cardBody="Black Belt in Thinking is a course focused on improving critical thinking skills. Participants learn practical techniques to analyze information, make better decisions, and avoid common reasoning errors. The course covers logical reasoning, problem-solving, and creativity, helping individuals navigate challenges effectively."
      />
      <ExperienceEntry
        imageSrc="/CV/microsoft.png"
        cardTitle="Microsoft Certified: Azure Security Engineer Associate (AZ-500) | Jul 2020"
        cardBody="This exam assesses the ability to accomplish the following technical tasks within Azure: manage identity and access; implement platform protection; manage security operations; and secure data and applications."
      />
      <h2 className="cv-section-title">Education</h2>
      <ExperienceEntry
        imageSrc="/CV/uts.png"
        cardTitle="UTS | Bachelor of Information Technology (Co-op) | 2017 - 2019 | 6.35 GPA/83.09 WAM"
        cardBody="This is a cooperative education scholarship program in computer information systems, developed by UTS in cooperation with a group of leading organisations. It differs from other cooperative education courses in that, during the industry-based sessions, students follow a structured program designed jointly by UTS and the employer group, including formal coursework delivered by industry."
      />
      <ExperienceEntry
        imageSrc="/CV/chs.png"
        cardTitle="Chatswood High School | 2011 - 2016 | 97.40 ATAR"
        cardBody="Throughout my time at Chatswood High School I participated in many extracurricular activities including: Duke of Edinburgh, Band, SRC and High Resolves. During Year 12, I also received high achievers awards for Mathematics and Physics, and Dux of Software Design and Development."
      />
  </section>
);

export default CV;
