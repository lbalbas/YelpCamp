import Head from "next/head";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import CampgroundList from "../components/CampgroundList";
import Footer from "../components/Footer";
import Link from 'next/link';
import styles from './camgrounds.module.scss';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Yelp Camp | Search Campgrounds</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<div className={styles['hero-banner']}>
				<h2 className="bold">Welcome to YelpCamp!</h2>
				<p>View our hand-picked campgrounds from all over the world, or add your own.</p>
				<Search/>
			</div>
			<CampgroundList/>
			<Footer/>
		</div>
	);
}