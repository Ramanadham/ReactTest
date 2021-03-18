import React from "react";
import styled from "styled-components";
const ButtonPrimary = styled("a")`
padding: 14px 20px;
background: #3d613d;
color: #fff;
font-weight: bold;
cursor: pointer;
display:inline-block;
`;
const ButtonSecondary = styled("a")`
display:inline-block;
padding: 14px 20px;
background: #FFF;
color: #111;
font-weight: bold;
cursor: pointer;
border:1px solid #111;
`;
export default function Button(props) {
  return (
      <>
      {props.type == "primary" && <ButtonPrimary>{props.labelName}</ButtonPrimary>}
      {props.type == "secondary" && <ButtonSecondary>{props.labelName}</ButtonSecondary>}
      </>        
  );
}
