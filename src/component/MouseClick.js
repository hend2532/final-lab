import { useEffect, useState } from "react"

function MouseClick (){
    const [mouse,setMouse]=useState({x:0,y:0})
    const [click,setClick]=useState(0)
    useEffect(()=>{
        const handelMouse=(e)=>{
            setMouse({x:e.clientX,y:e.clientY})
        }
        window.addEventListener("mousemove",handelMouse)
    })
    return(
        <div className="mouse">
        <h2>x: {mouse.x} </h2>
        <h2> y : {mouse.y}</h2>
        <h2>Clicks : {click}</h2>
        <button className="add-btn" onClick={()=>setClick(prev=>prev+1)}>Clicked</button>
        </div>
    )
}
export default MouseClick