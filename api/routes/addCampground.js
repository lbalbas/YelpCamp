import express from 'express'
import database from '../db.js';

const addCampgroundRoute = express.Router()

addCampgroundRoute.post('/', (req,res)=>{
  let camp = {
      name : req.body.name,
      price: req.body.price,
      image: req.body.image,
      desc: req.body.desc,
  };
  
  database(async (db) => {
    const query = await db.collection("campgrounds").insertOne(camp);
    res.status(201).send();
  })
}) 
export default addCampgroundRoute;