// this is the projects page it is a functional component that returns a div element with a header and h1 element.
// I linked my projects from my website to this page.

import Header from '../components/header';

const Projects = () => (
  <div>
    <Header />
    <h1>My Projects</h1>
    <div className='projects-container'>
      <div className='project'>
        <a href='https://www.thisisluke.co.za/projects/periodicTable/periodicTable.html'>Periodic Table</a>
      </div>
      <div className='project'>
        <a href='https://www.thisisluke.co.za/projects/map/index.html'>Map</a>
      </div>
      <div className='project'>
        <a href='https://www.thisisluke.co.za/projects/mealselector/public/index.html'>Meal Selector</a>
      </div>
      <div className='project'>
        <a href='https://www.thisisluke.co.za/projects/weather/index.html'>Weather for SA City</a>
      </div>
      <div className='project'>
        <a href='https://www.thisisluke.co.za/projects/shoppinglist/index.html'>Shopping List</a>
      </div>
      <div className='project'>
        <a href='https://www.thisisluke.co.za/projects/mainblog/public/index.html'>Blog</a>
      </div>
    </div>
    <style jsx>{`
      .projects-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1em;
        padding: 1em;
      }
      .project {
        width: 100%;
        padding: 1em;
        align-items: center;
        justify-content: center;
        align-self: center;
        text-align: center;
        width: 50%;
        font-size: 1.2rem;
        font-family: 'Arial';
        border: 1px solid #333;
        border-radius: 5px;
      }
      .project a {
        color: #333;
        text-decoration: none;
        font-size: 1.2rem;
      }
    `}</style>
  </div>
);

export default Projects;
