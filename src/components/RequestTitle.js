import React from "react";
import styled from "styled-components";
const Heading = styled("div")`
	font-size: 18px;
	font-weight: bold;
	padding-top: 17px;
	padding-bottom: 11px;
	padding-right: 20px;
`;
const SubHeading = styled("div")`
	font-size: 12px;
	font-weight: bold;
	padding-bottom: 20px;
	padding-right: 20px;
`;
export default function RequestTitle(props) {
	return (
		<>
			<Heading>{props.title}</Heading>
			<SubHeading>{props.subTitle}</SubHeading>
		</>
	);
}
