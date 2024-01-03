import React, { useState } from 'react';

function SortBy({ sortHogs }) {
    const [sortBy, setSortBy] = useState('name');

    function handleChange(e) {
        setSortBy(e.target.value);
        console.log(e.target.value);
        sortHogs(e.target.value);
    }

    return (
        <select value={sortBy} onChange={handleChange}>
            <option value='name'>Sort By Name</option>
            <option value='weight'>Sort By Weight</option>
        </select>
    );
}

export default SortBy;
