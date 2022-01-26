import React, { Component } from 'react';

class Box extends Component {
    render() {
        const { height, width, backgroundColor } = this.props;
        let style = {
            height: `${height}px`,
            width: `${width}px`,
            backgroundColor: backgroundColor
        };
        return <div className="Box" style={style}/>
    }
}

export default Box;
