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
        id="about"
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
