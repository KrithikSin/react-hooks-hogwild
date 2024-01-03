import React, { useState } from 'react';
import Nav from './Nav';
import RenderHogs from './RenderHogs.js';
import FilterGreased from './FilterGreased.js';
import SortBy from './SortBy.js';

import hogs from '../porkers_data';
console.log(hogs);

function App() {
    const [pigs, setPigs] = useState(hogs);

    function filterGreased(isClicked) {
        if (isClicked) {
            const filteredHogs = pigs.filter((pig) => pig.greased);
            setPigs(filteredHogs);
        } else {
            setPigs(hogs);
        }
    }

    function sortHogs(sortBy) {
        const sortedHogs = [...pigs];
        sortedHogs.sort((hogA, hogB) => {
            if (sortBy === 'name') {
                return hogA.name.localeCompare(hogB.name);
            } else {
                return hogA.weight - hogB.weight;
            }
        });
        setPigs(sortedHogs);
    }

    return (
        <div className='App'>
            <Nav />
            <SortBy hogs={pigs} sortHogs={sortHogs} />
            <FilterGreased hogs={pigs} filterGreased={filterGreased} />
            <RenderHogs hogs={pigs} />
        </div>
    );
}

export default App;
