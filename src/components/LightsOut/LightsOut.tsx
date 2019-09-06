import './LightsOut.css'
import React, { Component } from 'react'
import Light from './Light/Light'
import { LightsOutProps } from './lightsOutProps'
import { ILight } from './ILight'
import { LightsOutStates } from './lightsOutStates'
import { generateMatrix } from './helper'
import { GameStatus } from './gameStatusEnum'

export default class LightsOut extends Component<
  LightsOutProps,
  LightsOutStates
> {
  state = {
    lights: generateMatrix(
      this.props.matrixRowsLength,
      this.props.matrixColumnsLength
    ),
    gameStatus: GameStatus.RUNING
  }
  onLightClick = (light: ILight): void => {
    const { x, y } = light
    const { lights } = this.state
    const lightsCopy = [...lights]
    console.log(lights)
    //x=3 2 3 4
    const x0 = x - 1
    const x1 = x + 1
    const y0 = y - 1
    const y1 = y + 1

    for (let i = x0; i <= x1; i++) {
      for (let j = y0; j <= y1; j++) {
        const _light = lightsCopy.find(
          l => l.x === i && l.y === j && (l.x === x || l.y === y)
        )
        if (_light) {
          _light.status = !_light.status
          lightsCopy.splice(_light.id, 1, _light)
        }
      }
    }
    const isOff = lightsCopy.findIndex(l => l.status)
    this.setState({
      lights: lightsCopy,
      gameStatus: isOff === -1 ? GameStatus.COMPLETED : GameStatus.RUNING
    })
  }
  render() {
    const { lights, gameStatus } = this.state
    const lightsCopy = [...lights]
    let lights2d: ILight[][] = []
    while (lightsCopy.length > 0) {
      lights2d.push(lightsCopy.splice(0, this.props.matrixColumnsLength))
    }

    const newlights2d = lights2d.map((v, i) => {
      return (
        <tr key={`tr-${i}`}>
          {v.map(light => (
            <td key={`dr-${light.id}`}>
              <Light light={light} onLightClick={this.onLightClick} />
            </td>
          ))}
        </tr>
      )
    })

    return (
      <div>
        {gameStatus === GameStatus.COMPLETED ? (
          <div className='LightsOut-title'>
            <div className='neon-orange'>You</div>
            <div className='neon-blue'>Won</div>
          </div>
        ) : (
          <React.Fragment>
            <div className='LightsOut-title'>
              <div className='neon-orange'>Lights</div>
              <div className='neon-blue'>Out</div>
            </div>
            <table className='LightsOut'>
              <tbody>{newlights2d.flat()}</tbody>
            </table>
          </React.Fragment>
        )}
      </div>
    )
  }
}
