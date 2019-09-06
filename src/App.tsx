import React from 'react'
import './App.css'
import LightsOut from './components/LightsOut/LightsOut'

const App: React.FC = () => {
  return (
    <div className='App'>
      <LightsOut matrixRowsLength={5} matrixColumnsLength={5} />
    </div>
  )
}

export default App
