import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CreateItemInput extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    if(this.state.itemName) {
      this.props.onCreateClick(this.state.itemName);
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
    return (
        <div>
          <button className="createButton" onClick={this.handleClick}>+</button>
          <input className="inputField"
                 type="text"
                 value={this.state.itemName}
                 placeholder="Enter task name..."
                 onChange={this.handleChange} />
        </div>
    );
  }
}

class ItemList extends React.Component {
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

class ProgressBar extends React.Component {
  render() {
    return (
        <div></div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };

    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleCreateClick(itemName) {
    const items = this.state.items.slice();
    items.push(itemName);
    this.setState({
      items: items
    });
  }

  handleRemoveItem(itemId) {
    const items = this.state.items.slice();
    items.splice(itemId, 1);
    this.setState({
      items: items
    });
  }

  render() {
    const items = this.state.items;
    return (
        <div className="app">
          <CreateItemInput onCreateClick={this.handleCreateClick} />
          <ItemList items={items} onRemoveClick={this.handleRemoveItem} />
          <ProgressBar />
        </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);