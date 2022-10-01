import React, { useState } from 'react';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Button from './components/Button.js'
import Link from 'next/link';
import styles from './addCamground.module.scss';
import axios from 'axios';
import Router, { useRouter } from 'next/router'

export default function addComment() {
	const [comment, setComment] = useState("");
	const router = useRouter();
	const campId = router.query.id;

	function sendForm(e){
		e.preventDefault();
    	axios.defaults.headers['Access-Control-Allow-Origin'] = 'http://localhost:3001';
		axios.defaults.withCredentials = true;
		axios.post(process.env.NEXT_PUBLIC_API_URI + "/addComment", {
	    comment: comment,
	    camp: campId,
	  })
	  .then(function (response) {
	    Router.push('/campgrounds/' + campId)
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	}

	return (
		<div className={styles.addComment}>
		<Navbar />
		<form onSubmit={(e)=>sendForm(e)} action={process.env.NEXT_PUBLIC_API_URI + "/addComment"} method="post" className={styles.commentForm}>
			<h1 className="bold">Add New Comment</h1>
			<control>
					<label htmlFor="description">Description</label>
					<textarea onKeyUp={(e)=> setComment(e.target.value)} rows="8" cols="80" name="description" placeholder="This was probably the best camp I've visited this past year, definitely recomend visiting any time soon." type="textbox"/>
			</control>
			<input type="submit" value="Submit" className={styles.submit}/>
		</form>
		<Footer/>
		</div>
	)
}