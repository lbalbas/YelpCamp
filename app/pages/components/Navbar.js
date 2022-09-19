import React from 'react';
import SignIn from './SignIn';
import Link from 'next/link';
import styles from "./Navbar.module.scss";

export default function navbar() {
	return (
		<navbar className={styles.navbar}>
			<div className={styles.logo}>
				<img src="/Logo.svg" alt="YelpCamp Logo" />
				<Link href="/">Home</Link>
			</div> 
			<SignIn/>
		</navbar>
	)
}