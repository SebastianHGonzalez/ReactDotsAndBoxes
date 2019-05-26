import { connect } from "react-redux";
import styled from "styled-components";

import { selectors } from "ducks";
import { colorForPlayerBackground } from "utils/colors";

const TurnIndicator = styled.div.attrs(({ playerColor }) => ({
  style: {
    backgroundColor: playerColor
  }
}))`
  width: 100%;
  height: 100%;
  transition: background-color 300ms cubic-bezier(0, 0.5, 0.5, 1);
  display: grid;
  grid-template-rows: 2rem 1fr 2rem;
  gap: 0.2rem;
  `;

const mapStateToProps = state => ({
  playerColor: colorForPlayerBackground(selectors.currentPlayerSelector(state))
});

export default connect(mapStateToProps)(TurnIndicator);
