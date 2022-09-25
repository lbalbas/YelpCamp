import React from 'react';
import styles from './Search.module.scss';
import Button from './Button.js'
import Link from 'next/link';
import { useAuthContext } from '../lib/authContext.js'

export default function search() {

	const {auth, setAuthStatus} = useAuthContext();

	return (
		<div className={styles.searchContainer}>
			<div className={styles.inputContainer}>	
				<img className={styles.icon}src="/Search Icon.svg"/>
				<input placeholder="Search for camps" className={styles.input} type="text" />
			</div>
			<Button>Search</Button>
			{auth.loggedIn ? (<Link href="addCampground"><span className={styles.add}>Or add your own campground</span></Link>) : ""}
		</div>
	)
}
