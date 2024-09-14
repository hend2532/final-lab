import React,{useState,useEffect} from 'react'

function Task7Resize() {
    const [resize,setResize]=useState(window.innerWidth)
    useEffect(()=>{
        const Resize=()=>{
            setResize(window.innerWidth)
        }
        window.addEventListener('resize',Resize)
        return ()=>window.removeEventListener('resize',Resize)
    },[])
  return (
    <div>
      <h2>Width : {resize}</h2>
    </div>
  )
}

export default Task7Resize
