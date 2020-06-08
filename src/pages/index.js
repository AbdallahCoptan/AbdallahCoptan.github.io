import React from 'react';

import Layout from '../components/Layout';


// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
//import skyimg from '../assets/images/A Ibrahim.jpg';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I am an experienced Cloud engineer, architect, consultant, and, a practitioner. I played a lot with Cloud SLAs, quality assurance, and verification. 
            I can provide a robust system architecture that hosted on the cloud or on a HPC datacenter. Giving network solutions, database solutions, 
            and processing power solutions. I know data science, modelling, buisness intiligence, and data analytics. Finally, i have a good experience in how to visualize a data.
            See my detailed <a href="/bio_abdallah/" target="_blank"> BIO & CVs </a>.   
          </p> 
          

          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} target="_blank">
                  <i className={`${icon}`} aria-hidden='false'></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">National Delegate</h3>
              <div className="subheading mb-3">ILNAS & ANEC Normalisation Luxembourg
              </div>
              <p>
                Participate/ delegate in the standards related to: 
                <li>ISO/IEC JTC1/SC 38 - Cloud Computing and Distributed Platforms</li>
                <li> ISO/IEC JTC1/SC 41- Internet of Things and Related Technologies</li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2016 - Present</span>
            </div>
          </div>


        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">On-demand Network Engineer</h3>
              <div className="subheading mb-3">ITARMI</div>
              <p>
               <li> Troubleshooting network problems and solving them. </li>
              <li>  Installing and maintaining network infrastructure for companies and banks. </li>
              <li>   Collaborating with vendors to resolve problems and update equipment. </li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2019 - Present</span>
            </div>
          </div>


         <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">On-demand Network Engineer</h3>
              <div className="subheading mb-3">Inter-Prompt Global (IP Global)</div>
              <p>
               <li> Troubleshooting network problems and solving them. </li>
              <li>  Installing and maintaining network infrastructure for companies and banks. </li>
              <li>   Collaborating with vendors to resolve problems and update equipment. </li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2017 - Present</span>
            </div>
          </div>






          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Doctoral Researcher</h3>
              <div className="subheading mb-3">Interdisciplinary Centre for Security, Reliability and Trust (SnT)</div>
              <p>
              <li>  Developing a framework and methodologies to evaluate the performance of the cloud SaaS web services, 
                ranking the cloud providers and assuring the quality of services metrics which are indicated in the cloud SLAs. </li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2015 - Febrauary 2020</span>
            </div>
          </div>


          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Cloud Engineer</h3>
              <div className="subheading mb-3">Dell EMC</div>
              <p>
               <li> The mission was to write Dell EMC an overview of the "Cloud Market" - including the overall situation of the market, 
                the trends and concern a customer may have before migrating to the Cloud. </li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2018 - Febrauary 2019</span>
            </div>
          </div>




          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Visiting Researcher</h3>
              <div className="subheading mb-3">Poznan Supercomputing and Networking Center (PSNC)</div>
              <p>
                <li>Dealing with a Virtual desktop infrastructure (VDI) environment.</li>
                <li>Build the VDI environment with VMWare and PSNC.</li>
                <li>Work on the SLA and quality measurements for VDI users, and 
                the energy consumption reduction by using VDI.</li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2016 - May 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Manager and Legal Main Contact</h3>
              <div className="subheading mb-3">Cisco Networking Academy Suez Canal University</div>
              <p>
                <li>Working as legal main contact and manager to the CISCO academy in Suez Canal University.</li>
                <li>Teaching CCNA course in the Academy, enroll the students and practice them. 
                Also teaching the networking and communication courses in department of computer science in the faculty.</li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2012 - July 2014</span>
            </div>
          </div>


          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Research Assistant</h3>
              <div className="subheading mb-3">Interdisciplinary Centre for Security, Reliability and Trust (SnT)</div>
              <p>
                <li> Working on event detection and mining social media such as facebook, twitter, and Instagram.</li>
                <li> Developing a mobility model for Senegal, Ivory Coast, and Luxembourg. These models are built based on the mobile data collected by Orange. </li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2013 - September 2015</span>
            </div>
          </div>





          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Cisco Instructor</h3>
              <div className="subheading mb-3">Cisco Networking Academy Suez Canal University</div>
              <p>
                <li>Teaching CCNA course in the Academy, enroll the students and practice them. 
                Also teaching the networking and communication courses in department of computer science in the faculty.</li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2012 - July 2014</span>
            </div>
          </div>



          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Teaching Assistant</h3>
              <div className="subheading mb-3">Suez Canal University</div>
              <p>
              Teaching many computer sciences and programming languages courses, such as: 
                <li>C/C++/Object-oriented programming</li>
                <li>File structure and Data Structure</li>
                <li>Database Systems/SQL/PL/Oracle</li>
                <li>Networking Systems/CCNA</li>
              
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2010 - December 2013</span>
            </div>
          </div>


          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Network Administrator</h3>
              <div className="subheading mb-3">Suez Canal University</div>
              <p>
                <li>Working as the head of the network of the Faculty of Computer and Informatics inside the IT unit.</li>
                <li>Working as a network Engineer (Network Administrator) at FCI SCU at ITunit in the faculty.</li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2012 - August 2013</span>
            </div>
          </div>


            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Quality Assurance Engineer</h3>
              <div className="subheading mb-3">Suez Canal University-Training Center</div>
              <p>
                <li>Testing the eximination system for the university employees</li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2010 - Febrauary 2013</span>
            </div>
          </div>





          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Oracle Developer and Instructor</h3>
              <div className="subheading mb-3">Suez Canal University-Oracle Training Center</div>
              <p>
                <li> Training the employees of the faculties of Suez Canal University on ORACLE Run time. </li>
                <li> Teaching the classes of the Oracle developing on ORACLE 10g and 11g on Developer 6i and 10g also the Oracle Report builder. </li>
                <li> Teaching the practical of the courses DataBase 1 and DataBase 2. </li>
                <li> Participate in developing new data base systems in the university. </li>
                <li> Maintaining all the old data base systems like Student Affairs system(Control), Employee Affairs system, SndookElzamala System and Eltarteeb system. </li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2010 - August 2013</span>
            </div>
          </div>





          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Teaching and Research Assistant</h3>
              <div className="subheading mb-3">Suez University</div>
              <p>
                <li>Teaching as a Cisco networking Academy instructor, to teach the CCNA to the student of the faculty.</li>
                <li>Teaching Oracle data base designing and developing the forms in the class. And heling the students in their graduation projects.</li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2011 - August 2012</span>
            </div>
          </div>




        </div>
      </section>

     








      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Colorado Boulder</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science - Web Development Track</div>
              <p>GPA: 3.23</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2006 - May 2010</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">James Buchanan High School</h3>
              <div className="subheading mb-3">Technology Magnet Program</div>
              <p>GPA: 3.56</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2002 - May 2006</span>
            </div>
          </div>
        </div>
      </section>

    









      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2009
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008
              (UI Design Category)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li>
          </ul>
        </div>
      </section>

       <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="contact"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2009
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008
              (UI Design Category)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
