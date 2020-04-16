import React from 'react';
import { ItemState } from './ItemState';
export class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<li className="ListItem">
      <div>{this.props.count}</div>
      <div onClick={() => this.props.onClick(this.props.desc)}>{this.props.desc}</div>
      <div onClick={() => { this.props.remove(this.props.desc); }}> {this.props.complete ? "X" : "O"} </div>

    </li>);
  }
}
ListItem.defaultProps = ItemState();
