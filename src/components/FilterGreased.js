import React, { useState } from 'react';

function FilterGreased({ filterGreased }) {
    const [isClicked, setIsClicked] = useState(true);
    // if the button is not clicked dont show greased and if it then show it
    // if the button is not clicked dont run the filterGreased function, and run it if it is clicked
    function filteredGreased() {
        setIsClicked(!isClicked);

        filterGreased(isClicked);
    }

    return (
        <div>
            <button onClick={filteredGreased}>
                {isClicked ? 'Show Greased' : 'Dont Show Greased'}
            </button>
        </div>
    );
}

export default FilterGreased;
