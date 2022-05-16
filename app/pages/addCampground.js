import React from 'react';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Button from './components/Button.js'
import Link from 'next/Link';
import styles from './addCamground.module.scss';

export default function addCampground() {
	console.log(process.env.NEXT_PUBLIC_API_URI);
	return (
		<div>
			<Navbar />
			<form action={process.env.NEXT_PUBLIC_API_URI + "/addCampground"} method="post" className={styles.campgroundForm}>
				<h1 className="bold">Add New Campground</h1>
				<control>
						<label for="name">Campground Name</label>
						<input name="name" placeholder="Seven Sisters Waterfall" type="text"/>
				</control>
				<control>
						<label for="price">Price</label>
						<input name="price" placeholder="$149" type="text"/>
				</control>
				<control>
						<label for="name">Image</label>
						<input name="image" placeholder="www.thepinoytraveler.com/2018/01/mt-ulap-diy-dayhike.html" 
				type="text"/>
				</control>
				<control>
						<label for="description">Description</label>
						<textarea rows="5" cols="80" name="description" placeholder="Seven Sisters Waterfall" type="textbox"/>
				</control>
				<input className={styles.submit} placeholder="Add Campground" type="submit"/>
			</form>
			<Footer/>
		</div>
	)
}