class Troggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };

        this.handleTroggle = this.handleTroggle.bind(this);
    }

    handleTroggle() {
        this.setState((previusState) => {
            return {isVisible: !previusState.isVisible};
        });
    }

    render() {
        return(
            <div>
                <h1>Visible Troggle</h1>
                <button onClick={this.handleTroggle}>{(this.state.isVisible) ? 'Hide Details' : 'Show Details' }</button>
                {(this.state.isVisible) && <div><p>Hello Mr. Amit, How are You?</p></div>}
            </div>
        );
    }
}

ReactDOM.render(<Troggle />, document.getElementById('app'));