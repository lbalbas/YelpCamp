import Image from "next/image";

function NavBar() {
	return (
		<navbar>
			<div className="icon-contact">
				<Image
					className="icon"
					src="/logo-github.svg"
					alt="Github"
					height="45"
					width="45"
				/>
				<Image
					className="icon"
					src="/mail-outline.svg"
					alt="Email"
					height="45"
					width="45"
				/>
				<Image
					className="icon"
					src="/logo-twitter.svg"
					alt="Twitter"
					height="45"
					width="45"
				/>
			</div>
		</navbar>
	);
}

export default NavBar;
