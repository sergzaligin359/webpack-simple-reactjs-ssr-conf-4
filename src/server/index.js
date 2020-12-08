import dotenv from 'dotenv';
import path from 'path';
import createError from 'http-errors';

import * as http from 'http';
import app from './app';

dotenv.config({
  path: path.join(__dirname, '.env'),
});

const server = http.createServer(app);

const PORT = process.env.PORT || 8079;

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// // error handler
// app.use((err, req, res, next) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

server.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));