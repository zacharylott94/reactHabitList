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
      <li className="ListItem">
      <div>{this.props.count}</div>
      <div onClick={() => this.props.onClick(this.props.desc)}>{this.props.desc}</div>
      <div onClick={() => {this.props.remove(this.props.desc)}}> {this.props.complete ? "X": "O"} </div>

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

  //Helper functions
  increment(item) {
    item.count += 1
    return item
  }

  decrement(item) {
    item.count -=1
    return item
  }

  reset(item) {
    item.complete = false
    return item
  }

  removeItem(desc) {
    let {items, itemIndex} = this.getItem(desc)
    items = items.slice(0,itemIndex).concat(items.slice(itemIndex+1))
    this.updateState(items)
  }
  
  addItem(desc) {
    if (desc === '') {
      return
    }
    let {items} = this.getItem()
    let item = ItemState(desc)
    items.push(item)
    this.updateState(items)

  }

  getItem(desc){
    let items = this.state.items
    let itemIndex = items.findIndex((i) => i.desc === desc)
    let item = items[itemIndex]
    return {items, itemIndex, item}
  }


  
  updateState(items) {
    this.setState({items: items})
  }
  //End Helper Functions
  

  //gets passed to ItemList children
  handleClick(desc) {
    let {items, itemIndex, item} = this.getItem(desc)


    //toggle completion state of item, increment/decrement it, plug it back into item array
    item.complete = !item.complete
    item = item.complete ? this.increment(item) : this.decrement(item)
    items[itemIndex]= item

    //this updates List state and causes a rerender
    this.updateState(items)
  }

  renderChildren() {
    let items = this.state.items
    items = items.map((i) => {return <ListItem {...i} 
                                        onClick = {(desc) => {this.handleClick(desc)}}
                                        remove = {(desc) => {this.removeItem(desc)}}
                                      />})
    return items
  }

  render() {
    return (
      <div>
        <ListItemForm submit={(desc) => {this.addItem(desc)}} />
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
    this.props.submit(this.state.value)
    this.setState({value: ''})
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

//This factory function returns a simple object that helps organize data
function ItemState(desc = "Description",state = false,count = 0) {
  return {
    desc,
    state,
    count
  }
}


export default App;
