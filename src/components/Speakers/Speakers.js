import React, {useState, useEffect, useReducer} from 'react'
import axios from 'axios'
import withData from './withData'
import SpeakerSearchBar from '../SpeakerSearchBar/SpeakerSearchBar'
import Speaker from '../Speaker/Speaker'
import requestReducer, { REQUEST_STATUS } from '../../reducers/request';
import {
    GET_ALL_FAILURE,
    GET_ALL_SUCCESS,
    PUT_FAILURE,
    PUT_SUCCESS,
} from '../../actions/request';

const Speakers = () => {
    const onFavoriteToggleHandler = async(speakerRec) => {
        try {
            const toggledSpeakerRec = {
                ...speakerRec,
                isFavorite: !speakerRec.isFavorite,
            };
            await axios.put(`http://localhost:4000/speakers/${speakerRec.id}`, toggledSpeakerRec);

            dispatch({
                type: PUT_SUCCESS,
                record: toggledSpeakerRec,
            });
        } catch (e) {
            dispatch({
                type: PUT_FAILURE,
                error: e,
            });
        }
    };

    const [searchQuery, setSearchQuery] = useState('');

    const [{records: speakers, status, error}, dispatch] = useReducer(requestReducer, {
        records: [],
        status: REQUEST_STATUS.LOADING,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/speakers");
                dispatch({
                    records: response.data,
                    type: GET_ALL_SUCCESS,
                });
            } catch (e) {
                dispatch({
                    error: e,
                    type: GET_ALL_FAILURE,
                });
            }
        }
        fetchData();
    }, [status]);

    const success = status === REQUEST_STATUS.SUCCESS;
    const isLoading = status === REQUEST_STATUS.LOADING;
    const hasErrored = status === REQUEST_STATUS.ERROR;

    return (
        <div>
            <SpeakerSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            {isLoading && <div>Loading...</div>}
            {hasErrored && 
                <div>
                    Loading error...
                    <br />
                    <b>Error: {error.message}</b>
                </div>
            }
            {success && 
                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
                    {speakers.filter((rec) => {
                        const targetString = `${rec.firstName} ${rec.lastName}`.toLowerCase();
                        return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());
                    }).map((speaker) => (
                        <Speaker key={speaker.id} {...speaker} onFavoriteToggle={() => onFavoriteToggleHandler(speaker)}/>
                    ))}
                </div>
            }
        </div>
    );
};
export default Speakers;