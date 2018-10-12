import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: [],
      favorites: []

    }
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then(results => results.json())
      .then( data => {
        console.log(data.results);
        this.setState({
          all: data.results
        })
        console.log(this.state);
      })    
  }
  render() {
    console.log (this.state);
    return (
      <div className="App">
        <ContactList contacts = {this.state.all} title="all" />
        <ContactList contacts= {this.state.favorites} title="favorites" />
      </div>
    );
  }
}

const ContactList = (props) => {
  console.log(props);
  return (
    <div>
      <h2>{props.title}</h2>
      { props.contacts.map( contact => <ContactCard key={contact.name.first} contact={contact} /> )}    
    </div>
    
  )
}

class ContactCard extends Component {
  render() {
    return (
      <div className="contact-card">
        <figure>
          <img src={this.props.contact.picture.large} alt="Author" />
          <figcaption>{this.props.contact.name.first}</figcaption>
        </figure>
        <button>Favorite</button>
        <button>Delete</button>
      </div>
    )
  }
}

export default App;