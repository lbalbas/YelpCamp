import React from 'react';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Button from './components/Button.js'
import Link from 'next/Link';
import styles from './addCamground.module.scss';

export default function navbar() {
	return (
		<div className={styles.addComment}>
		<Navbar />
		<form className={styles.commentForm}>
			<h1 className="bold">Add New Comment</h1>
			<control>
					<label for="description">Description</label>
					<textarea rows="8" cols="80" name="description" placeholder="This was probably the best camp I've visited this past year, definitely recomend visiting any time soon." type="textbox"/>
			</control>
			<Button>Add Coment</Button>
		</form>
		<Footer/>
		</div>
	)
}