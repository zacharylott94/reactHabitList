import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const testList = [ItemState("Do you homework"),ItemState("Eat a banana"),ItemState(),ItemState()]

  return (
    <div className="App">
      <h1>Habit List</h1>
        <List className="List" items={testList}/>
    </div>
  );
}

class ListItem extends React.Component {
  constructor(props){
    super(props)
  }




  render () {
    return (
      <li onClick={() => this.props.onClick(this.props.desc)} className="ListItem">
      <div>{this.props.count}</div>
      <div>{this.props.desc}</div>
      <div> {this.props.complete ? "X": "O"} </div>

      </li>)
  }
}
ListItem.defaultProps = ItemState()

class List extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: this.props.items
    }
  }

  increment(item) {
    item.count += 1
    return item
  }
  decrement(item) {
    item.count -=1
    return item
  }
  reset() {
    this.setState({complete:false})
  }


  updateState(items) {
    this.setState({items: items})
  }
  

  handleClick(desc) {
    let items = this.state.items
    let itemIndex = items.findIndex((i) => i.desc === desc)
    let item = items[itemIndex]
    // console.log(item)
    item.complete = !item.complete
    item = item.complete ? this.increment(item) : this.decrement(item)
    items[itemIndex]= item
    this.updateState(items)
    // this.state.complete ? this.decrement() : this.increment()
  }

  renderChildren() {
    let items = this.state.items
    items = items.map((i) => {return <ListItem {...i} onClick = {(desc) => {this.handleClick(desc)}}/>})
    return items
  }

  render() {
    return (
      <div>
        <ListItemForm />
        <ul>
          {this.renderChildren()}
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
        <input
          type="text"
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
          onKeyPress={(e) => {
            // e.preventDefault();
            if (e.key == "Enter") { this.handleSubmit() }
          }} />
        <button
          onClick={() => this.handleSubmit()}
          >Add to list</button>
      </div>
    )
  }

}

//This holds a simple object construct that helps organize data
function ItemState(desc = "Description",state = false,count = 0) {
  return {
    desc,
    state,
    count
  }
}

// const testobject = ItemState("Homework", true, 3)
// setInterval(() => console.log(testobject), 1000)

export default App;
