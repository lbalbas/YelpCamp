import Head from "next/head";
import Button from "./components/Button";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Yelp Camp</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div class="landing-page">
				<img src="/Logo.svg" alt="" className="logo"/>
				<div className="landing-main">
					<h1 className="bold">Explore the best camps on Earth</h1>
					<p className="light-text">YelpCamp is a curated list of the best camping spots on Earth. 
					Unfiltered and unbiased reviews.</p>
					<ul className="feature-list light-text">
						<li className="feature">
							<img src="Checkmark.svg" alt="Checkmark"/><span>Add your own camp suggestion.</span>
						</li>
						<li className="feature">
							<img src="Checkmark.svg" alt="Checkmark"/><span>Leave reviews and expriences.</span>	
						</li>
						<li className="feature">
							<img src="Checkmark.svg" alt="Checkmark"/><span>See locations for all camps.</span>	
						</li>
					</ul>
					<Button>View Campgrounds</Button>
				</div>
				<div className="landing-partners">
					<h5>Partnered with:</h5>
					<div className="partners-cont">
						<img src="" alt=""/>
						<img src="" alt=""/>
						<img src="" alt=""/>
					</div>
				</div>
				<div className="landing-image">
				</div>
			</div>
		</div>
	);
}
