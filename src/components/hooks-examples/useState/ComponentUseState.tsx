import React, { useMemo, useState } from 'react'
import ChildCircle from "./ChildCircle";
import ChildCounter from "./ChildCounter";

function ComponentAUseState() {
  const [counter, setCounter] = useState(0)
  const [color, setColor] = useState("red")
  console.log("**********************************************");
  console.log("ComponentUseState is RENDERING");

  return (
    <>
      <ChildCounter value={counter}></ChildCounter>
      <ChildCircle color={color}></ChildCircle>
      <button onClick={() => setCounter((prev) => prev + 1)}>Re-render</button>
      <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>Switch color</button>
      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('blue')}>Blue</button>
    </>
  )
}

export default ComponentAUseState