import React from "react";

export default function button(props) {
	return <a href={props.href} type="button" className="button">{props.children}</a>;
}
