import express from 'express';
import addCampgroundRoute from './addCampground.js';
import getCampgroundsRoute from './getCampgrounds.js';
const apiRouter = express.Router();

apiRouter.use('/addCampground', addCampgroundRoute);
apiRouter.use('/getCampgrounds', getCampgroundsRoute);

export default apiRouter;