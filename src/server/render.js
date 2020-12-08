import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { assetsByChunkName } from '../../dist/stats.json';

import Routes from '../Routes';

export default (pathname, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={pathname} context={context}>
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  );

  return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <link rel="stylesheet" type="text/css" href="/dist/${
          assetsByChunkName.main[0]
        }" />
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState()).replace(/</g,'\\u003c')}
        </script>
        <script src="/dist/${assetsByChunkName.main[1]}"></script>
      </body>
    </html>`;

};