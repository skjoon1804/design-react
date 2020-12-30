import React from 'react'
import SpeakerFavoriteButton from '../SpeakerFavoriteButton/SpeakerFavoriteButton'
import SpeakerImage from '../SpeakerImage/SpeakerImage'

const Speaker = (speaker) => (
    <div className="rounded overflow-hidden shadow-lg p-6" key={speaker.id}>
        <div className="grid grid-cols-4 mb-6">
            <div className="font-bold text-lg col-span-3">{`${speaker.firstName} ${speaker.lastName}`}</div>
            <div className="flex justify-end">
                <SpeakerFavoriteButton isFavorite={speaker.isFavorite}/>
            </div>
        </div>
        <div className="mb-6">
            <SpeakerImage id={speaker.id} firstName={speaker.firstName} lastName={speaker.lastName}/>
        </div>
        <div className="text-gray-600">{speaker.bio.substr(0, 70) + '...'}</div>
    </div>
);
export default Speaker;