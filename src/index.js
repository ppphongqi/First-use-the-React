import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
import TodoApp from './TodoApp'
import {Provider} from 'react-redux';
import store from './store'



ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider> ,
    document.getElementById('root')
);