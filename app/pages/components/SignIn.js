import React from 'react';
import Button from './Button.js'
import Link from 'next/link';
import styles from './SignIn.module.scss'
import { useAuthContext } from '../../lib/authContext.js'
import axios from 'axios';

export default function navbar() {
	const {auth, setAuthStatus} = useAuthContext();
	function logout(e){
		axios.defaults.headers['Access-Control-Allow-Origin'] = 'http://localhost:3001';
    	axios.defaults.withCredentials = true;
		axios.get(process.env.NEXT_PUBLIC_API_URI + "/auth/logout")
	    .then(function (response) {
	    	setAuthStatus({loggedIn: false, user: undefined,})
	  	})
	  	.catch(function (error) {
	    	console.log(error);
	  	});
	}
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
				<span className={styles.user}><strong>{auth.user}</strong></span>
				<span onClick={(e)=>logout(e)} className={styles.login}>Logout</span>
			</div>
			)
	}
	
}