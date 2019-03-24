class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subtitle: 'Work everyday with your computer.',
            options: props.options
        };
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleMakeDecision = this.handleMakeDecision.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);
    }

    componentDidMount() {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({ options }));
            }
        } catch(e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
      if(prevState.options.length !== this.state.options.length){
          const json = JSON.stringify(this.state.options);
          localStorage.setItem('options', json);
      }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleRemoveAll() {
        this.setState(() => ({options: []}));
    }

    handleRemoveOne(optionToRemove) {
        this.setState((preState) => ({
            options: preState.options.filter((option) => optionToRemove !== option )
        }));
    }

    handleMakeDecision() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const myDecision = this.state.options[randomNumber];
        alert(myDecision);
    }

    handleAddOption(newOption) {
        if(!newOption) {
            return 'Provide correct Option';
        }
        else if(this.state.options.indexOf(newOption) > -1) {
            return 'This Option is already Exist';
        }
        
        this.setState((preState) => ({options: [...preState.options ,newOption]}));
    }

    render() {
        return(
            <div>
                <Header 
                    subtitle={this.state.subtitle}  
                />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handleMakeDecision={this.handleMakeDecision}
                />
                <Options 
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    handleRemoveOne={this.handleRemoveOne}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header =(props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) => {
    return(
        <div>
            <button
                onClick={props.handleMakeDecision}
                disabled={!props.hasOptions}
            >
                What Should I Do Now ?
            </button>
        </div>
    );
};

const Options = (props) => {
    const length = props.options.length;
    return(
        <div>
            <button onClick={props.handleRemoveAll}>Remove All</button>
            {(length === 0) ? 
                <p>Please add options !!</p> : 
                <p>Total Available Option : {length}</p>
            }
            {(length !== 0) && 
            (
            <div> 
                {props.options.map((option) => 
                    (
                        <Option
                            key={option}
                            option={option}
                            handleRemoveOne={props.handleRemoveOne}
                        />
                    ))
                }
            </div>
            )}
        </div>
    );
};

const Option = (props) => {
    return(
        <div>
            Option : {props.option}&nbsp;
            <button
                onClick={(e) => {
                    props.handleRemoveOne(props.option)
                }}
            >
            Remove
            </button>
        </div> 
    );
};

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: undefined
        }
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(event) {
        event.preventDefault();
        const newOption = event.target.option.value.trim();
        const error = this.props.handleAddOption(newOption);

        this.setState(() => ({ error }));
        if(!error) {
            event.target.option.value = '';
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />&nbsp;
                    <button>Add Option</button>
                    {(this.state.error) && <p>{this.state.error}</p>}
                </form>
            </div>
        );
    }
}


//stateless functional component
// const User = (props) => {
//     return(
//         <div>
//             <p>Name : {props.name}</p>
//             <p>Age : {props.age}</p>
//         </div>
//     );
// };


const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);
//ReactDOM.render(<User name='Amit Samadder' age='24'/>, appRoot);