import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 as uuid } from 'uuid';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        };

        this.makeNewBox.bind(this);
    }

    makeNewBox(box){
        box.uuid = uuid();
        this.setState(curSt => {
            return {boxes: [...curSt.boxes, box]}
        });
    }

    render() {
        return (
            <div className="BoxList">
                <NewBoxForm 
                    makeNewBox={ this.makeNewBox.bind(this) } 
                />
                { this.state.boxes.map(renderBox) }
            </div>
        );
        
        // ***
        function renderBox(box){
            return <Box 
                    height={ box.height } 
                    width={ box.width } 
                    backgroundColor={ box.backgroundColor } 
                    key={ box.uuid }
                />;
        }
    }
}

export default BoxList;
