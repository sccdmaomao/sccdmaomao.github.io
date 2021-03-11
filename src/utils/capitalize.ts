const capitalize: (original: string) => string = original =>
    `${original[0].toUpperCase() + original.slice(1)}`

export default capitalize
