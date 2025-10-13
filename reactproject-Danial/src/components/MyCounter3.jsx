import { useState } from 'react'

function MyCounter3() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-red-500 p-4 rounded-md text-white text-center my-4">
      <h3>MyCounter3</h3>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default MyCounter3
