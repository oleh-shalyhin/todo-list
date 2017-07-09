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
    this.props.onCreateClick(this.state.itemName);
  }

  handleChange(e) {
    this.setState({
      itemName: e.target.value,
    });
  }

  render() {
    return (
        <div>
          <button onClick={this.handleClick}>+</button>
          <input type="text" value={this.state.itemName} onChange={this.handleChange} />
        </div>
    );
  }
}

class ItemList extends React.Component {
  render() {
    const items = this.props.items.map((item, index) => (
        <li key={index}>{item}</li>
    ));
    return (
        <div>
          <ul>
            {items}
          </ul>
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
  }

  handleCreateClick(itemName) {
    const items = this.state.items.slice();
    items.push(itemName);
    this.setState({
      items: items
    });
  }

  render() {
    const items = this.state.items;
    return (
        <div>
          <CreateItemInput onCreateClick={this.handleCreateClick} />
          <ItemList items={items} />
          <ProgressBar />
        </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);