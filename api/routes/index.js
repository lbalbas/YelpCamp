import express from 'express'
import addCampgroundRoute from './addCampground.js'

const apiRouter = express.Router();

apiRouter.use('/addCampground', addCampgroundRoute);


export default apiRouter;