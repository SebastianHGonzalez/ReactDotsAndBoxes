import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: ${({ column }) => column + 1 };
  grid-row-start: ${({ row }) => row + 1};
`;
