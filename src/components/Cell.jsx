import styled from "styled-components";

export default styled.div.attrs(({ column, row, color, type }) => ({
  style: {
    gridColumnStart: column + 1,
    gridRowStart: row + 1,
    backgroundColor: color,
  }
}))`
  width: 100%;
  height: 100%;
  border: 0.001rem black solid;
  transition: background-color 200ms cubic-bezier(0, 0.9, 0.7, 1);
`;
