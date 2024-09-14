import React, { useEffect, useState } from 'react'

function Task6Counter() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        const timer=setInterval(()=>{
            setCount((prev)=>prev+1)
        },1000)
        return ()=>clearInterval(timer)
    })
  return (
    <div>
      <h2>{count}</h2>
    </div>
  )
}

export default Task6Counter
