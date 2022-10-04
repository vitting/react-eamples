import React from 'react'

interface Props {
  color: string
}

function ChildCircle({ color }: Props) {
  console.log('ChildCircle is RENDERING')
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: color,
        borderRadius: '50%',
      }}
    ></div>
  )
}

export default ChildCircle
