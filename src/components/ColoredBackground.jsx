import React from "react";
import styled from "styled-components";

const ColoredDiv = styled.div`
width: 100px;
height: 100px;
background-color: ${({ color }) => color};
`;

export default ({children}) => <ColoredDiv color="red" >{children}</ColoredDiv>
