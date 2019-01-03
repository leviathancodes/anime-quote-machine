import React, { Component } from 'react';
import { ReactComponent as ArrowIcon } from './images/arrow.svg';

const Next = props => {
    return (
        <div className="next-button" id="new-quote" onClick={props.nextQuote}>
            <ArrowIcon />
        </div>
    )
}

export default Next;