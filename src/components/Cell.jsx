import styled from "styled-components";

export default styled.div.attrs(({ column, row, color, type }) => ({
  style: {
    gridColumnStart: column + 1,
    gridRowStart: row + 1,
    backgroundColor: color,
    borderColor: type === "cell" ? "red" : "gray"
  }
}))`
  width: 100%;
  height: 100%;
  border: 0.1rem dotted;
`;
