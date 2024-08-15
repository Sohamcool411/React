import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
//Layout or route file is made to make a layout of how the site will function by defining outlet.
//outlet is used where we want to keep the other components intact and create a base to do chnages.

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout