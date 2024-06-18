import express, { json, urlencoded } from 'express';
import { router } from './routes/index.js';
// import errorHandler from './middlewares/error-handler';

// [routes] start express
const app = express();

// basic settings
app.use(urlencoded({ extended: false }));
app.use(json());
// cors, add this after all features done
// app.use(cors(configs.corsOptions));

// set up api routes
app.use('/', router);

// set up error handler
// app.use(errorHandler);

// set up 404 route
app.use((req, res, _next) => {
  res.status(404).json({
    message: 'not found',
  });
});

export default app;
