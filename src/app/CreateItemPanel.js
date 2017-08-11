import React from 'react';
import ReactDOM from 'react-dom';

export default class CreateItemPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    const itemName = this.state.itemName;

    if(itemName) {
      this.props.onCreateClick(itemName);
      this.setState({
        itemName: '',
      });
    }
  }

  handleChange(e) {
    this.setState({
      itemName: e.target.value,
    });
  }

  render() {
    const itemName = this.state.itemName;

    return (
        <div>
          <button className="createButton" onClick={this.handleClick}>+</button>
          <input className="inputField"
                 type="text"
                 value={itemName}
                 placeholder="Enter task name..."
                 onChange={this.handleChange} />
        </div>
    );
  }
}