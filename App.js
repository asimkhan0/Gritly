import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Client from './app/screens/Search';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
            <Client />
        </Provider>
    );
  }
}

