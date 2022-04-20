import React from 'react'
import {RiHotelFill} from 'react-icons/ri'
import {FaConnectdevelop} from 'react-icons/fa'
import {BsInstagram, BsTelegram} from 'react-icons/bs'
import './Sidebar.scss'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <NavLink to="/" className={(navData) => navData.isActive ? "actived side-nav__link" : "side-nav__link"}>
            <RiHotelFill size={'2rem'} />
            <span>home</span>
          </NavLink>
        </li>
        <li className="side-nav__item">
          <NavLink to="/insta" className={(navData) => navData.isActive ? "actived side-nav__link" : "side-nav__link"}>
            <BsInstagram size={'2rem'} />
            <span>Instagram</span>
          </NavLink>
        </li>
        <li className="side-nav__item">
          <NavLink to="/telegram" className={(navData) => navData.isActive ? "actived side-nav__link" : "side-nav__link"}>
            <BsTelegram size='2rem' />
            <span>Telegram</span>
          </NavLink>
        </li>
        <li className="side-nav__item">
          <NavLink to="/resume" className={(navData) => navData.isActive ? "actived side-nav__link" : "side-nav__link"}>
            <FaConnectdevelop size='2rem' />
            <span>resume</span>
          </NavLink>
        </li>
      </ul>

      <div className="copy-right">
        &copy; 2017 by Trillo. All rights reserved
        <div>Learner
          <a href="https://github.com/lazizbekdev"> LazizbekDev </a>
          &reg; 2021
        </div>
      </div>
    </nav>
  )
}

export default Sidebar