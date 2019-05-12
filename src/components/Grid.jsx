import styled from "styled-components"; 

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(${({columns}) => columns}, 1fr);
grid-template-rows: repeat(${({rows}) => rows}, 1fr);
place-items: center center;
`

export default Grid;
