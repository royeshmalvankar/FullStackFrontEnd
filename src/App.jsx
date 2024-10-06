import { useState } from 'react'
import './App.css'
import Allroute from './allroute/Allroute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Allroute/>
    </>
  )
}

export default App
