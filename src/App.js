import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const testList = [<ListItem name='333333333333333333333'/>,<ListItem name="hello"/>,<ListItem />,<ListItem name="noU"/>]
  return (
    <div className="App">
      <h1>Habit List</h1>
        <List items={testList} className="List"/>
    </div>
  );
}

class ListItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      complete: false,
      number: 0
    }
  }

  increment() {
    this.setState({number: this.state.number+1})
  }
  decrement() {
    this.setState({number: this.state.number-1})
  }
  reset() {
    this.setState({complete:false})
  }

  onClick() {
    this.setState({complete: !this.state.complete})
    this.state.complete ? this.decrement() : this.increment()
  }
  render () {
    return (
      <li onClick={() => this.onClick()} className="ListItem">
      <div>{this.state.number}</div>
      <div>{this.props.name}</div>
      <div> {this.state.complete ? "X": "O"} </div>

      </li>)
  }
}
ListItem.defaultProps = {name : "Item Name"}

class List extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: this.props.items
    }
  }

  render() {
    let list = this.props.items
    return (
      <div>
        <ListItemForm />
        <ul>
        {list}
        </ul>
      </div>
    )
  }
}




class ListItemForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {value: ''}

  }
  handleChange(event){
    this.setState({value: event.target.value})
  }

  handleSubmit() {
    console.log("add to list: " + this.state.value)
  }

  render () {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
        <button onClick={() => this.handleSubmit()}>Add to list</button>
      </div>
    )
  }

}



export default App;
