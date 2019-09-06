import { ILight } from '../ILight'

export interface LightProps {
  light: ILight
  onLightClick: (light: ILight) => void
}
