import './Light.css'
import React from 'react'
import { LightProps } from './lightProps'

const Light = (props: LightProps) => {
  const handleClick = () => {
    props.onLightClick(props.light)
  }
  return (
    <div
      className={`Light ${props.light.status ? ' Light-on' : ''}`}
      onClick={handleClick}
    >
      <span>{`(X:${props.light.x},Y:${props.light.y})`}</span>
    </div>
  )
}

export default Light
