import React from "react";
import styles from "./Button.module.scss";

export default function button(props) {
	return <a type="button" className={styles.button}>{props.children}</a>;
}
