import { colorForPlayer } from "./colors";

export function BoardElement(type, x, y, color) {
  return {
    type,
    x,
    y,
    color
  };
}

export function adjacentPositions(x, y) {
  return [
    {x, y: y + 1},
    {x, y: y - 1},
    {x: x + 1, y},
    {x: x - 1, y},
  ]
}

export function playerScore(player, cells) {
  return cells.filter(cell => cell.color === colorForPlayer(player)).length
}
