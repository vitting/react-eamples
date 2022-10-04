import React from 'react'

interface Props {
  params: {
    color: string,
    borderColor: string
  }
}

function ChildCircle({ params: {color, borderColor} }: Props) {
  console.log('ChildCircle is RENDERING')
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: color,
        border: `5px solid ${borderColor}`,
        borderRadius: '50%',
      }}
    ></div>
  )
}

export default ChildCircle
