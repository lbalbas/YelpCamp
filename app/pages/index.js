import Head from "next/head";
import Button from "./components/Button";
import Link from 'next/Link';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Yelp Camp</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="landing-page">
				<img src="/Logo.svg" alt="" className="logo"/>
				<div className="landing-main">
					<h1 className="bold">Explore the best camps on Earth.</h1>
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
					<Link href="/campgrounds" passHref><Button>View Campgrounds</Button></Link>
					<div className="landing-partners">
						<h3>Partnered with:</h3>
						<div className="partners-cont">
							<img src="Airbnb.svg" alt=""/>
							<img src="Booking.svg" alt=""/>
							<img src="Plum Guide.svg" alt=""/>
						</div>
					</div>
				</div>
				
				<div className="landing-image">
				</div>
			</div>
		</div>
	);
}
