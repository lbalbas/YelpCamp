import React, { useState } from 'react';
import Head from "next/head";
import Button from "./components/Button";
import Link from 'next/link';
import styles from './login.module.scss';
import axios from 'axios';
import Router from 'next/router';
import { useAuthContext } from './lib/authContext.js'

export default function LogIn() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const {auth, setAuthStatus} = useAuthContext();

	function sendLogin(e){
		e.preventDefault();
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.post(process.env.NEXT_PUBLIC_API_URI + "/auth/login", {
	    	'username': username,
	    	'password': password,
	  })
	  .then(function (response) {
	  	if (response.status == 200){
	  		setAuthStatus({loggedIn: true, user: response.user})
	    	return Router.push('/campgrounds')
	  	}
	  	//Do something about wrong credentials
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	}
	return(
		<div className={styles.container}>
		<Head>
				<title>Yelp Camp | Log In</title>
				<link rel="icon" href="/favicon.ico" />
		</Head>
			<div className={styles.col}>
				<div className={styles.nav}>
					<img src="./Logo.svg"/>
					<Link href="/campgrounds"><a>← Back to campgrounds</a></Link>
				</div>
				<div className={styles.login}>
					<form onSubmit={(e)=>sendLogin(e)} className={styles.form} method="post">
						<h1 className="bold">Start exploring camps from all around the world.</h1>
						<label htmlFor="user">Username</label>
						<input onKeyUp={(e)=> setUsername(e.target.value)} required placeholder="johndoe_91" type="text"/>
						<label htmlFor="password">Password</label>
						<input onKeyUp={(e)=> setPassword(e.target.value)} required placeholder="Enter your password" type="password"/>
						<input type="submit" value="Login" className={styles.submit}/>
						<span className="light-text">Not an user yet? <Link href="/signup"><a>Create an account</a></Link></span>
					</form>
				</div>	
			</div>
			<div className={styles.testimonialCont}>
				<div className={styles.testimonial}>
					<h2>“YelpCamp has honestly saved me hours of 
					research time, and the camps on here are definitely 
					well picked and added.”</h2>
					<div className={styles.hiker}>
						<img src="./User Testimonial.svg"/>
						<div>
							<p className="bold">May Andrews</p>
							<p className="light-text reg-weight">Professional Hiker</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};