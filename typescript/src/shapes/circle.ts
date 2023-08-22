function circle(radius: number): Shape {
    return {
        radius,
        computeArea: function (): number {
            return Math.PI * radius * radius
        }
    }
}

export { circle }
