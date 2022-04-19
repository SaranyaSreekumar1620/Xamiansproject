import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FirebaseContext} from './store/Context';
import Context from './store/Context';
import firebase from './firebase/config';
import App from './App';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
    <App />
    </Context>
    </FirebaseContext.Provider>,
  document.getElementById('root')
);
