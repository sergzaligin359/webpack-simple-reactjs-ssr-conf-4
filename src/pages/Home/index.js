import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { setTest } from '@actions';

const Home = ({ text }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTest('Hey???'));
  }, []);

  console.log('process.env', process.env.NODE_ENV);
  console.log('process.env is browser', process.env.NODE_ENV);
  return(
    <div>
      <h1>Home page - {text}</h1>
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

const mapStateToProps = state => ({
  text: state.test.text
});


export default connect(mapStateToProps, {} )(Home);