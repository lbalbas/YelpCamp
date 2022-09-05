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
  /*client.connect(async (err) => {
    const collection = client.db("yelpCamp").collection("campgrounds");
    const result = await collection.insertOne(camp);
    client.close();
    res.status(201).send()*/
  
  database(async (db) => {
    const query = await db.collection("campgrounds").insertOne(camp);
    res.status(201).send();
  })
}) 
export default addCampgroundRoute;