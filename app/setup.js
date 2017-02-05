import React, { Component } from 'react';
import App from './App';
import { Provider } from 'react-redux';

import setupStore from './setupStore';

import reducers from './reducers';
import { createStore} from 'redux';

function setup(){
    class Root extends Component {

         constructor() {
            super();
            this.state = {
                isLoading: false,
                store: setupStore(() => console.log("setup store done ")),
            };
        }
        render() {
            return (
                <Provider store={this.state.store}>
                    <App />
                </Provider>
            );
        }
    }
    return Root;
}


export default setup;