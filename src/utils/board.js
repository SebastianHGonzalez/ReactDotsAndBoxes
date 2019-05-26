import { colorForPlayer } from "./colors";

export function idForCoords(x, y) {
  return `${x}-${y}`
}

export function BoardElement(type, x, y, color) {
  return {
    get id () {return idForCoords(x, y)},
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

export function playerScore(player, coloredCells) {
  return (coloredCells[colorForPlayer(player)] || []).length
}
