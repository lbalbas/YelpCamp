import React from 'react';
import Button from './Button.js'
import Link from 'next/link';
import styles from './SignIn.module.scss'
import { useAuthContext } from '../lib/authContext.js'

export default function navbar() {
	const {auth, setAuthStatus} = useAuthContext();

	if(!auth.loggedIn){
		return (
			<div className={styles.signin}>
				<span className={styles.login}><Link href="/login">Login</Link></span>
				<Link href="/signup"><span><Button>Create an account</Button></span></Link>
			</div>
		)
	}else{
		return (
			<div className={styles.signin}>
				<span><strong>{auth.user}</strong></span>
				<span className={styles.login}>Logout</span>
			</div>
			)
	}
	
}