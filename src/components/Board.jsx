import React, {useEffect} from "react";
import {connect} from "react-redux";

import { actions as boardActions } from "../ducks/match/board";

const Board = ({height, width, initializeBoard, cells}) => {
 
useEffect(() => initializeBoard(width, height), [height, width]);    

return(
<div className="board">
    {cells.map((c) => <div>
        <span>x: {c.x}</span>
        <span>y: {c.y}</span>
        <span>color: {c.color}</span>
    </div>)}
</div>
);
}

function mapDispatchToProps(dispatch){
    return {
        initializeBoard: (h, w) => dispatch(boardActions.initializeBoard(h, w)),
    };
}

function mapStateToProps(state) {
    return {
        cells: state.match.board.edges
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
