import React from 'react';

const NotFound = () => {
  console.log('process.env', process.env.NODE_ENV);
  return(
    <div>
      <h1>NotFound page</h1>
    </div>
  )
}

export default NotFound;