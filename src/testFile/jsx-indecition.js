console.log("app.js is running");

// jsx - JavaScript XML
const app = {
    title: 'Indisition App',
    subTitle: 'This is a react application',
    option: []
};

const onButtonSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option) {
        app.option.push(option);
        e.target.elements.option.value = '';
        renderAppToDisplay();
    }
};

const onRemoveAllOptions = () => {
    app.option = [];
    renderAppToDisplay();
};

const onMakeDecision = () => {
    const arrarLength = app.option.length;
    const rendomNumbar = Math.floor(Math.random() * arrarLength);
    const dicision = app.option[rendomNumbar];
    alert(dicision);

};

const appRoot  = document.getElementById('app');

const renderAppToDisplay = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>Total Option is : {app.option.length}</p>
            <button 
                disabled={app.option.length === 0} 
                onClick={onMakeDecision}>What Should I Do?
            </button>&nbsp;
            <button 
                disabled={app.option.length === 0} 
                onClick={onRemoveAllOptions}>Remove All Options
            </button>
            {(app.option.length > 0) ? <p>Here is Your option</p> : <p>No Option</p>}
            <ol>
                {app.option.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onButtonSubmit}>
                <input type='text' name='option'/>&nbsp;
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderAppToDisplay();
