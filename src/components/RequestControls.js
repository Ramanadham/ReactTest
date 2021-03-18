import React from "react";
import styled from "styled-components";
import Button from "./Button";
const DetailsListB = styled("ul")`
	list-style: none;
	padding-bottom: 38px;
	padding-left: 0;
	padding-top: 15px;
	margin: 0;
	text-align: right;
`;
const ListitemR = styled("li")`
	display: inline-block;
	padding-left: 0;
	padding-right: 24px;
`;

const ItemB = styled("div")`
	display: inline-block;
	position: relative;
`;
const Icon = styled("span")`
	:after {
		content: "";
		display: block;
		height: 32px;
		width: 1px;
		background-color: #111;
		position: absolute;
		right: 0;
		top: -6px;
		left: 26px;
	}
`;
export default function RequestControls(props) {
	return (
		<>
			<DetailsListB>
				<ListitemR>
					<ItemB>
						<i className="fa fa-file-pdf-o"></i>
						<Icon></Icon>
					</ItemB>
				</ListitemR>
				<ListitemR>
					<ItemB>
						<i className="fa fa-file"></i>
					</ItemB>
				</ListitemR>
				<ListitemR>
					<Button labelName="Reject" type="secondary" />
				</ListitemR>
				<ListitemR>
					<Button labelName="Authorise" type="primary" />
				</ListitemR>
			</DetailsListB>
		</>
	);
}
