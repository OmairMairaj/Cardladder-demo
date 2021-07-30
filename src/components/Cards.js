import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="/images/img-9.jpg" text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label='Adventure' path="/categories"
                        />
                        <CardItem src="/images/img-2.jpg" text="Travel through the Islands of Bali in a Private Cruise"
                        label='Luxury' path="/categories"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="/images/img-3.jpg" text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                        label='Mystery' path="/categories"
                        />
                        <CardItem src="/images/img-4.jpg" text="Experience Football on top of the Himalayan Mountains"
                        label='Adventure' path="/categories"
                        />
                        <CardItem src="/images/img-8.jpg" text="Ride throught the Sahara Desert on a guided Camel Tour"
                        label='Adrenaline' path="/categories"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
