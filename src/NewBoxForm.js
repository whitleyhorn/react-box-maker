import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: "",
            width: "",
            backgroundColor: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(evt){
        evt.preventDefault();
        this.setState({[evt.target.name]: evt.target.value});
    }

    onSubmit(evt){
        evt.preventDefault();
        this.props.makeNewBox({...this.state});
        this.setState({height: "", width: "", backgroundColor: ""});
    }

    render() {
        return (
            <form className="NewBoxForm" onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="height">Height</label>
                    <input 
                        type="text" 
                        name="height" 
                        id="height" 
                        value={this.state.height} 
                        onChange={this.onChange} 
                    />
                </div>
                <div>
                    <label htmlFor="width">Width</label>
                    <input 
                        type="text" 
                        name="width" 
                        id="width" 
                        value={this.state.width} 
                        onChange={this.onChange} 
                    />
                </div>
                <div>
                    <label htmlFor="backgroundColor">Background Color</label>
                    <input 
                        type="text" 
                        name="backgroundColor" 
                        id="backgroundColor" 
                        value={this.state.backgroundColor} 
                        onChange={this.onChange} 
                    />
                </div>
                <button>Add new box</button>
            </form>
        );
    }
}

export default NewBoxForm;
