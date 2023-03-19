import pfp from '../assets/images/pfp.jpg'
import React from 'react'

export default function Picture() {
    return (
        <img src={pfp} alt="Me, smiling at the camera" className='card__info--pfp'/>
    )
}