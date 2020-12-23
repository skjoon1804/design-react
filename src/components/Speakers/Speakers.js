import React from 'react'
import withData from './withData'

const Speakers = ({speakers}) => {
    return (
        <div>
            {speakers.map(({imageSrc, name}) => {
                return <img src={`/images/${imageSrc}.png`} key={imageSrc} alt={name}/>;
            })} 
        </div>
    );
};
const maxSpeakersToShow = 3;
export default withData(maxSpeakersToShow)(Speakers);