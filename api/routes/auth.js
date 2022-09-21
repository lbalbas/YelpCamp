import express from 'express'
import database from '../db.js'

const authRoute = express.Router()

authRoute.get('/',(req,res)=>{
    res.status(200).send()
})

authRoute.get('/login',(req,res)=>login(req,res))

authRoute.post('/signup',(req,res)=>{

})

function login(req, res){
	return;
}
export default authRoute;