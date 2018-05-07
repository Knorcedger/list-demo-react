import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list/List';
import ListItemAccount from './list/ListItemAccount';
import ListItemPerson from './list/ListItemPerson';

class App extends Component {
  state = {
    accounts: [{
      nickname: 'fire',
      balance: 100
    }, {
      nickname: 'yeah',
      balance: 120
    }],
    contacts: [{
      name: 'Achilleas'
    }, {
      name: 'Ioanna'
    }]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <List
          data={this.state.contacts}
          filter={true}
          filterKey='name'
          listItem={person => (
            <ListItemPerson person={person} key={person.name} />
          )}
        />

        <List
          data={this.state.accounts}
          filter={true}
          filterKey='nickname'
          listItem={account => (
            <ListItemAccount account={account} key={account.nickname} />
          )}
        />
      </div>
    );
  }
}

export default App;
