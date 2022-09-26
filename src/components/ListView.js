import React, { Component } from 'react';
import ShopItem from './ShopItem';
import PropTypes from 'prop-types';


export default function ListView(props) {
    return (
        <div className='list'>
            <ul style={{listStyleType: 'none'}}>
                {props.products.map((item, index) => <ShopItem item={item} key={index} />)}
            </ul>
        </div>
    )
}

ListView.prototype = {
    products: PropTypes.array,
}