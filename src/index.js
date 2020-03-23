import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import myStore from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Provider store={myStore}>
    <App/>
</Provider>,document.getElementById('root'));

serviceWorker.unregister();
