import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  console.log('process.env', process.env.NODE_ENV);
  return(
    <div>
      <h1>About page</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/todo">Todo</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default About;