import React from 'react'

// Style
import '../App.css'

// Image
import Image from '../img/banner/banner.jpg'

export default function Banner() {
    return (
        <div className="bannerDiv">
            <img src={ Image } alt="Banner" />
        </div>
    )
}
