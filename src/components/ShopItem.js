import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function ShopCard(props) {
    const sd = String.fromCharCode(0x24); 
const style = {
    width: '4rem',
    height: '3rem',
    backgroundImage: props.item.img,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0px -10px',
    backgroundSize: 'cover',
}
    return (
        <li className="rowConteiner">           
            <div style={style}></div>
            <div style={{textAlign: 'left'}}className='name'>{props.item.name}</div>
            <div className='color'>{props.item.color}</div>
            <div className='price'>{sd}{props.item.price}</div>           
            <button className='button'>ADD TO CARD</button>
        </li>
    )
}

ShopCard.prototype = {
    item: PropTypes.object,
}