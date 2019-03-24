class Count extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
    }

    componentDidMount() {
        const data = localStorage.getItem('count');
        
        const count = parseInt(data);
        if(!isNaN(count)){
            this.setState(() => ({ count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
            console.log('State updated');
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleAddOne() {
        this.setState((previusState) =>  {
           return {count : previusState.count + 1};
        });
    }

    handleReset() {
        this.setState(() => {
            return {count : 0};
        });
    }

    handleMinusOne() {
        this.setState((previusState) => {
            return {count: previusState.count - 1};
        });
    }

    render() {
        return(
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>&nbsp;
                <button onClick={this.handleReset}>Reset</button>&nbsp;
                <button onClick={this.handleMinusOne}>-1</button>
            </div>
        );
    }
}


ReactDOM.render(<Count />, document.getElementById('app'));