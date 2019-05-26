import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
  border: ${({ borderColor }) => borderColor} 0.1rem dotted;
`;
