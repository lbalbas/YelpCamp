import Head from "next/head";
import Navbar from "../components/Navbar";
import Comments from "../components/Comments.js";
import Footer from "../components/Footer";
import Link from 'next/link';
import styles from './[campId].module.scss';
import { useRouter } from 'next/router'
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import anime from 'animejs'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default function Campground() {
  const [campgroundData, setCampgroundData] = useState({
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const campId = router.query.campId;

  useEffect(()=>{
  	anime ({
			targets: 'div.box',
			translateY: [
			    {value: 200, duration: 500},
			    {value:0, duration: 800}
			],
			loop: true,
			rotate: {
			value: '1turn',
			},
			borderRadius: 50,
			direction: 'alternate',
			easing: 'easeInOutQuad',
		});
  	if(campId){
			axios.get(process.env.NEXT_PUBLIC_API_URI + `/getCampgrounds?id=${campId}`).then((response)=>{
					setLoading(false)
					setCampgroundData(response.data[0])
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
  	}
  },[router])
  if (loading)
  	return (<div>
  		<Head>
				<title>Yelp Camp | {campgroundData.name}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
	  	<Navbar/>
	  	<div className={styles.container}>
	  		<div className={styles.campInfo}>
					<div className={styles.boxes}>
					    <div className={styles.box + " box"}></div>
					    <div className={styles.box + " box"}></div>
					    <div className={styles.box + " box"}></div>
					    <div className={styles.box + " box"}></div>
					</div>
	  		</div>
	  		<Comments id={campId} className={styles.comment}/>
	  		<div className={styles.sidebar}>
	  			<div className={styles.map}>
	  				<img src="/Map.png"/>
	  			</div>
	  		</div>
	  	</div>
	  	<Footer/>
  	</div>
  )

  return (
  	<div>
  		<Head>
				<title>Yelp Camp | {campgroundData.name}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
	  	<Navbar/>
	  	<div className={styles.container}>
	  		<div className={styles.campInfo}>
	  			<img src={campgroundData.image}/>
	  			<div>
	  				<h1>{campgroundData.name}</h1>
	  				<span>{campgroundData.price}</span>
	  			</div>
	  			<p>{campgroundData.desc}</p>
	  			<span><i>Submitted by {campgroundData.submitter}</i></span>
	  		</div>
	  		<Comments id={campId} className={styles.comment}/>
	  		<div className={styles.sidebar}>
	  			<div className={styles.map}>
	  				<img src="/Map.png"/>
	  			</div>
	  		</div>
	  	</div>
	  	<Footer/>
  	</div>
  )
}
