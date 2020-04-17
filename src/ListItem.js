import React from 'react';
import { ItemState } from './ItemState';
export class ListItem extends React.Component {

  render() {
    return (<div className="ListItem">
      <div className="ListItemCounter">{this.props.count}</div>
      <div className={this.props.complete ? "true" :"false"} onClick={() => this.props.onClick(this.props.desc)}>{this.props.desc}</div>
      <button onClick={() => { this.props.remove(this.props.desc); }}>X</button>

    </div>);
  }
}
ListItem.defaultProps = ItemState();
