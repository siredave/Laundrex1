import React from 'react'
import {Outlet} from 'react-router-dom'
import NavbarDashboard from '../Dashboard/NavbarDashboard'
import Aside from './Aside'
const Layout = () => {
  return (
    <>
    <div>
    <NavbarDashboard/>
    <div className='flex justify-start'>
    <Aside/>
    <div className=' w-[100%] ml-[305px] pt-[110px]'>
    <Outlet/>
    </div>
    </div>
    </div>

    </>
  )
}

export default Layout
