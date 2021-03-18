import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	const activeStyle = { color: "#F15B2A" };
	return (
		<div>
			<NavLink to="/" activeStyle={activeStyle} exact>
				Home
			</NavLink>
			{" | "}
			<NavLink to="/card" activeStyle={activeStyle}>
				Card
			</NavLink>
			{" | "}
			<NavLink to="/loadash" activeStyle={activeStyle}>
				Loadash
			</NavLink>
		</div>
	);
};

export default Header;
