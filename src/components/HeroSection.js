import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
            <h1>TRADING CARDS</h1>            
            <p>New sets from your favourite series.</p>
            <div className="hero-btns">
                <Button to='/shop' className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    View Cards
                </Button>
                <Button to='/sign-up' className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Sign in for Premium <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
