import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {AUTHENTICATED} from "./actions/actionTypes";
import configureStore from "./store";
import {Provider} from 'react-redux'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import requireAuth from "./components/hoc/RequireAuth";
import noRequireAuth from "./components/hoc/NoRequireAuth";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Welcome from './components/Welcome'
import LoginRequired from './components/LoginRequired'
import EntriesContainer from "./containers/EntriesContainer";
import CreateAccount from "./components/CreateAccount";
import CreateEntry from "./components/CreateEntry";

const store = configureStore()
const history = createHistory()
const userToken = localStorage.getItem('token')

if(userToken) {
    store.dispatch({ type: AUTHENTICATED });
}
const API_URL ='http://localhost:3000/'

    ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter history={history} apiUrl={API_URL}>
          <div>
              <NavBar/>
              <Route path='/newentry' component={requireAuth(CreateEntry)}/>
              <Route path='/createaccount' component={noRequireAuth(CreateAccount)}/>
              <Route path='/login' component={noRequireAuth(Login)}/>
             <Route path='/' component={noRequireAuth(App)}/>
              <Route path='/welcome' component={requireAuth(Welcome)}/>
              <Route path='/entries' component={requireAuth(EntriesContainer)}/>
              <Route path='/loginrequired' component={noRequireAuth(LoginRequired)}/>

          </div>
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
