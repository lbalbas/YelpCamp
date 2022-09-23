import React, { useState } from 'react';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Button from './components/Button.js'
import Router from 'next/router';
import Link from 'next/link';
import styles from './addCamground.module.scss';
import axios from 'axios';

export default function addCampground() {
	const [campName, setName] = useState("");
	const [campPrice, setPrice] = useState("");
	const [campImage, setImage] = useState("");
	const [campDesc, setDesc] = useState("");

	function sendForm(e){
		e.preventDefault();
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.post(process.env.NEXT_PUBLIC_API_URI + "/addCampground", {
	    name: campName,
	    price: campPrice,
	    image: campImage,
	    desc: campDesc,
	  })
	  .then(function (response) {
	    Router.push('/campgrounds')
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	}

	return (
		<div>
			<Navbar />
			<form onSubmit={e => sendForm(e)} method="post" className={styles.campgroundForm}>
				<h1 className="bold">Add New Campground</h1>
				<control>
						<label htmlFor="name">Campground Name</label>
						<input onKeyUp={(e)=> setName(e.target.value)} required name="name" placeholder="Seven Sisters Waterfall" type="text"/>
				</control>
				<control>
						<label htmlFor="price">Price</label>
						<input onKeyUp={(e)=> setPrice(e.target.value)} required name="price" placeholder="$149" type="text"/>
				</control>
				<control>
						<label htmlFor="image">Image</label>
						<input onKeyUp={(e)=> setImage(e.target.value)} required name="image" placeholder="www.thepinoytraveler.com/2018/01/mt-ulap-diy-dayhike.html" 
				type="text"/>
				</control>
				<control>
						<label htmlFor="description">Description</label>
						<textarea onKeyUp={(e)=> setDesc(e.target.value)} required rows="5" cols="80" name="description" placeholder="Seven Sisters Waterfall" type="textbox"/>
				</control>
				<input type="submit" value="Submit" className={styles.submit}/>
			</form>
			<Footer/>
		</div>
	)
}