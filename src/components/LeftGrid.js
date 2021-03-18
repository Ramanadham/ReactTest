import React from "react";
import styled from "styled-components";
import RequestTitle from './RequestTitle';
import RequestDetails from './RequestDetails';
const Lgrid = styled("div")`
display: inline-block;
  width: 60%;  
`;
export default function LeftGrid(props) {
  return (
      <>
      <Lgrid>
           <RequestTitle title="Cancel / recall payment, GBP 1,000.00" 
           subTitle="1234567890123456 (GB), KUIML Business Company"/>           
           <RequestDetails />           
       </Lgrid>
      </>        
  );
}
