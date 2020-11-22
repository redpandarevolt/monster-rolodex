import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.components';

import './App.css';



class App extends Component {
  constructor(){
    super();

    this.state = { 
      minions: [],
      searchField: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ minions: users }));
  }
  handleChange(e) {
    this.setState({searchField: e.target.value})
  }

  render() {

    const { minions, searchField } =  this.state;
    const filteredMinions = minions.filter(minions =>
      minions.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search minions'
          handleChange={this.handleChange}
        />
        <CardList minions={ filteredMinions } />
      </div>
    );
  }
}

export default App;
