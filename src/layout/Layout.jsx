import React from 'react'
import Header from '../components/Header'
import Hotel from '../components/Hotel'
import Sidebar from '../components/Sidebar'
import './Layout.scss'

const Layout = () => {
  return (
    <div className='container'>
        <Header />

        <div className="content">
            <Sidebar />

            <Hotel />
        </div>
    </div>
  )
}

export default Layout