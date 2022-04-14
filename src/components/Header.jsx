import React from 'react'
import { BsBookmarksFill, BsSearch } from 'react-icons/bs'
import { AiOutlineWechat } from 'react-icons/ai'
import './Header.scss'
import logo from '../img/img.png'
import avatar from '../img/avatar.jpg'

const Header = () => {
  return (
    <header className="header">
            <img src={logo} alt="logo by Lazizbek" class="logo" />

            <form action="#" className="search">
                <input type="text" class="search__input" placeholder="Search hotels" />

                <button className="search__btn"><BsSearch /></button>
            </form>
            
            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <BsBookmarksFill size={'2rem'} />
                    <span>7</span>
                </div>
                <div className="user-nav__icon-box">
                    <AiOutlineWechat size={'3rem'} />
                    <span>12</span>
                </div>
                <div className="user-nav__user">
                    <img src={avatar} alt="user avatar lazizbek" class="user" />
                    <span className="user-nov__user-name">Lazizbek</span>
                </div>
            </nav>
        </header>
  )
}

export default Header