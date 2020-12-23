import React from 'react'

const Speakers = () => {
    const speakers = [
        {
            imageSrc : 'speaker-component-1124'
        },
        {
            imageSrc : 'speaker-component-1530'
        },
        {
            imageSrc : 'speaker-component-10803'
        }
    ];

    return (
        <div>
            {speakers.map((speaker) => {
                return <img src={`images/${speaker.imageSrc}.png`} key={speaker.imageSrc} />;
            })}
        </div>
    );
}
export default Speakers;