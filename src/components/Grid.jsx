import styled from "styled-components";

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns:
    repeat(${({ columns }) => Math.floor(columns / 2)}, 1fr 2fr)
    1fr;
  grid-template-rows:
    repeat(${({ rows }) => Math.floor(rows / 2)}, 1fr 2fr)
    1fr;
  place-items: center center;
`;

export default Grid;
