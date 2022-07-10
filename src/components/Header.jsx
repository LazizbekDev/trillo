import React from 'react'
import { BsBookmarksFill, BsSearch } from 'react-icons/bs'
import { AiOutlineWechat } from 'react-icons/ai'
import './Header.scss'
import logo from '../img/img.png'

const Header = () => {
    const share = async ( title, text, url ) => {
        try {
            await navigator.share({ title: title, text: text, url: url })
            console.log('o\'zbekiston')
        } catch (err) {
            console.log('err: ', err)
        }
    }

    return (
        <header className="header">
            <img src={logo} alt="logo by Lazizbek" className="logo" />

            <form action="#" className="search">
                <input type="text" className="search__input" placeholder="Search hotels" />

                <button className="search__btn"><BsSearch /></button>
            </form>

            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <BsBookmarksFill size={'2rem'} />
                    <span>{Math.floor(Math.random() * (2 - 16) + 16)}</span>
                </div>
                <div className="user-nav__icon-box">
                    <AiOutlineWechat size={'3rem'} />
                    <span>{Math.floor(Math.random() * (79 - 42) + 42)}</span>
                </div>
                <div className="user-nav__user" onClick={() => share('Share with your fiends', 'LazizbekDevs portfolio', "https://laziz-dev.netlify.app")}>
                    <img src={'https://source.unsplash.com/random/300x300?person,girl,boy,uzbekistan&sig=45'} alt="user avatar lazizbek" className="user" />
                    <span className="user-nov__user-name">Kim Dir</span>
                </div>
            </nav>
        </header>
    )
}

export default Header