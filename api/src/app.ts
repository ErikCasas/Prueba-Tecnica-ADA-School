import express from 'express';
import morgan from 'morgan';
import routes from './routes/index';
const app = express();

/* A middleware that allows the server to accept requests from a different domain. */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", 'http://localhost:5173');
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

/* A middleware that parses the body of the request and makes it available in the req.body property. */
app.use(express.json());
/* A middleware that logs the requests to the console. */
app.use(morgan('dev'));
/* Importing the routes from the routes folder. */
app.use(routes);




export default app;
