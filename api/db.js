import { MongoClient, ServerApiVersion } from 'mongodb';
import {config} from 'dotenv'
config();
const url = process.env.DB_URI;

const database =  async(operations, response) => {
	try {
		const client = await MongoClient.connect(url,{ 
			useNewUrlParser: true, 
			useUnifiedTopology: true, 
			serverApi: ServerApiVersion.v1 
		});
		const db = client.db("yelpCamp");
		await operations(db);
		client.close();
	}catch(error){
		response.send(500).json({message: "Couldn't connect to Database", err});
	}
}

export default database;