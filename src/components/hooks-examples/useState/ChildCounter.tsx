import React from 'react'
interface Props {
  value: number
}

function ChildCounter({ value }: Props) {
    console.log("ChildCounter is RENDERING");
  return <div>Render: {value}</div>
}

export default ChildCounter
