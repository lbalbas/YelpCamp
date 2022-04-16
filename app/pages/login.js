import Head from "next/head";
import Button from "./components/Button";
import Link from 'next/Link';
import styles from './login.module.scss';

export default function LogIn() {
	return(
		<div className={styles.container}>
			<div className={styles.col}>
				<div className={styles.nav}>
					<img src="./Logo.svg"/>
					<Link href="/campgrounds"><a>← Back to campgrounds</a></Link>
				</div>
				<div className={styles.login}>
					<form className={styles.form} action="">
						<h1 className="bold">Start exploring camps from all around the world.</h1>
						<label for="user">Username</label>
						<input placeholder="johndoe_91" type="text"/>
						<label for="password">Password</label>
						<input placeholder="Enter your password" type="password"/>
						<Button>Login</Button>
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