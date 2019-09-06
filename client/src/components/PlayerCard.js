import React from 'react';
import '../styles/PlayerCard.scss';

const PlayerCard = props => {

    return (
        <div className='player-card'>
            <h1>{props.name}</h1>
            <h2>{props.country}</h2>
        </div>
    );
};

export default PlayerCard;