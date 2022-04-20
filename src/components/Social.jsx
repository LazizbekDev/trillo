import React from 'react'
import Button from './button/Button'
import "./Social.scss"

const Social = ({name = "Lazizbek", to = "/", desc}) => {
  return (
    <div className='profile'>
        <h4>{name}</h4>
        <p>{desc}</p>
        <Button
            typeBtn={'link'}
            defaultText="See Profile"
            visible={"Let's go"}
            to={to}
        />
    </div>
  )
}

export default Social