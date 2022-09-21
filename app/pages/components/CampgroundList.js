import React,{useState, useEffect} from 'react';
import styles from './CampgroundList.module.scss';
import Button from './Button.js';
import Link from 'next/link';
import axios from 'axios';

axios.defaults.headers.get['Access-Control-Allow-Origin'] = 'http://localhost:3001';
axios.defaults.withCredentials = true;

export default function camgroundlist() {
	const [campgrounds, setCampgrounds] = useState([])
	
	useEffect(() => {
		axios.get(process.env.NEXT_PUBLIC_API_URI + "/auth");
		axios.get(process.env.NEXT_PUBLIC_API_URI + "/getCampgrounds").then((response)=>{
			setCampgrounds(response.data)
		}).catch(function (error) {
	    if (error.response) {
	      // The request was made and the server responded with a status code
	      // that falls out of the range of 2xx
	      console.log(error.response.data);
	      console.log(error.response.status);
	      console.log(error.response.headers);
	    } else if (error.request) {
	      // The request was made but no response was received
	      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
	      // http.ClientRequest in node.js
	      console.log(error.request);
	    } else {
	      // Something happened in setting up the request that triggered an Error
	      console.log('Error', error.message);
	    }
	    console.log(error.config);
	  });
	}, []);

	let campgroundList = campgrounds.map((camp)=> {
		return (
			<div key={camp._id} className={styles.campground}>
				<img src={camp.image} />
				<div className={styles.campDesc}>
					<h3 className="bold">{camp.name}</h3>
					<p>{camp.desc}</p>	
				</div>
				<Link passHref href={"/campgrounds/" + camp._id}>
						<Button>View Campground</Button>
				</Link>
			</div>
		);
	})

	return <div className={styles.list}>{campgroundList}</div>;
}
