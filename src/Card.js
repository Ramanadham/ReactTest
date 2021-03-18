import React from "react";
import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import LeftGrid from "./components/LeftGrid";
import RightGrid from "./components/RightGrid";
const _ = require("lodash");

const CardContainer = styled("div")`
	width: 80%;
	margin: 0 auto;
	padding: 0;
	border-top: 1px solid #111;
	border-bottom: 1px solid #111;
`;

export default function Card() {
	return (
		<CardContainer>
			<LeftGrid />
			<RightGrid />
		</CardContainer>
	);
}
