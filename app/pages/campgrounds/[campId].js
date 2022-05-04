import Head from "next/head";
import Navbar from "../components/Navbar";
import Comments from "../components/Comments.js";
import Footer from "../components/Footer";
import Link from 'next/link';
import styles from './[campId].module.scss';
import { useRouter } from 'next/router'
import React,{useState,useEffect} from 'react';

export default function Campground() {
  const [campgroundData, setCampgroundData] = useState({
  })
  const router = useRouter()
  const { campId } = router.query

  useEffect(()=>{
  	console.log(campId);
  	setCampgroundData({
  		name: "Mount Ulap", 
  		desc: "Mount Ulap is a 7.7 kilometer moderately traffiked point-to-point trail located near Tuba, Benguet, Philipines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.",
  		price: "$104.99/night",
  		submitter: "Andrew Mike",
  	});
  },[])

  return (
  	<div>
	  	<Navbar/>
	  	<div className={styles.container}>
	  		<div className={styles.campInfo}>
	  			<img src="/Camp Images/High Quality Images/Mount Ulap.png"/>
	  			<div>
	  				<h1>{campgroundData.name}</h1>
	  				<span>{campgroundData.price}</span>
	  			</div>
	  			<p>{campgroundData.desc}</p>
	  			<span><i>Submitted by {campgroundData.submitter}</i></span>
	  		</div>
	  		<Comments className={styles.comment}/>
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
