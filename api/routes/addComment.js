import express from 'express'
import database from '../db.js';
import checkSession from '../db.js';

const addCommentRoute = express.Router()

addCommentRoute.post('/', (req,res)=>{
  let comment = {
      comment : req.body.comment,
      camp: req.body.camp,
      submitter: req.cookies.session,
  };
  
  database(async (db) => {
    if(checkSession(req.cookies.session,res)){
      const query = await db.collection("comments").insertOne(comment);
      return res.status(201).send();
    }else{
      return res.status(401).json({msg: "Not logged in"});
    }
  })
}) 
export default addCommentRoute;