import React from 'react';
import { ItemState } from './ItemState';
import { ListItemForm } from './ListItemForm';
import { ListItem } from './App';
export class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items
    };
  }
  //Helper functions
  increment(item) {
    item.count += 1;
    return item;
  }
  decrement(item) {
    item.count -= 1;
    return item;
  }
  reset(item) {
    item.complete = false;
    return item;
  }
  removeItem(desc) {
    let { items, itemIndex } = this.getItem(desc);
    items = items.slice(0, itemIndex).concat(items.slice(itemIndex + 1));
    this.updateState(items);
  }
  addItem(desc) {
    if (desc === '') {
      return;
    }
    let { items } = this.getItem();
    let item = ItemState(desc);
    items.push(item);
    this.updateState(items);
  }
  getItem(desc) {
    let items = this.state.items;
    let itemIndex = items.findIndex((i) => i.desc === desc);
    let item = items[itemIndex];
    return { items, itemIndex, item };
  }
  updateState(items) {
    this.setState({ items: items });
  }
  //End Helper Functions
  //gets passed to ItemList children
  handleClick(desc) {
    let { items, itemIndex, item } = this.getItem(desc);
    //toggle completion state of item, increment/decrement it, plug it back into item array
    item.complete = !item.complete;
    item = item.complete ? this.increment(item) : this.decrement(item);
    items[itemIndex] = item;
    //this updates List state and causes a rerender
    this.updateState(items);
  }
  renderChildren() {
    let items = this.state.items;
    items = items.map((i) => {
      return <ListItem {...i} onClick={(desc) => { this.handleClick(desc); }} remove={(desc) => { this.removeItem(desc); }} />;
    });
    return items;
  }
  render() {
    return (<div>
      <ListItemForm submit={(desc) => { this.addItem(desc); }} />
      <ul>
        {this.renderChildren()}
      </ul>
    </div>);
  }
}
