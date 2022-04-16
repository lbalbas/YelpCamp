import React from 'react';
import Button from './Button.js'
import Link from 'next/Link';
import styles from './SignIn.module.scss'

export default function navbar() {
	return (
		<div className={styles.signin}>
			<span className={styles.login}><Link href="/login">Login</Link></span>
			<Link href="/signup"><span><Button>Create an account</Button></span></Link>
		</div>
	)
}