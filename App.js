import React, {Component} from 'react';
import {StackNavigation} from 'react-navigation'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {ReduxThunk} from 'redux-thunk'

import Reducers from './src/Reducers'
import Preload from './src/Preload'
import Home from './src/Home'

let store =  createStore(Reducers,applyMiddleware(ReduxThunk));

const Navigator = StackNavigation({
  Preload:{
    screen: Preload
  },
  Home:{
    screen: Home
  }
});

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Navigator/>
      </Provider>
    );
  }
}