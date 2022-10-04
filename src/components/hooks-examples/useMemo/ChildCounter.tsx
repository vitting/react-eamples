import React, { useMemo } from 'react'
interface Props {
  value: number,
  children: any
}

function ChildCounter({ value, children }: Props) {
  console.log(`${children} - ChildCounter is RENDERING`);
 
  return (
    <div>{children}: {value}</div>
  )
}
export default ChildCounter
