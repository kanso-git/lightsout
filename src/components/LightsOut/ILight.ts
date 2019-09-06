import { LightStatus } from './lightStatusEnum'
export interface ILight {
  readonly id: number
  readonly x: number
  readonly y: number
  status: boolean
}
