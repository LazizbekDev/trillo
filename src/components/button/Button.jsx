import React from 'react'
import './Button.scss'

const Button = ({ defaultText, visible, typeBtn, to }) => {
    return (
        <>
            {typeBtn === 'link' ? (
                <a href={to} target="_blank" rel="noreferrer" className='btn'>
                    <span className="btn_visible">{defaultText}</span>
                    <span className="btn_invisible">{visible}</span>
                </a>
            ) : (
                <button className='btn'>
                    <span className="btn_visible">{defaultText}</span>
                    <span className="btn_invisible">{visible}</span>
                </button>
            )}
        </>
    )
}

export default Button