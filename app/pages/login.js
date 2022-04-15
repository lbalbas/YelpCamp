import Head from "next/head";
import Button from "./components/Button";
import Link from 'next/Link';
import styles from './login.module.scss';

export default function LogIn() {
	return(
		<div className={styles.container}>
			<div className={styles.col}>
				<div className={styles.nav}>
					<img src="" />
					<Link href="/campgrounds"><a><img src=""/>Back to campgrounds</a></Link>
				</div>
				<div className={styles.login}>
					<h1 className="bold">Start exploring camps from all around the world.</h1>
					<form className={styles.form} action="">
						<label for="user">Username</label>
						<input placeholder="johndoe_91" type="text"/>
						<label for="password">Password</label>
						<input placeholder="Enter your password" type="password"/>
						<Button>Login</Button>
					</form>
				</div>	
			</div>
			<div className={styles.testimonial}>
				<div>
					<h2>"YelpCamp has honestly saved me hours of 
					research time, and the camps on here are definitely 
					well picked and added"</h2>
					<div>
						<img src=""/>
						<span>May Andrews</span>
						<span>Professional Hiker</span>
					</div>
				</div>
			</div>
		</div>
	)
};