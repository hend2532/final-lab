import React, { createContext } from 'react'
import Two from './Two'
import Navbar from '../Navbar'
import Footer from '../Footer'

export const Context=createContext()
export default function One() {

  return (
    <>
    <Navbar/>
    <div className='one'>
        <Context.Provider value="Hend">
          <h2>One</h2>
          <Two />
        </Context.Provider>
    </div>
    <Footer/>
    </>
  )
}


