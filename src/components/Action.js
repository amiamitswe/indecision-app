import React from 'react';

const Action = (props) => (
    <div >
        <button
            className="big-button"
            onClick={props.handleMakeDecision}
            disabled={!props.hasOptions}
        >
            What Should I Do Now for You?
        </button>
    </div>
);

export default Action;
