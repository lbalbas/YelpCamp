import React from 'react';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Button from './components/Button.js'
import Link from 'next/link';
import styles from './addCamground.module.scss';

export default function addComment() {
	return (
		<div className={styles.addComment}>
		<Navbar />
		<form action={process.env.NEXT_PUBLIC_API_URI + "/addComment"} method="post" className={styles.commentForm}>
			<h1 className="bold">Add New Comment</h1>
			<control>
					<label htmlFor="description">Description</label>
					<textarea rows="8" cols="80" name="description" placeholder="This was probably the best camp I've visited this past year, definitely recomend visiting any time soon." type="textbox"/>
			</control>
			<Button>Add Coment</Button>
		</form>
		<Footer/>
		</div>
	)
}