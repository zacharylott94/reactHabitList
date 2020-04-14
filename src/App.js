import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const testList = ["Wake", "Eat", "Code", "Sleep", "Repeat"]
  return (
    <div className="App">
      <h1>Habit List</h1>
        <List items={testList} />
        <ListItem />
    </div>
  );
}

class ListItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      complete: false,
    }
  }

  onClick() {
    this.setState({complete: !this.state.complete})
  }
  render () {
    return <li><button onClick={() => this.onClick()}>{this.state.complete ? "X": "O"}</button>{this.props.name}</li>
  }
}
ListItem.defaultProps = {name : "Item Name"}

function List(props) {
  let list = props.items.map((i) => <ListItem key={i.toString()} name={i} />)
  return (
    <ul>
      {list}
    </ul>
  )
}



export default App;
