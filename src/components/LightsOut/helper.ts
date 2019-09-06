import { ILight } from './ILight'

export const generateMatrix = (rows: number, cols: number): ILight[] => {
  let matrix: ILight[] = []
  const indexOn = Math.floor(Math.random() * rows * cols) + 1
  let index = 0
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      matrix.push({
        id: index,
        x: i,
        y: j,
        status: index === indexOn ? true : false
      })
      index++
    }
  }

  return matrix
}
