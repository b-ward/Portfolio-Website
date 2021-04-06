import React, {Component} from 'react';
import { CardDeck } from 'react-bootstrap';
import './cv.css';
import CVCard from './cvCard';

class CV extends Component {
    render() {
        return(
            <div className="cv-wrapper">
                <div className="cv-title main"><h1>CV</h1></div>
                <CardDeck style={{margin: '2rem 8vw 2rem 8vw'}}>
                    <CVCard 
                        cvCardTitle="Career Summary"
                        cvCardBody="I am an enthusiastic and dedicated senior consultant working at EY in the field of cyber security. I am a hard-working individual with a passion for IT and cyber security and have many years of experience and achievements to show this. My technical background in software development allows me to have a bigger impact on technical-based cyber security assessments and projects. I have undertaken third party assessments, security assessments, threat modelling and security architecture work in the financial and consumer industries. I am eager to develop my existing competencies and acquire new skills to complement these."
                    />
                    <div className="col-sm-12 col-lg-12">
                        <h3 className="cv-title">Experience</h3>
                    </div>
                    <CVCard 
                        imageSrc="../CV/EY.png"
                        cvCardTitle="EY | Senior Consultant | Nov 2019 - Present"
                        cvCardBody="Worked as a developer, tester and business analyst on the eDNA product (See Aleron). At the beginning of 2021, transitioned into a consulting-focused role where I have conducted security assessments, threat modelling, third party assessments, security architecture work and penetration test scoping at a variety of financial service and consumer clients."
                    />
                    <CVCard 
                        imageSrc="../CV/aleron.png"
                        cvCardTitle="Aleron | Security Consultant | Jan 2019 - Nov 2019"
                        cvCardBody="Worked as a developer, tester and business analyst in the development of a cyber tool called eDNA. This involved work in C#, React and MSQL. Also involved in the CI/CD of the solution and infrastructure hosting on AWS and Azure. Also worked on third party supplier assessments for clients."
                    />
                    <CVCard 
                        imageSrc="../CV/nielsen.jpg"
                        cvCardTitle="Nielsen | Systems Analyst | May 2018 - Dec 2018"
                        cvCardBody="Worked on a variety of projects throughout my time at Nielsen. Initially, I scripted in Python in order to process ratings data on a daily process and then later I worked on developing a file monitoring system in Angular and Node.js. Also gained a comprehensive understanding of multiple AWS services including S3, Lambda, RDS and EC2."
                    />
                    <CVCard 
                        imageSrc="../CV/uts.png"
                        cvCardTitle="UTS | Student Promotions Representative | Jun 2017 - Jul 2019"
                        cvCardBody="Involves assisting at UTS events in a variety of ways including administrative activities, building
                        tours, registration and providing information on different courses. Some of the main events I have
                        helped with were UTS Open Day, UTS Info Day and the FEIT Capstone Showcase."
                    />
                    <CVCard 
                        imageSrc="../CV/uts.png"
                        cvCardTitle="UTS | Lab Assistant | Mar 2018 - Jun 2018"
                        cvCardBody="During the first semester of 2018, I worked as a lab assistant at UTS for the Web Systems course. This involved helping students learn a basic understanding of UNIX and Linux-based systems."
                    />
                    <CVCard 
                        imageSrc="../CV/wisetech.png"
                        cvCardTitle="WiseTech Global | Associate Developer | Jul 2017 - Dec 2017"
                        cvCardBody="Rotated through multiple teams developing code for the main software product, CargoWise One. Mainly involved development work in C# but also included work in SQL and company macros."
                    />
                    <CVCard 
                        imageSrc="../CV/hoyts.jpg"
                        cvCardTitle="Hoyts | Crew Member & Host | Nov 2013 - May 2017"
                        cvCardBody="This job involved ticket collection, handling money, cleaning cinemas and bathrooms, selling tickets and food and ushering cinemas. It has helped in developing my time management and teamwork skills whilst balancing my studies. As a host, I also needed to train new employees, which required leadership and teaching skills."
                    />
                    <div className="col-sm-12 col-lg-12">
                        <h3 className="cv-title">Certifications</h3>
                    </div>
                    <CVCard 
                        imageSrc="../CV/microsoft.png"
                        cvCardTitle="Microsoft Certified: Azure Security Engineer Associate (AZ-500) | Jul 2020"
                        cvCardBody="This exam assesses the ability to accomplish the following technical tasks within Azure: manage identity and access; implement platform protection; manage security operations; and secure data and applications."
                    />
                    <div className="col-sm-12 col-lg-12">
                        <h3 className="cv-title">Education</h3>
                    </div>
                    <CVCard 
                        imageSrc="../CV/uts.png"
                        cvCardTitle="UTS | Bachelor of Information Technology (Co-op) | 2017 - 2019 | 83.09 WAM"
                        cvCardBody="This is a cooperative education scholarship program in computer information systems, developed by UTS in cooperation with a group of leading organisations. It differs from other cooperative education courses in that, during the industry-based sessions, students follow a structured program designed jointly by UTS and the employer group, including formal coursework delivered by industry."
                    />
                    <CVCard 
                        imageSrc="../CV/chs.png"
                        cvCardTitle="Chatswood High School | 2011 - 2016 | 97.40 ATAR"
                        cvCardBody="Throughout my time at Chatswood High School I participated in many extracurricular activities including: Duke of Edinburgh, Band, SRC and High Resolves. During Year 12, I also received high achievers awards for Mathematics and Physics, and Dux of Software Design and Development."
                    />
                </CardDeck>
            </div>
        )
    }
}

export default CV;