import React from 'react'

const SpeakerImage = ({id, firstName, lastName}) => (
    <img
        src={`/speakers/speaker-${id}.jpg`}
        alt={`${firstName} ${lastName}`}
    />
)
export default SpeakerImage;