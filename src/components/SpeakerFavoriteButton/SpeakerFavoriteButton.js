import React from 'react'

const SpeakerFavoriteButton = ({isFavorite}) => (
    <div className={isFavorite ? 'heartredbutton' : 'heartdarkbutton'} >
        {isFavorite ? <img src='heart-red.png' /> : <img src='heart-dark.png' />}
    </div>
)
export default SpeakerFavoriteButton;