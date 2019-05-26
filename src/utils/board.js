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
