import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
import TodoApp from './TodoApp'


ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider> ,
    document.getElementById('root')
);