/**
 * @format
 */
import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import storeConfig from './src/store/storeConfig';
import App from './src/App';
import axios from 'axios';

axios.defaults.baseURL = 'https://clone-instagram-988eb-default-rtdb.firebaseio.com/';

const store = storeConfig();
const Redux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
