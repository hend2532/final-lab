import React, { useContext } from 'react'
import {Context} from "./One"
function Five() {
    const name=useContext(Context);
  return (
    <div className='five'>
      <h2>Five</h2>
        <p><span>Name : {name}</span></p>
    </div>
  )
}

export default Five
