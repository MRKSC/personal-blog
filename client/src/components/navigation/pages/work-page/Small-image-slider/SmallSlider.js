import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotEqual } from '@fortawesome/free-solid-svg-icons';
import projectData from '../Portfolio/portfolioData';

const SmallSliderGenerator = projectData.map((project) => (
  <div>
    {' '}
    {project.skills.react === 0 ? <div /> : <FontAwesomeIcon icon={faNotEqual} className="fa-style" /> }
  </div>
));


export default SmallSliderGenerator;


// ////     {project.skills.react === 0 ? <div></div> : <FontAwesomeIcon icon={faNotEqual} className="fa-style" /> }
// const SmallSliderGenerator = projectData.map((project) => <div><p>{project.skills.react}</p></div> );
