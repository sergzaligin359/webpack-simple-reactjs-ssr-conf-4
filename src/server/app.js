import express from 'express';
import { matchRoutes } from 'react-router-config';
import logger from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import '@babel/polyfill';
import render from './render';
import { store } from '../store';
import Routes from '../Routes';


const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
app.use(cookieParser());


app.use('/dist', express.static('dist'));
app.use('/img', express.static('img'));
app.get('*', async (req, res) => {

const actions = matchRoutes(Routes, req.path)
  .map(({ route }) => route.component.fetching ? route.component.fetching({...store, path: req.path, cookies: req.cookies }) : null)
  .map(async actions => await Promise.all(
    (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))
    )
  );
  await  Promise.all(actions);
  const context = {};
  const content = render(req.path, store, context);

  res.send(content);
});

export default app;