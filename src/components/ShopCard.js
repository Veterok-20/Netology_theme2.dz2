import { positions } from '@mui/system';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function ShopCard(props) {
    const sd = String.fromCharCode(0x24);

    return (
        <div className="card" style={{ backgroundImage: props.item.img }}>
            <div className='name'>{props.item.name.toUpperCase()}</div>
            <div className='color'>{props.item.color}</div>
            <div className='pricebutton'>
                <div className='price'>{sd}{props.item.price}</div>
                <div><button className='button'>ADD TO CARD</button>
                </div>
            </div>
        </div>
    )
}

ShopCard.prototype = {
    item: PropTypes.object,
}