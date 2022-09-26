import React, { Component } from 'react';
import ShopCard from './ShopCard';
import PropTypes from 'prop-types';

export default function CardsView(props) {
    return (
        <div className='cardsConteiner'>
        {props.products.map((item,index)=><ShopCard item={item} key={index} />)}        
        </div>      
    )
}

CardsView.prototype = {
    products: PropTypes.array, 
}