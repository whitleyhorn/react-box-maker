import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
        this.removeMe = this.removeMe.bind(this);
    }

    removeMe(evt){
        this.props.removeBox(this.props.uuid);
    }

    render() {
        const { height, width, backgroundColor } = this.props;
        let style = {
            height: `${height}px`,
            width: `${width}px`,
            backgroundColor: backgroundColor
        };
        return (
            <div className="Box">
                <div className="Box-div" style={style}/>
                <button className="Box-button" onClick={this.removeMe}>Remove box</button>
            </div>
        );
    }
}

export default Box;
