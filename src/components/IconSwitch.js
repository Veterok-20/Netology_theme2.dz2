import { height, width } from '@mui/system';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
export default function IconSwitch(props) {
    const style={
        width: '100%', 
        height: '40px', 
        fontSize: '40px', 
        textAlign: 'right',
        fontFamily: 'Material Icons'          
    }
return (
    <div onClick={props.onSwitch} style={style}>{props.icon}</div>
)
}

IconSwitch.propTypes = {
    icon: PropTypes.bool,
    onSwitch: PropTypes.func,
};
