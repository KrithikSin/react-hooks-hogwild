import React, { useState } from 'react';

function PigTile({
    name,
    image,
    specialty,
    weight,
    greased,
    'highest medal achieved': medal,
}) {
    const [isClicked, setIsClicked] = useState(false);
    function handleClick() {
        setIsClicked(!isClicked);
    }

    return (
        <div onClick={handleClick} className='pigTile'>
            <h3>Name: {name}</h3>
            <img src={image} alt={name} className='minPigTile maxPigTile' />
            {isClicked ? (
                <div>
                    <p>Specialty: {specialty}</p>
                    <p>Weight: {weight}lbs </p>
                    <p>{greased ? 'Greased' : 'Not Greased'}</p>
                    <p>Highest Medal Achieved: {medal}</p>
                </div>
            ) : null}
        </div>
    );
}

export default PigTile;
