import React from 'react'
import {RiHotelFill, RiFlightLandFill, RiMap2Fill} from 'react-icons/ri'
import {MdCarRental} from 'react-icons/md'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <a href="#" className="side-nav__link">
            <RiHotelFill size={'2rem'} />
            <span>Hotel</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <RiFlightLandFill size={'2rem'} />
            <span>Flight</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <MdCarRental size='2rem' />
            <span>Car rental</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <RiMap2Fill size='2rem' />
            <span>Tours</span>
          </a>
        </li>
      </ul>

      <div className="copy-right">
        &copy; 2017 by Trillo. All rights reserved
        <div>Learner
          <a href="github.com/lazizbekdev">LazizbekDev</a>
          &reg; 2021
        </div>
      </div>
    </nav>
  )
}

export default Sidebar