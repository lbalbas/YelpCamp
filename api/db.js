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
		response.status(500).json({message: "Couldn't connect to Database", error});
	}
}

export default database;

export function checkSession(user){
	if(user){
	 	database(async (db)=>{
			let count = await db.collection("users").countDocuments({username:user})
			return count == 1 ? true : false
		})
	}
	return false;
}