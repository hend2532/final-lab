import React from 'react'
import { Link } from 'react-router-dom'
import Task6Counter from './Task6Counter'

function Navbar() {
  return (
    <header>
      <Link to="/Products" >Products</Link>
      <Link to="/Comments" >Comments</Link>
      <Link to="/Search" >Search</Link>
      <Link to="/context" >Context</Link>
      <Task6Counter/>
      <Link to="/logout" >Logout</Link>
    </header>
  )
}

export default Navbar
