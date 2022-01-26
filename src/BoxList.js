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

        this.makeNewBox = this.makeNewBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    makeNewBox(box){
        box.uuid = uuid();
        this.setState(curSt => {
            return {boxes: [...curSt.boxes, box]}
        });
    }

    removeBox(key){
        let newBoxes = this.state.boxes.filter(b => b.uuid !== key);
        this.setState({ boxes: newBoxes });
    }

    render() {
        return (
            <div className="BoxList">
                <NewBoxForm 
                    makeNewBox={ this.makeNewBox } 
                />
                { this.state.boxes.map(renderBox.bind(this)) }
            </div>
        );
        
        // ***
        function renderBox(box){
            return <Box 
                    height={ box.height } 
                    width={ box.width } 
                    backgroundColor={ box.backgroundColor } 
                    removeBox={ this.removeBox }
                    key={ box.uuid }
                    uuid={ box.uuid }
                />;
        }
    }
}

export default BoxList;
