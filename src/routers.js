
import React from 'react';
import {Router , Route , IndexRoute , browserHistory } from 'react-router';

import App from '../src/pages/App';
import About from '../src/pages/About';
import Home from '../src/pages/Home';
import NotFound from '../src/pages/NotFound';

import store from './store.js';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';


const createElement = (Component , props) =>{
    return (
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    );
};

const history = syncHistoryWithStore(browserHistory , store);

const Routes = () =>(
    <Router history={history}  createElement = {createElement}>
        <Route path = "/" component = {App}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home} />
            <Route path="about" component={About}/>
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
)

export default Routes; 