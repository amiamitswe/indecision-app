let view = false;
const onViewDetails = () => {
    view = !view;
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const tamplete = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onViewDetails}>{view ? 'Hide Details' : 'Show Details' }</button>
            {view && <p>Here is The details</p> }
        </div>
    );

    ReactDOM.render(tamplete, appRoot);
};

render();