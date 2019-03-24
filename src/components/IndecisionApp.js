import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        subtitle: 'Work everyday with your computer.',
        options: [],
        selectedOptin: undefined
    };
   
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

    handleRemoveAll = () => {
        this.setState(() => ({options: []}));
    }

    handleRemoveOne = (optionToRemove) => {
        this.setState((preState) => ({
            options: preState.options.filter((option) => optionToRemove !== option )
        }));
    }

    handleMakeDecision = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const myDecision = this.state.options[randomNumber];
        this.setState(() => ({selectedOptin: myDecision}));
    }

    handleCloseModal = () => {
        this.setState(() => ({selectedOptin: undefined}));
    }

    handleAddOption = (newOption) => {
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
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handleMakeDecision={this.handleMakeDecision}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleRemoveAll={this.handleRemoveAll}
                            handleRemoveOne={this.handleRemoveOne}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOptin={this.state.selectedOptin}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        );
    }
}

export default IndecisionApp;