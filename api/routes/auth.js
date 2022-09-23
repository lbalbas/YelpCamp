import express from 'express'
import database from '../db.js'

const authRoute = express.Router()

authRoute.get('/',(req,res)=>{
    res.status(200).send()
})

authRoute.post('/login',async (req,res) => login(req,res))

authRoute.post('/signup',(req,res)=>{
    const { username, password } = req.body;

    database(async (db) => {
        const query = {'username' : username};
        const count = await db.collection("users").countDocuments(query);

        if(count)
            return res.status(409).json({message: "User already exists"})

        const cursor = await db.collection("users").insertOne({username: username, password: password});

        login(res, req);
    },res)
})

function login(req, res){
    

	return
}
export default authRoute;