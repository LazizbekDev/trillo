import React, { useState, useEffect } from 'react'
import LazyImage from 'react-lazy-blur-image'
import { RiMapPin2Fill, RiStarFill, RiStarHalfFill } from 'react-icons/ri'
import { BiChevronRight } from 'react-icons/bi'
import { HiArrowNarrowRight } from 'react-icons/hi'
import './Hotel.scss'

const Hotel = () => {
  const [photos, setPhotos] = useState(null);
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    const loadData = () => {
      fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=3')
        .then(toJson => toJson.json())
        .then((data) => setPhotos(data))
      fetch('https://jsonplaceholder.typicode.com/albums?_limit=8')
        .then(toJson => toJson.json())
        .then((data) => setTodos(data))
    }
    setLoading(false)

    loadData()
  }, [])

  return (
    <main className="hotel-view">
      <div className="gallery">
        {loading ? "Loading" : photos?.map(photo => (
          <figure className="gallery__item" key={photo.id}>
            <LazyImage
              placeholder={`https://source.unsplash.com/random/400x300?hotel&sig=${photo.id}`}
              uri={`https://source.unsplash.com/random/400x300?hotel&sig=${photo.id}`}
              render={(src, style) => <img src={src} alt="By Lazizbek" style={style} className="gallery__photo" />}
            />
          </figure>
        ))}
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

      <div className="details">
        <div className="description">
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quis dolorem saepe expedita officiis impedit, tenetur at, voluptatem tempora rerum deserunt qui quaerat consequatur possimus alias delectus placeat quasi nemo enim asperiores nobis quia.
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quis dolorem saepe expedita officiis impedit, tenetur at.
          </p>

          <ul className="list">
            {loading ? "Loading" : todos?.map(item => (
              <li className="list_item" key={item.id}>
                <BiChevronRight />{item.title}
              </li>
            ))}
          </ul>

          <div className="recommend">
            <p className="recomment_count">
              Lia and 8 other friends recommend this Hotel
            </p>
            <div className="recommend_friends">
              {[0, 1, 2, 3, 4].map(avatar => (
                <img src={`https://source.unsplash.com/random/100x100?woman,man&sig=${avatar}`} key={avatar} alt={'Lazizbek'} className="avatar" />
              ))}
            </div>
          </div>
        </div>

        <div className="user-review">
          <figure className="review">
            <blockquote className='review-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas explicabo asperiores molestias quasi dolorum. Dicta, illo atque ullam ad exercitationem facilis enim praesentium.
            </blockquote>

            <figcaption className="review-user">
              <img src="https://source.unsplash.com/random/100x100?face&sig=59" alt="Lazizbek" className='avatar' />

              <div className="review-user-box">
                <p className='user-name'>Jon Toshmatov</p>
                <p className='user-date'>Apr 22, 2023</p>
              </div>

              <div className="rating">8.4</div>
            </figcaption>
          </figure>
          <figure className="review">
            <blockquote className='review-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsam distinctio esse, commodi error inventore architecto similique aperiam!
            </blockquote>

            <figcaption className="review-user">
              <img src="https://source.unsplash.com/random/100x100?face&sig=648" alt="Lazizbek" className='avatar' />

              <div className="review-user-box">
                <p className='user-name'>Ulug'bek</p>
                <p className='user-date'>Sep 09, 2022</p>
              </div>

              <div className="rating">7.9</div>
            </figcaption>
          </figure>

          <button className='btn-inline'>Show all <HiArrowNarrowRight /></button>
        </div>

      </div>
      <div className="footer">
        <h2 className="last-words">Cursed to Israel</h2>

        <button className='btn'>
          <span className="btn_visible">destroy Israel</span>
          <span className="btn_invisible">Free Palestine</span>
        </button>
      </div>
    </main>
  )
}

export default Hotel