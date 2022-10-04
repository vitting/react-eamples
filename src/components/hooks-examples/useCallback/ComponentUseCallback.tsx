import React, { useCallback, useState } from 'react'

function ComponentUseCallback() {
    // It works without useCallback 

  console.log('Component - Renders')

  const [id, setId] = useState('data1')

  const handleClick = useCallback(async () => {
    const response = await fetch(`./src/json/${id}.json`)
    const data = await response.json()
    console.log(data)
  }, [])
    
  return (
    <>
      <div>Fetch</div>
      <button onClick={() => setId('data1')}>Set Data 1</button>
      <button onClick={handleClick}>Get Data 1</button>
      <button onClick={() => setId('data2')}>Set Data 2</button>
      <button onClick={handleClick}>Get Data 2</button>
    </>
  )
}

export default ComponentUseCallback
