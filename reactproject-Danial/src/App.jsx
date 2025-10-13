import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tile from './components/Tile.jsx'
import Card from './components/Card.jsx'
import TodoList from './components/TodoList.jsx'
import MyCounter2 from './components/MyCounter2.jsx'
import MyCounter3 from './components/MyCounter3.jsx'

function App() {
  const [count, setCount] = useState(5)

  return (
    <>
           <TodoList />

   
      
      
    </>
  )
}

export default App