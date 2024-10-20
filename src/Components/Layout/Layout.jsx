import React from 'react'
import {Navbar,Footer} from "../index"
const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className="">{children}</div>
        <Footer/>
    </div>
  )
}

export default Layout