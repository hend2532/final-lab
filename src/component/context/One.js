import React, { createContext } from 'react'
import Two from './Two'

export const Context=createContext()
export default function One() {

  return (
    <div className='one'>
        <Context.Provider value="Hend">
          <h2>One</h2>
          <Two />
        </Context.Provider>
    </div>
  )
}


