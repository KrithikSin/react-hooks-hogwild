import React from 'react';
import PigTile from './PigTile';
function RenderHogs({ hogs }) {
    return (
        <div className='ui grid container'>
            {hogs.map((hog) => (
                <PigTile key={hog.image} {...hog} />
            ))}
        </div>
    );
}

export default RenderHogs;
