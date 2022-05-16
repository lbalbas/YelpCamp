import express from 'express'
import { MongoClient, ServerApiVersion } from 'mongodb';
import {config} from 'dotenv'
import bodyParser from 'body-parser'
config();
const app = express()
const db = process.env.DB_URI;

const client = new MongoClient(db, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/addCampground',(req,res)=>{
  client.connect(async (err) => {
    const collection = client.db("yelpCamp").collection("campgrounds");
    let camp = {
      name : req.body.name,
      price: req.body.price,
      image: req.body.image,
      desc: req.body.description,
    };
    const result = await collection.insertOne(camp);
    client.close();
  }); 
})

app.listen(3001)
