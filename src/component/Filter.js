import React from 'react'
import ReactStars from 'react-rating-stars-component'

export default function Filter({ setRate, setText }) {
    return (
        <div className='filter'>
            <h3> search by name</h3>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <h3> search by rating </h3>
            <ReactStars
                count={5}
                onChange={(newRating) => setRate(newRating)}
                size={24}
                activeColor="#ffd700"
            />
        </div>
    )
}
