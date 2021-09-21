import React, { useEffect, useState } from 'react';
import Coctail from './Coctail/Coctail.js';
import './Coctails.css'

const Coctails = () => {
    const [coctails, setCoctails] = useState([]);
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setCoctails(data.drinks))
    }, [])
    console.log(coctails)
    return (
        <div className="coctails-card">
            {
                coctails.map(coctail => <Coctail key={coctail.idDrink} img={coctail.strDrinkThumb} name={coctail.strDrink} category={coctail.strCategory} glass={coctail.strGlass}></Coctail>)
            }
        </div>
    );
};

export default Coctails;