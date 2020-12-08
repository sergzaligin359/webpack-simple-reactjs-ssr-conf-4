import React from 'react';
import { renderRoutes } from 'react-router-config';

import './style.scss';

const App = ({ route }) => {
  console.log('process.env', process.env.NODE_ENV);
  return(
    <div>
      {renderRoutes(route.routes)}
    </div>
  )
}
App.defaultProps = {
  route: null
}

export default App;