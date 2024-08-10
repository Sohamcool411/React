import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Card,Newfn} from './components/Card'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4" mb>React with Soham</h1>
      <Card userName='Soham' btnText='click me'/>
      <Card userName='Patil' btnText  = 'visit me'/>
    </>
  )
}

export default App
