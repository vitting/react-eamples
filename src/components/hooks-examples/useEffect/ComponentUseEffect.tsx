import React, { useEffect, useState } from 'react'

function ComponentUseEffect() {
  const [counter, setCounter] = useState(0)
  const [anotherCounter, setAnotherCounter] = useState(0)
  // Watches for changes on component Mount
  useEffect(() => {
      console.log('COMPONENT IS MOUNTED')
      
      return 
  }, [])
    
  // Watches for changes when Counter state changes
  useEffect(() => {
      console.log('RUNS ON COUNTER CHANGE')
      
      // Cleanup runs before Effect
      return () => {
        console.log("CLEANUP COUNTER");
    }
  }, [counter])

  // Watches for all state changes
  useEffect(() => {
      console.log('RUNS ON ALL CHANGES')
  })

  return (
    <>
      <div>Counter: {counter}</div>
      <div>AnotherCounter: {anotherCounter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Increment Counter
      </button>
      <button onClick={() => setAnotherCounter((prev) => prev + 1)}>
        Increment Another Counter
      </button>
    </>
  )
}

export default ComponentUseEffect
