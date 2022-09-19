import React from "react";
import styles from "./Button.module.scss";

const button = React.forwardRef((props, ref) => {
	  return (
	    <a type="button" className={styles.button} href={props.href} onClick={props.onClick} ref={ref}>
	    	{props.children}
	    </a>
	  )
	})


export default button;