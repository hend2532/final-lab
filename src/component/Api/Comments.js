import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardComment from './CardComment'

function Comments() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res=>{
            setData(res.data)
        }).catch(error=>{console.log(error)})
    },[])
  return (
    <div className='product'>
    {  data.map((el)=>{
        return(
            <CardComment key={el.id} comment={el}/>
        )
      })}
    </div>
  )
}

export default Comments
