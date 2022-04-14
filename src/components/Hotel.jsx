import React from 'react'
import {RiMapPin2Fill, RiStarFill, RiStarHalfFill} from 'react-icons/ri'
import './Hotel.scss'

const Hotel = () => {
  return (
    <main className="hotel-view">
                <div className="gallery">
                    <figure className="gallery__item">
                        <img src="https://source.unsplash.com/random?sig=7" alt="By Lazizbek" className="gallery__photo" />
                    </figure>
                    <figure className="gallery__item">
                        <img src="https://source.unsplash.com/random?sig=123" alt="By LazizbekDev" className="gallery__photo" />
                    </figure>
                    <figure className="gallery__item">
                        <img src="https://source.unsplash.com/random?sig=12" alt="By LazizbekDev" className="gallery__photo" />
                    </figure>
                </div>

                <div className="overview">
                    <h1 className="overview__heading">Hotel les palmas</h1>

                    <div className="overview__stars">
                      <RiStarFill size='2rem' />
                      <RiStarFill size='2rem' />
                      <RiStarFill size='2rem' />
                      <RiStarFill size='2rem' />
                      <RiStarHalfFill size='2rem' />
                    </div>

                    <div className="overview__location">
                        <RiMapPin2Fill size='2rem' />
                        <button className="btn-inline">Uzbekistan, Andijon</button>
                    </div>

                    <div className="overview__rating">
                        <div className="overview__rating-num">9.6</div>
                        <div className="overview__rating-count">896 votes</div>
                    </div>
                </div>
            </main>
  )
}

export default Hotel