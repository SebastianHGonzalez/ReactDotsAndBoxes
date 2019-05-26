export const NO_COLOR = "transparent";

export const COLORS = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple"
];

export function colorForPlayer(playerId) {
    return COLORS[playerId % COLORS.length]
}