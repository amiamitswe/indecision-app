import React from 'react';

const Option = (props) => (
    <div className="option">
        <div className="option__option">{props.count}. {props.option}</div>
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleRemoveOne(props.option)
            }}
        >
        Remove
        </button>
    </div> 
);

export default Option;