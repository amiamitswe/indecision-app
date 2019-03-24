import React from 'react';

class AddOption extends React.Component {
    state= {
        error: undefined
    }
    
    handleAddOption = (event) => {
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
            {(this.state.error) && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option-form" onSubmit={this.handleAddOption}>
                    <input className="add-option-form__input" type='text' name='option' />
                    <button className="button">Add Option</button>
                    
                </form>
            </div>
        );
    }
}

export default AddOption;