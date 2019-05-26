export const NO_COLOR = "transparent";

function rgba(r,g,b,a) {
    return `rgba(${r},${g},${b},${a})`
}

export const COLORS = [
    rgba.bind(undefined, 255, 0, 0),
    rgba.bind(undefined, 0, 0, 255),
    rgba.bind(undefined, 0, 255, 0),
    rgba.bind(undefined, 255, 165, 0),
    rgba.bind(undefined, 128, 0, 128),
];

export function colorForPlayer(playerId) {
    return COLORS[playerId % COLORS.length](0.9)
}

export function colorForPlayerBackground(playerId) {
    return COLORS[playerId % COLORS.length](0.1)
}