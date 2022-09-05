import { MongoClient, ServerApiVersion } from 'mongodb';
import {config} from 'dotenv'
config();
const db = process.env.DB_URI;

const client = new MongoClient(db, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

export default client;