import React from 'react';
import './Heading.css'

const Heading = () => {
    return (
        <div>
            <h3 className='heading mt-3 fw-bold fs-2'>Welcome to The <span className='brand'>CoctailDB</span> </h3>
            <input className="search-field mt-3" type="text" placeholder="Search drink.." />
            <button className='search-btn'>Search</button>
        </div>
    );
};

export default Heading;