import React, { useEffect, useState } from 'react'

function Task5UserName() {
  const [name,setName]=useState("") 
  const [greet,setGreeting]=useState("") 
  useEffect(()=>{
    name? setGreeting(`See you later ${name} in My Website! 👋`): setGreeting("")
  },[name])
  return (
    <form className=' w-96 rounded-md'>
      <br/><br/>
        <label>Name : </label>
        <input type="text" placeholder='name...' value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/><br/><h2 className='max-w-96'>{greet}</h2>
    </form>
  )
}

export default Task5UserName
