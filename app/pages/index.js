import Head from "next/head";
import Presentation from "./components/presentation";
import NavBar from "./components/navbar";
import Projects from "./components/projects";
import About from "./components/about";
import Footer from "./components/footer";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Luis Balbás' Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="top-pattern">
				<NavBar />
				<Presentation />
			</div>
			<Projects />
			<About />
			<Footer />
		</div>
	);
}
