import React from 'react';
import ReactDOM from 'react-dom';

export default class ItemsList extends React.Component {
  render() {
    const props = this.props;
    const items = props.items.map((item, index) => (
        <li className="todoListItem" key={index}>
          {item}
          <ItemControls itemIndex={index} onRemoveClick={props.onRemoveClick} />
        </li>
    ));
    return (
        <div>
          <ul className="todoList">
            {items}
          </ul>
        </div>
    );
  }
}

class ItemControls extends React.Component {
  constructor() {
    super();
    this.onRemoveClick = this.onRemoveClick.bind(this);
  }

  onRemoveClick() {
    this.props.onRemoveClick(this.props.itemIndex);
  }

  render() {
    return (
        <div className="itemControls">
          <button className="removeBtn" onClick={this.onRemoveClick}>X</button>
        </div>
    );
  }
}