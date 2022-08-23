import express from 'express'
import { MongoClient, ServerApiVersion } from 'mongodb';
import {config} from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
config();
const app = express()
const db = process.env.DB_URI;

const client = new MongoClient(db, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.options('*', cors())


app.post('/addCampground',(req,res)=>{
  let camp = {
      name : req.body.name,
      price: req.body.price,
      image: req.body.image,
      desc: req.body.desc,
  };
  client.connect(async (err) => {
    const collection = client.db("yelpCamp").collection("campgrounds");
    const result = await collection.insertOne(camp);
    client.close();
    res.status(201).send()
  }) 
})

app.listen(3001)
