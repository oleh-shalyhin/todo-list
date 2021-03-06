import React from 'react';
import ReactDOM from 'react-dom';
import CreateItemPanel from './CreateItemPanel';
import ItemsList from './ItemsList';
import ProgressPanel from './ProgressPanel';

let uniqueID = 0;

function getUniqueID() {
  return uniqueID++;
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };

    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleAcceptEditClick = this.handleAcceptEditClick.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  handleCreateClick(itemName) {
    const items = this.state.items.slice();
    items.push({
      id: getUniqueID(),
      name: itemName,
    });
    this.setState({
      items: items
    });
  }

  handleAcceptEditClick(itemName, index) {
    const items = this.state.items.slice();
    items[index].name = itemName;
    this.setState({
      items: items
    });
  }

  handleRemoveItem(index) {
    const items = this.state.items.slice();
    items.splice(index, 1);
    this.setState({
      items: items
    });
  }

  render() {
    const items = this.state.items;
    return (
        <div className="app">
          <CreateItemPanel onCreateClick={this.handleCreateClick} />
          <ItemsList items={items} onRemoveClick={this.handleRemoveItem} onAcceptEditClick={this.handleAcceptEditClick} />
          <ProgressPanel />
        </div>
    );
  }
}