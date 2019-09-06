import { ILight } from './ILight'
import { GameStatus } from './gameStatusEnum'

export interface LightsOutStates {
  lights: ILight[]
  gameStatus: GameStatus
}
