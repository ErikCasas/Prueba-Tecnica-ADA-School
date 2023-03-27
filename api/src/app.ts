import express from 'express';
import morgan from 'morgan';
import routes from './routes/index'
const app = express();

/* A middleware that parses the body of the request and makes it available in the req.body property. */
app.use(express.json())
/* A middleware that logs the requests to the console. */
app.use(morgan('dev'));
/* Importing the routes from the routes folder. */
app.use(routes)

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "LINK DEL FRONT"); // doy acceso al front);
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//     next();
//   });

export default app