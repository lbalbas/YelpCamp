import React, { useState } from 'react';
import Head from "next/head";
import Button from "./components/Button";
import Link from 'next/link';
import styles from './login.module.scss';
import Router from 'next/router'
import axios from 'axios';

export default function SignUp() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function sendSignUp(e){
		e.preventDefault();
		axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
		axios.post(process.env.NEXT_PUBLIC_API_URI + "/auth/signup", {
	    	'username': username,
	    	'password': password,
	  })
	  .then(function (response) {
	    Router.push('/campgrounds')
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	}

	return(
		<div className={styles.container}>
			<div className={styles.col}>
				<div className={styles.nav}>
					<img src="./Logo.svg"/>
					<Link href="/campgrounds"><a>← Back to campgrounds</a></Link>
				</div>
				<div className={styles.login}>
					<form onSubmit={(e)=>sendSignUp(e)} className={styles.form} action="">
						<h1 className="bold">Start exploring camps from all around the world.</h1>
						<label htmlFor="user">Username</label>
						<input onKeyUp={(e)=> setUsername(e.target.value)} required placeholder="johndoe_91" type="text"/>
						<label htmlFor="password">Password</label>
						<input onKeyUp={(e)=> setPassword(e.target.value)} required placeholder="Choose password" type="password"/>
						<input type="submit" value="Sign Up" className={styles.submit}/>
						<span className="light-text">Already an user? <Link href="/login"><a>Sign in</a></Link></span>
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