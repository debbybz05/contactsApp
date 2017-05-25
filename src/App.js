import React, { Component } from 'react';
import './App.css';
import {Treebeard} from 'react-treebeard';
var contacts = [{
    id:1,
    name: "Friends",
    type: "Group",
    contacts: [{
        id:2, 
        name: "Udi", 
        type: "Contact"
    },
    {
        id:3, 
        name: "Tommy", 
        type: "Contact"
    },
    {
        id:6,
        name: "Old Friends",
        type: "Group",
        contacts: [{
            id:7, 
            name: "Itay", 
            type: "Contact"
        }]
    }]
},
{
    id:4,
    name: "Family",
    type: "Group",
    contacts: [{
        id:5, 
        name: "Roni", 
        type: "Contact"
    }]
},
{
    id: 8, 
    name: "Ori", 
    type: "Contact"
}];

class App extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.onToggle = this.onToggle.bind(this);
    }
    onToggle(node, toggled){
        if(this.state.cursor){this.state.cursor.active = false;}
        node.active = true;
        if(node.contacts){ node.toggled = toggled; }
        this.setState({ cursor: node });
    }
    render(){
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Contact Tree</h1>
                </div>
                <p className="App-intro">
                    <Treebeard
                        data={contacts}
                        onToggle={this.onToggle}
                        animations={false} />
                </p>
            </div>
        );
      }
}

export default App;