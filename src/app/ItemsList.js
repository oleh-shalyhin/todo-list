import React from 'react';
import ReactDOM from 'react-dom';

export default class ItemsList extends React.Component {
  constructor() {
    super();
    this.state = {
      editingIndex: null,
    };

    this.onRemoveClick = this.onRemoveClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.onAcceptEditClick = this.onAcceptEditClick.bind(this);
    this.handleRejectEditClick = this.handleRejectEditClick.bind(this);
  }

  onRemoveClick(itemIndex) {
    this.setState({
      editingIndex: null,
    });
    this.props.onRemoveClick(itemIndex);
  }

  handleEditClick(itemIndex) {
    this.setState({
      editingIndex: itemIndex,
    });
  }

  onAcceptEditClick(itemName, index) {
    this.props.onAcceptEditClick(itemName, index);
    this.setState({
      editingIndex: null,
    });
  }

  handleRejectEditClick() {
    this.setState({
      editingIndex: null,
    });
  }

  render() {
    const props = this.props;
    const editingIndex = this.state.editingIndex;

    const items = props.items.map((item, index) => {
      const editing = editingIndex === index;
      return (
        <li className="todoListItem" key={index}>
          <ItemContent item={item} itemIndex={index} editing={editing} onAcceptEditClick={this.onAcceptEditClick} onRejectEditClick={this.handleRejectEditClick} />
          <ItemControls itemIndex={index} onRemoveClick={this.onRemoveClick} onEditClick={this.handleEditClick} />
        </li>
      );
    });

    return (
        <div>
          <ul className="todoList">
            {items}
          </ul>
        </div>
    );
  }
}

class ItemContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.item.name,
    };

    this.handleEditFieldChange = this.handleEditFieldChange.bind(this);
    this.onAcceptEditClick = this.onAcceptEditClick.bind(this);
    this.onRejectEditClick = this.onRejectEditClick.bind(this);
  }

  handleEditFieldChange(e) {
    this.setState({
      content: e.target.value,
    });
  }

  onAcceptEditClick() {
    if(this.state.content === "") {
      this.onRejectEditClick();
    } else {
      this.props.onAcceptEditClick(this.state.content, this.props.itemIndex);
    }
  }

  onRejectEditClick() {
    this.setState({
      content: this.props.item.name,
    });
    this.props.onRejectEditClick();
  }

  render() {
    const props = this.props;
    const text = this.state.content;
    let content = props.editing
        ? <div>
            <input className="editField" type="text" value={text} onChange={this.handleEditFieldChange} />
            <button className="acceptEditBtn" onClick={this.onAcceptEditClick}></button>
            <button className="rejectEditBtn" onClick={this.onRejectEditClick}></button>
          </div>
        : <div>{props.item.name}</div>;

    return (
        <div className="itemContent">
          {content}
        </div>
    );
  }
}

class ItemControls extends React.Component {
  constructor() {
    super();

    this.onEditClick = this.onEditClick.bind(this);
    this.onRemoveClick = this.onRemoveClick.bind(this);
  }

  onEditClick() {
    this.props.onEditClick(this.props.itemIndex);
  }

  onRemoveClick() {
    this.props.onRemoveClick(this.props.itemIndex);
  }

  render() {
    return (
        <div className="itemControls">
          <button className="editBtn" onClick={this.onEditClick}></button>
          <button className="removeBtn" onClick={this.onRemoveClick}>X</button>
        </div>
    );
  }
}