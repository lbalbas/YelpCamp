import React from "react";
import Link from 'next/link';
import styles from "../campgrounds/[campId].module.scss";
import Button from "./Button.js";

export default function button(props) {
	return (
		<div className={styles.commentList}>
			<div className={styles.comment}>
				<div>
					<h3>Adam Jones</h3>
					<span>13h ago</span>
				</div>
				<p>
					Honestly one of the best experiences ever, took us a while to figure
					out how to get there but it was amazing!
				</p>
			</div>
			<div className={styles.comment}>
				<div>
					<h3>Adam Jones</h3>
					<span>13h ago</span>
				</div>
				<p>
					Honestly one of the best experiences ever, took us a while to figure
					out how to get there but it was amazing!
				</p>
			</div>
			<div className={styles.comment}>
				<div>
					<h3>Adam Jones</h3>
					<span>13h ago</span>
				</div>
				<p>
					Honestly one of the best experiences ever, took us a while to figure
					out how to get there but it was amazing!
				</p>
			</div>
			<Link href="/addComment"><Button><img src="/Chat Bubble.svg"/>Leave a review</Button></Link>
		</div>
	);
}
