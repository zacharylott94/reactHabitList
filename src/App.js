import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ItemState } from './ItemState';
import { List } from './List';

function App() {
  const testList = [ItemState("Do you homework"),ItemState("Eat a banana"),ItemState(),ItemState()]

  return (
    <div className="App">
      <h1>Habit List</h1>
        <List className="List" items={testList}/>
    </div>
  );
}

export class ListItem extends React.Component {
  constructor(props){
    super(props)
  }




  render () {
    return (
      <li className="ListItem">
      <div>{this.props.count}</div>
      <div onClick={() => this.props.onClick(this.props.desc)}>{this.props.desc}</div>
      <div onClick={() => {this.props.remove(this.props.desc)}}> {this.props.complete ? "X": "O"} </div>

      </li>)
  }
}
ListItem.defaultProps = ItemState()

export default App;
