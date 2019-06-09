import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'

import Reducers from './src/reducers'
import Preload from './src/Preload'
//import Home from './src/Home'

let store =  createStore(Reducers,applyMiddleware(ReduxThunk));

const Navigator = createStackNavigator({
  Preload:{
    screen: Preload
  }
/*   Home:{
    screen: Home
  } */
});

const AppContainer = createAppContainer(Navigator)  

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}