import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Need to import Provider which is a React component
// It essentially ties React and Redux together
import { Provider } from 'react-redux';
// Moved the following line to store.js
// import { createStore, applyMiddleware } from 'redux';
// then added the following:
import store from './store'

import Posts from './components/Posts';
import PostForm from './components/Postform';

// Step1:Need to create the initial store, which accepts
// a reducer function, preloaded state, and an enhancer function
// const store = createStore(() => [], {}, applyMiddleware());
// Step2: store was moved to store.js, so we can now delete the above line.

class App extends Component {
  render() {
    return (
      // Need to 'wrap' everything within the Provider & add the store
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
