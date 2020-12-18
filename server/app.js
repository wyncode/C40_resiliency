require('./db/config');
const express = require('express'),
  // passport = require('./middleware/authentication'),
  path = require('path'),
  morgan = require('morgan'),
  cookieParser = require('cookie-parser'),
  openRoutes = require('./routes/open'),
  userRouter = require('./routes/secure/users'),
  requestRouter = require('./routes/secure/requests'),
  app = express();

//Middleware
app.use(express.json());
app.use(morgan('dev'));

// Unauthenticated routes
app.use(openRoutes);

app.use(cookieParser());

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Any authentication middleware and related routing would be here.
// app.use('/api/*', passport.authenticate('jwt', { session: false }));

app.use(userRouter);

app.use(requestRouter);

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
