///////////////// count App
let count = 0;

const addOne = () => {
    count++;
    renderCountApp();
};

const minusOne = () => {
    count--;
    renderCountApp();
};

const resetValue = () => {
    count = 0;
    renderCountApp();
};

const appRoot  = document.getElementById('app');

const renderCountApp = () => {
    const templateThree = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne}>+1</button>&nbsp;
            <button onClick={resetValue}>Reset</button>&nbsp;
            <button onClick={minusOne}>-1</button>
        </div>
    );

    ReactDOM.render(templateThree, appRoot);
};

renderCountApp();