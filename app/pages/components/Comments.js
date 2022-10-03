import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import styles from "../campgrounds/[campId].module.scss";
import Button from "./Button.js";
import axios from 'axios';

export default function button(props) {
	const [comments, setComments] = useState([]);
	const [loading, setLoad] = useState(true);
	
	useEffect(() => {
		if(loading && props.id){
			axios.get(process.env.NEXT_PUBLIC_API_URI + "/getComments?id=" + props.id).then((response)=>{
				setComments(response.data)
				setLoad(false)
			}).catch(function (error) {
		    if (error.response) {
		      console.log(error.response.data);
		      console.log(error.response.status);
		      console.log(error.response.headers);
		    } else if (error.request) {
		      console.log(error.request);
		    } else {
		      console.log('Error', error.message);
		    }
		    console.log(error.config);
		  });
		}
	},);

	if(loading){
		return <div>Loading...</div>
	}else{
		return (
		<div className={styles.commentList}>
			{
				comments.map((comment)=>{
					return (
						<div key={comment._id} className={styles.comment}>
							<div>
								<h3>{comment.submitter}</h3>
								<span>{comment.date}</span>
							</div>
							<p>
								{comment.comment}
							</p>
						</div>
						)
				})
			}
			<div className={styles.comment}>
				<div>
					<h3>Adam Jones</h3>
					<span>13h ago</span>
				</div>
				<p>
					Honestly one of the best experiences ever, took us a while to figure
					out how to get there but it was amazing!
				</p>
			</div>
			<Link href={"/addComment?id=" + props.id}><Button><img src="/Chat Bubble.svg"/>Leave a review</Button></Link>
		</div>)
	}
}
