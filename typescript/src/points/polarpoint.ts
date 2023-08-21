interface PolarPoint {
    len: number,
    angle: number,
    computeX: () => number
    computeY: () => number
}

function newPolarPoint (len: number, angle: number): PolarPoint {
    return {
        len,
        angle,

        computeX: function (): number {
            return Math.round(len * Math.cos(angle))
        },

        computeY: function (): number {
            return Math.round(len * Math.sin(angle))
        }
    }
}

export { PolarPoint, newPolarPoint }