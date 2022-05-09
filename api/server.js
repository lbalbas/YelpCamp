import express from 'express'
import { MongoClient, ServerApiVersion } from 'mongodb';
import {config} from 'dotenv'
config();
const app = express()
const db = process.env.DB_URI;

const client = new MongoClient(db, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


app.get('/*',(req,res)=>{
  client.connect(err => {
    const collection = client.db("yelpCamp").collection("users");
    // perform actions on the collection object
    client.close();
  });
  app.exit();
})

app.listen(3001)
