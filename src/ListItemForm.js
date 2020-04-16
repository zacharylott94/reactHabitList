import React from 'react';
export class ListItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit() {
    this.props.submit(this.state.value);
    this.setState({ value: '' });
  }
  render() {
    return (<div>
      <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} onKeyPress={(e) => {
        // e.preventDefault();
        if (e.key == "Enter") {
          this.handleSubmit();
        }
      }} />
      <button onClick={() => this.handleSubmit()}>Add to list</button>
    </div>);
  }
}
