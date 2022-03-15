import Head from "next/head";
import Button from "./components/Button";


export default function Home() {
	return (
		<div>
			<Head>
				<title>Yelp Camp</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<h1>Hello World</h1>
				<Button>Hi</Button>
			</div>
		</div>
	);
}
