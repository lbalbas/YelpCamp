import React from 'react';
import styles from './Footer.module.scss';

export default function footer() {
	return (
		<footer className={styles.footer}> 
			<img src="/Logo.svg" alt="YelpCamp Logo" />
		</footer>
	)
}
