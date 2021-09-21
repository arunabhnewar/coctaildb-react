import React from 'react';
import './Coctail.css'

const Coctail = (props) => {
    return (
        <div className='coctail-card'>
            <div className="item-card" style={{ width: '16rem' }}>
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="item-info">
                    <h5 className="title">{props.name}</h5>
                    <p className="info">Category: {props.category}</p>
                    <p className="info pb-3">Glass: {props.glass}</p>
                </div>
            </div>
        </div>
    );
};

export default Coctail;