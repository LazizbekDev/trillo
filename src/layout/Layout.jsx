import React from 'react'
import Header from '../components/Header'
import Hotel from '../components/Hotel'
import Sidebar from '../components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Social from '../components/Social'
import { BsInstagram, BsTelegram } from 'react-icons/bs'
import {FaConnectdevelop} from 'react-icons/fa'
import './Layout.scss'

const Layout = () => {
  return (
    <div className='container'>
      <Header />

      <div className="content">
        <Sidebar />

        <Routes>
          <Route activeClass='active' path='/' element={<Hotel />} />
          <Route path='/insta' element={
            <Social
              name={<BsInstagram size='15rem' />}
              desc="My instagram profile, i'm @mern.me"
              to="https://instagram.com/mern.me"
            />}
          />
          <Route path='/telegram' element={
            <Social
              name={<BsTelegram size='15rem' color='#0088cc' />}
              desc="My telegram profile, i'm @mernme"
              to="https://t.me/mernme"
            />}
          />
          <Route path='/resume' element={
            <Social
              name={<FaConnectdevelop size='15rem' />}
              desc="My Portfolio website, https://laziz-dev.netlify.app"
              to="https://laziz-dev.netlify.app"
            />}
          />
          <Route path='*' element={<Hotel />} />
        </Routes>
      </div>
    </div>
  )
}

export default Layout