import React, { useEffect, useState } from 'react'

function Task4UseEffect() {
    const [count,setCount]=useState(0)
    useEffect(()=>{//life cycle step 2 (updating)
        document.title=`You clicked ${count} times`
        console.log(`updating counter ${count}`)
    })
  return (
    <div>
      <h2>Counter : {count}</h2>
      <button className="add-btn" onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    </div>
  )
}

export default Task4UseEffect
