import React from 'react';

import Layout from '../components/Layout';
import skyimg from '../assets/images/A Ibrahim.jpg';
import Sidebar from '../components/Sidebar2';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="ShortBiography"
      >
        <header className="major">
        <i></i>
            <img class= 'circular--square' src={skyimg} height="210" width="210" align="right" />
          <h2> Short Biography </h2>
          <h>
            Abdallah received his Bachelor of Science in Computer Engineering from Suez Canal University 
            in 2010. In 2012, Abdallah received his first M.Sc. I in Computer Sciences from Suez Canal University, Egypt 
            and later 2015 received a M.Sc. II in Computer Science and Information Technologies from the University of Luxembourg, Luxembourg. 
            During his graduate studies, Abdallah worked on various international projects at leading research institutes including Interdisciplinary Center for Security, Reliability, 
            and Trust (SnT) in Luxembourg, and the Poznan Supercomputing and Networking Center (PSNC) in Poland
            <br />
            In November 2015, Abdallah joined the University of Luxembourg and Luxembourg’s Interdisciplinary Centre for Security, Reliability and Trust (SnT) to work on Cloud Computing, 
            Service Level Agreement, QoS, and Performance evaluation for the SaaS cloud Services. He is expected to finish his PhD degree in Computer Sciences and Engineering from the University of Luxembourg 
            in 2019. 
            <br />
            In February 2019, Abdallah has successfully completed the Smart ICT for Business Innovation diploma certificat, in collaboration with the Institut Luxembourgeois de la Normalisation, 
            de l'Accréditation, de la Sécurité et qualité des produits et services (ILNAS), Dell EMC, and the University of Luxembourg. His research interests span the areas of Cloud Computing, Fog/Edge Computing, 
            Software Cloud Services, QoS, Performance monitoring, Industry 4.0, smart mobility and transportation systems, optimization problems, and machine learning. Abdallah is also a national delegate 
            at multiple ISO technical committees such as the ISO/IEC JTC1/SC 38 (Cloud Computing and Distributed Platforms) and ISO/IEC JTC1/SC 41 (Internet of Things and Related Technologies). He is also heavily 
            involved in the tech-start-up business, particularly in companies’ formation and validation stages. 
          </h>
        </header>
      </section>


<section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="CurriculumVitae"
      >
        <header className="major">
        <i></i>
          
          <h2> Curriculum Vitae  </h2>
          
          <h>
            Several versions of my CV can be found here:

          </h>

<table>
<thead>
  <tr>
    <th>CV</th>
    <th>Size</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>cv-varrette-en.pdf</td>
    <td>12 pages</td>
    <td>Full complete version, holding all my publications</td>
  </tr>
  <tr>
    <td>cv-varrette-en_short.pdf</td>
    <td>3 pages</td>
    <td>Short version (3p), holding selected publications</td>
  </tr>
  <tr>
    <td>cv-varrette-en_tiny.pdf</td>
    <td>1 page</td>
    <td>Tiny version</td>
  </tr>
</tbody>
</table>


        </header>
      </section>


    </div>
  </Layout>
);

export default IndexPage;
