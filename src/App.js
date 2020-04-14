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
      <li>
        <button onClick={() => this.onClick()}>{this.state.complete ? "X": "O"}</button>
        {this.props.name} : {this.state.number}
        {/*This is for testing the reset function
          <button onClick={() => this.reset()}>reset</button>*/}
      </li>)
  }
}
ListItem.defaultProps = {name : "Item Name"}

class List extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    let list = this.props.items.map((i) => <ListItem key={i.toString()} name={i} />)
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
