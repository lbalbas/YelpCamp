import React,{useState} from 'react';
import styles from './CampgroundList.module.scss';
import Button from './Button.js';
import Link from 'next/link';

export default function camgroundlist() {
	const [campgrounds, setCampgrounds] = useState([{
		thumbnail: "/Camp Images/Compressed Images/Buloy Springs.jpg",
		hqimage: "/High Quality Images/Buloy Springs.png",
		name: "Buloy Springs",
		desc: "This is one of the best beach camping sites, beautiful and pristine.",
		id: 1,
	},{
		thumbnail: "/Camp Images/Compressed Images/Buloy Springs.jpg",
		hqimage: "/Camp Images/Buloy Springs.png",
		name: "Buloy Springs",
		desc: "This is one of the best beach camping sites, beautiful and pristine.",
		id: 2,
	},{
		thumbnail: "/Camp Images/Compressed Images/Buloy Springs.jpg",
		hqimage: "/Camp Images/High Quality Images/Buloy Springs.png",
		name: "Buloy Springs",
		desc: "This is one of the best beach camping sites, beautiful and pristine.",
		id: 3,
	},{
		thumbnail: "/Camp Images/Compressed Images/Buloy Springs.jpg",
		hqimage: "/Camp Images/High Quality Images/Buloy Springs.png",
		name: "Buloy Springs",
		desc: "This is one of the best beach camping sites, beautiful and pristine.",
		id: 4,
	},{
		thumbnail: "/Camp Images/Compressed Images/Buloy Springs.jpg",
		hqimage: "/Camp Images/High Quality Images/Buloy Springs.png",
		name: "Buloy Springs",
		desc: "This is one of the best beach camping sites, beautiful and pristine.",
		id: 5,
	},{
		thumbnail: "/Camp Images/Compressed Images/Buloy Springs.jpg",
		hqimage: "/Camp Images/High Quality Images/Buloy Springs.png",
		name: "Buloy Springs",
		desc: "This is one of the best beach camping sites, beautiful and pristine.",
		id: 6,
	},])
	
	let campgroundList = campgrounds.map((camp)=> {
		return (
			<div key={camp.id} className={styles.campground}>
				<img src={camp.thumbnail} />
				<div className={styles.campDesc}>
					<h3 className="bold">{camp.name}</h3>
					<p>{camp.desc}</p>	
				</div>
				<Link href={"campgrounds/" + camp.id}>
					<Button>View Campground</Button>
				</Link>
			</div>
		);
	})


	return <div className={styles.list}>{campgroundList}</div>;
}
