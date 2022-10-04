import React, { useCallback, useMemo, useState } from 'react'
import ChildCircle from './ChildCircle'
import ChildCounter from './ChildCounter'

function ComponentUseMemo() {
  const [counter, setCounter] = useState(0)
  const [color, setColor] = useState('red')
  const [colorSettings, setColorSettings] = useState({
    color: 'red',
    borderColor: 'black',
  })
  const [borderColor, setBorderColor] = useState('black')
  
  console.log('**********************************************')

  console.log('ComponentUseMemo is RENDERING')

  //useMemo is for calculations or if you want to work with object
  const colorParam = useMemo(() => {
    return { color, borderColor }
  }, [color, borderColor])

  return (
    <>
      <ChildCounter value={counter}>Render</ChildCounter>
      <button onClick={() => setCounter((prev) => prev + 1)}>Re-render</button>
      <ChildCircle params={colorSettings}></ChildCircle>
      <button
        onClick={() =>
          setColorSettings({ color: 'red', borderColor: 'darkred' })
        }
      >
        Red Params
      </button>
      <button
        onClick={() =>
          setColorSettings({ color: 'lightblue', borderColor: 'blue' })
        }
      >
        Blue Params
      </button>
      <ChildCircle params={colorParam}></ChildCircle>
      <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>
        Switch color
      </button>
      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('blue')}>Blue</button>
    </>
  )
}

export default ComponentUseMemo
