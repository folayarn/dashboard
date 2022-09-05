import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import Topbar from '../components/topbar/Topbar'

const Layout = () => {
  return (
    <div className='App'>
        
        <Topbar/>
        <div className="appcontainer">
        <Sidebar/>
        <div className='mainContent'>
            <Outlet/>
        </div>
        </div>

    </div>
  )
}

export default Layout