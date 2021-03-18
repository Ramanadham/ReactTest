import React from "react";
import styled from "styled-components";
import RequestControls from './RequestControls';
const Rgrid = styled("div")`
display: inline-block;
  width: 40%;  
`;

const LinkItem = styled("a")`
display:inline-block;
font-weight:bold;
padding-bottom: 18px;
cursor:pointer;
`;
const Agrid = styled("div")`
text-align:right;
padding-right: 24px;
`;
export default function RightGrid(props) {
  return (
      <>
      <Rgrid> 
           <RequestControls />
           <Agrid><LinkItem>Full Details <i className="fa fa-angle-down"></i></LinkItem></Agrid> 
      </Rgrid>
      </>        
  );
}
