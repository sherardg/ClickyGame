import React from "react";

function Cards (props) {
    return (
        <div 
        role="img"
        aria-label="click item"
        onClick={() => props.handleClick(props.id)}
        // eslint-disable-next-line
        style= {{ backgroundImage: 'url("${props.image}"}' }}
        // eslint-disable-next-line
        className={'click-item${props.shake ? " shake" : ""}'}
        />
    );
}

export default Cards;