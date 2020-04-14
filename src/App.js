import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const testList = ["Wake", "Eat", "Code", "Sleep", "Repeat"]
  return (
    <div className="App">
      <h1>Habit List</h1>
      <ul>
        <List items={testList} />
      </ul>
    </div>
  );
}

class ListItem extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    return <li>{this.props.name}</li>
  }
}

function List(props) {
  let list = props.items.map((i) => <ListItem key={i.toString()} name={i} />)
  return (
    <ul>
      {list}
    </ul>
  )
}

ListItem.defaultProps = {name:"Item Name"}

export default App;
