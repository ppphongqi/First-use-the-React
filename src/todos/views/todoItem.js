import React , {PropTypes} from 'react';

const TodoItem =({onToggle , onRemove , completed , text})=>{
    const checkProp = completed ? {check:true} : {};
    return (
        <li
            className="todo-item"
            style={{
                textDecoration : completed ? 'line-through' : 'none'
            }}
        >
            <input className="toggle" type="checkbox" {...checkProp} readOnly onClick={ onToggle }/>
            <label className="text">{ text } </label>
            <button className="remove" onclick={ onRemove }>x</button>
        </li>
    )
}

// TodoItem.propTypes ={
//     onToggle : PropTypes.func.isRequired,
//     onRemove: PropTypes.func.isRequired,
//     completed : PropTypes.bool.isRequired,
//     text:PropTypes.string.isRequired
// }

export default TodoItem