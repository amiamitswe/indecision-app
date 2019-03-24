import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
    <div className="widget-header">
        <h3 className="widget-header__title">Your Options!</h3>
        <button
            onClick={props.handleRemoveAll}
            className="button button--link"
        >
            Remove All
        </button>
    </div>
            {(props.options.length === 0) ? 
                <p className="widget__message">Please add options !!</p> : 
                <p className="widget__message">Total Available Option : {props.options.length}</p>
            }
        {(props.options.length !== 0) && 
        (
        <div> 
            {props.options.map((option, index) => 
                (
                    <Option
                        key={option}
                        option={option}
                        count={index + 1}
                        handleRemoveOne={props.handleRemoveOne}
                    />
                ))
            }
        </div>
        )}
    </div>
);

export default Options;