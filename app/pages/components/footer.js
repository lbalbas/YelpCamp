import React from "react";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="icon-contact">
				<a href="https://github.com/lbalbas" target="_blank">
					<Image
						src="/logo-github-white.png"
						height="40"
						width="40"
						className="icon"
					/>
				</a>
				<a href="#" target="_blank">
					<Image
						src="/mail-outline-white.png"
						height="40"
						width="40"
						className="icon"
					/>
				</a>
				<a href="" target="_blank">
					<Image
						src="/logo-twitter-white.png"
						height="40"
						width="40"
						className="icon"
					/>
				</a>
			</div>
			<a className="footer-repo" href="#">
				Lorem Ipsum
			</a>
		</footer>
	);
}
