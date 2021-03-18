import React from "react";
import styled from "styled-components";
const DetailsList = styled("ul")`
	list-style: none;
	padding-bottom: 18px;
	padding-left: 0;
	padding-right: 20px;
	margin: 0;
`;
const Listitem = styled("li")`
	display: inline-block;
	border-left: 2px solid #111;
	padding-left: 12px;
	padding-right: 24px;
`;
const ItemH = styled("div")`
	color: gray;
`;
const ItemB = styled("div")`
	display: inline-block;
`;
const Icon = styled("i")`
	padding-right: 12px;
	color: #e85c32;
`;
export default function RequestDetails(props) {
	return (
		<>
			<DetailsList>
				<Listitem>
					<ItemH>Request reference</ItemH>
					<ItemB>SET29383ABCH</ItemB>
				</Listitem>
				<Listitem>
					<ItemH>Request reference</ItemH>
					<ItemB>Payment</ItemB>
				</Listitem>
				<Listitem>
					<ItemH>Request reference</ItemH>
					<ItemB>
						<Icon className="fa fa-exclamation-circle"></Icon>Pending
						authorisation
					</ItemB>
				</Listitem>
			</DetailsList>
		</>
	);
}
