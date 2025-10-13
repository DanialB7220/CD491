import { useState } from 'react'

function MyCounter2() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>MyCounter2</h3>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default MyCounter2
