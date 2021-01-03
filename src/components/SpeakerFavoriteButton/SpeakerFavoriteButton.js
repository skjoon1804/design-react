import React from 'react'

const SpeakerFavoriteButton = ({isFavorite, onFavoriteToggle}) => {
    return (
        <div className={isFavorite ? 'heartredbutton' : 'heartdarkbutton'} onClick={onFavoriteToggle} >
            {isFavorite ? <img src='heart-red.png' /> : <img src='heart-dark.png' />}
        </div>
    );
}
export default SpeakerFavoriteButton;