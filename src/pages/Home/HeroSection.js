import React from 'react'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h3> Gold Label</h3>
            <p>Book your next event with us!</p>
        </div>
    )
}

export default HeroSection
